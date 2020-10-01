defmodule Rumbl.Multimedia.Video do
  use Ecto.Schema
  import Ecto.Changeset
  alias Rumbl.Accounts.User
  alias Rumbl.Multimedia.Category

  schema "videos" do
    field :description, :string
    field :title, :string
    field :url, :string

    belongs_to :user, User
    belongs_to :category, Category

    timestamps()
  end

  @doc false
  def changeset(video, attrs) do
    video
    |> cast(attrs, [:url, :title, :description, :category_id])
    |> validate_required([:url, :title, :description])
    |> assoc_constraint(:category)
  end
end
