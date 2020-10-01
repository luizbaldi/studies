defmodule RumblWeb.VideoController do
  use RumblWeb, :controller

  alias Rumbl.Multimedia
  alias Rumbl.Multimedia.Video

  plug :load_categories when action in [:new, :create, :edit, :update]

  def index(conn, _params) do
    user = conn.assigns.current_user
    videos = Multimedia.list_user_videos(user)
    render(conn, "index.html", videos: videos)
  end

  def new(conn, _params) do
    changeset = Multimedia.change_video(%Video{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"video" => video_params}) do
    user = conn.assigns.current_user

    case Multimedia.create_video(user, video_params) do
      {:ok, video} ->
        conn
        |> put_flash(:info, "Video created successfully.")
        |> redirect(to: Routes.video_path(conn, :show, video))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    user = conn.assigns.current_user
    video = Multimedia.get_user_video!(user, id)
    render(conn, "show.html", video: video)
  end

  def edit(conn, %{"id" => id}) do
    user = conn.assigns.current_user
    video = Multimedia.get_user_video!(user, id)
    changeset = Multimedia.change_video(video)
    render(conn, "edit.html", video: video, changeset: changeset)
  end

  def update(conn, %{"id" => id, "video" => video_params}) do
    user = conn.assigns.current_user
    video = Multimedia.get_user_video!(user, id)

    case Multimedia.update_video(video, video_params) do
      {:ok, video} ->
        conn
        |> put_flash(:info, "Video updated successfully.")
        |> redirect(to: Routes.video_path(conn, :show, video))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", video: video, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = conn.assigns.current_user
    video = Multimedia.get_user_video!(user, id)
    {:ok, _video} = Multimedia.delete_video(video)

    conn
    |> put_flash(:info, "Video deleted successfully.")
    |> redirect(to: Routes.video_path(conn, :index))
  end

  defp load_categories(conn, _) do
    assign(conn, :categories, Multimedia.list_alphabetical_categories())
  end
end
