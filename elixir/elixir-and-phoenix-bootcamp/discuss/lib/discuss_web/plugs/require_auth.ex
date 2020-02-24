defmodule DiscussWeb.Plugs.RequireAuth do
  import Plug.Conn
  import Phoenix.Controller

  alias DiscussWeb.Router.Helpers, as: Routes

  def init(params) do
  end

  def call(conn, _) do
    if conn.assigns[:user] do
      conn
    else
      conn
      |> put_flash(:error, "You must be logged in.")
      |> redirect(to: Routes.topic_path(conn, :index))
      |> halt
    end
  end
end
