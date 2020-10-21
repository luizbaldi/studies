defmodule RumblWeb.Presence do
  @moduledoc """
  Provides presence tracking to channels and processes.

  See the [`Phoenix.Presence`](http://hexdocs.pm/phoenix/Phoenix.Presence.html)
  docs for more details.
  """
  use Phoenix.Presence,
    otp_app: :rumbl,
    pubsub_server: Rumbl.PubSub

  def fetch(_topic, entries) do
    users =
      entries
      |> Map.keys()
      |> Rumbl.Accounts.list_users_with_ids()
      |> Enum.into(%{}, fn user ->
        {to_string(user.id), %{username: user.username}}
      end)

    for {key, %{metas: metas}} <- entries, into: %{} do
      {key, %{metas: metas, user: users[key]}}
    end
  end
end
