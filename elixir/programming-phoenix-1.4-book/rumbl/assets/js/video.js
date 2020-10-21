import { Presence } from "phoenix";
import Player from "./player";

const escape = (content) => {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(content));
  return div.innerHTML;
};

const Video = {
  init(socket, element) {
    if (!element) return;

    const playerId = element.getAttribute("data-player-id");
    const videoId = element.getAttribute("data-id");

    socket.connect();

    Player.init(element.id, playerId, () => {
      this.onReady(videoId, socket);
    });
  },

  onReady(videoId, socket) {
    const msgContainer = document.getElementById("msg-container");

    msgContainer.addEventListener("click", (event) => {
      event.preventDefault();

      const seconds =
        event.target.getAttribute("data-seek") ||
        event.target.parentNode.getAttribute("data-seek");

      if (!seconds) return;

      Player.seekTo(seconds);
    });

    let lastSeenId = 0;
    const vidChannel = socket.channel(`videos:${videoId}`, () => ({
      last_seen_id: lastSeenId,
    }));

    const presence = new Presence(vidChannel);
    const userList = document.getElementById("user-list");

    presence.onSync(() => {
      userList.innerHTML = presence
        .list(
          (id, { metas: [first, ...rest], user }) =>
            `<li>${user.username}: (${rest.length + 1})</li>`
        )
        .join("");
    });

    vidChannel
      .join()
      .receive("ok", ({ annotations }) => {
        const ids = annotations.map(({ id }) => id);

        if (ids.length > 0) {
          lastSeenId = Math.max(...ids);
          console.log({ lastSeenId });
        }

        this.scheduleMessages(msgContainer, annotations);
      })
      .receive("error", (reason) =>
        console.log({ msg: "Join failed", reason })
      );

    vidChannel.on("new_annotation", ({ id, user, body, at }) => {
      lastSeenId = id;
      console.log({ lastSeenId });
      this.renderAnnotation(msgContainer, { user, body, at });
    });

    const postButton = document.getElementById("msg-submit");
    postButton.addEventListener("click", (e) => {
      const msgInput = document.getElementById("msg-input");

      vidChannel
        .push("new_annotation", {
          body: msgInput.value,
          at: Player.getCurrentTime(),
        })
        .receive("error", (error) => console.log({ error }));

      msgInput.value = "";
    });
  },

  renderAnnotation(msgContainer, { user, body, at }) {
    const template = document.createElement("div");

    template.innerHTML = `
        <a href="#" data-seek="${escape(at)}">
          [${this.formatTime(at)}]
          <b>${escape(user.username)}</b>: ${escape(body)}
        </a>
      `;

    msgContainer.appendChild(template);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  },

  scheduleMessages(msgContainer, annotations) {
    clearTimeout(this.scheduleTimer);
    this.scheduleTimer = setTimeout(() => {
      const currentTime = Player.getCurrentTime();
      const remainingAnnotations = this.renderAtTime(
        annotations,
        currentTime,
        msgContainer
      );
      this.scheduleMessages(msgContainer, remainingAnnotations);
    }, 1000);
  },

  renderAtTime(annotations, currentTime, msgContainer) {
    return annotations.filter((annotation) => {
      if (annotation.at > currentTime) {
        return true;
      }

      this.renderAnnotation(msgContainer, annotation);
      return false;
    });
  },

  formatTime(at) {
    const date = new Date(null);
    date.setSeconds(at / 1000);
    return date.toISOString().substr(14, 5);
  },
};

export default Video;
