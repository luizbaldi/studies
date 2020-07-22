defmodule Discuss.Repo.Migrations.AddComents do
  use Ecto.Migration

  def change do
    create table(:comments) do
      add :content, :string
      add :user_id, references(:users)
      add :topic_id, references(:topics)
    end
  end
end
