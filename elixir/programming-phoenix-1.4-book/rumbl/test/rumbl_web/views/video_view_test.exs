defmodule RumblWeb.VideoViewTest do
  use RumblWeb.ConnCase, async: true
  import Phoenix.View

  alias Rumbl.Multimedia.{Video, Category}
  alias Rumbl.Accounts.User

  test "renders index.html", %{conn: conn} do
    videos = [
      %Video{id: 1, title: "dogs"},
      %Video{id: 2, title: "cats"}
    ]

    content =
      render_to_string(
        RumblWeb.VideoView,
        "index.html",
        conn: conn,
        videos: videos
      )

    assert content =~ "Listing Videos"

    for video <- videos do
      assert content =~ video.title
    end
  end

  test "renders new.html", %{conn: conn} do
    owner = %User{}
    changeset = Rumbl.Multimedia.change_video(%Video{})
    categories = [%Category{id: 123, name: "cats"}]

    content =
      render_to_string(RumblWeb.VideoView, "new.html",
        conn: conn,
        changeset: changeset,
        categories: categories
      )

    assert content =~ "New Video"
  end
end
