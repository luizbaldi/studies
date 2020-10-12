defmodule Rumbl.MultimediaTest do
  use Rumbl.DataCase, async: true

  alias Rumbl.Multimedia
  alias Rumbl.Multimedia.{Category, Video}

  describe "categories" do
    test "list_alphabetical_categories/0" do
      category_names = ~w(Drama Action Comedy)

      for name <- category_names do
        Multimedia.create_category!(name)
      end

      alphabetical_names =
        for %Category{name: name} <- Multimedia.list_alphabetical_categories() do
          name
        end

      assert alphabetical_names == Enum.sort(category_names)
    end
  end

  describe "videos" do
    @valid_attrs %{title: "title", description: "desc", url: "http://local"}
    @invalid_attrs %{title: nil, description: nil, url: nil}

    setup do
      user = user_fixture()

      {:ok, user: user}
    end

    test "list_videos/0 returns all videos", %{user: user} do
      %Video{id: id1} = video_fixture(user)
      assert [%Video{id: ^id1}] = Multimedia.list_videos()
      %Video{id: id2} = video_fixture(user)
      assert [%Video{id: ^id1}, %Video{id: ^id2}] = Multimedia.list_videos()
    end

    test "get_video1/1 returns the video with given id", %{user: user} do
      %Video{id: id} = video_fixture(user)
      assert %Video{id: ^id} = Multimedia.get_video!(id)
    end

    test "create_video/2 with valid data creates a video", %{user: user} do
      assert {:ok, %Video{} = video} = Multimedia.create_video(user, @valid_attrs)
      assert video.title == "title"
      assert video.description == "desc"
      assert video.url == "http://local"
    end

    test "create_video/2 with invalid data returns error changeset", %{user: user} do
      assert {:error, %Ecto.Changeset{} = changeset} =
               Multimedia.create_video(user, @invalid_attrs)

      assert %{title: ["can't be blank"]} = errors_on(changeset)
    end

    test "update_video/2 with valid data updates the video", %{user: user} do
      video = video_fixture(user)

      assert {:ok, %Video{title: "Potato"} = video} =
               Multimedia.update_video(video, %{title: "Potato"})
    end

    test "update_video/2 with invalid data returns error changeset", %{user: user} do
      video = video_fixture(user)

      assert {:error, %Ecto.Changeset{}} = Multimedia.update_video(video, @invalid_attrs)
    end

    test "delete_video/1 deletes the video", %{user: user} do
      %Video{id: id} = video = video_fixture(user)

      assert {:ok, %Video{id: ^id}} = Multimedia.delete_video(video)
      assert Multimedia.list_videos() == []
    end

    test "change_video/1 returns a video changeset", %{user: user} do
      video = video_fixture(user)
      assert %Ecto.Changeset{} = Multimedia.change_video(video)
    end
  end
end
