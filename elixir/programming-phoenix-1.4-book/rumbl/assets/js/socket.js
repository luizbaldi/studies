import { Socket } from "phoenix";

const socket = new Socket("/socket", {
  params: { token: window.userToken },
  logger: (kind, message, data) => console.log({ kind, message, data }),
});

export default socket;
