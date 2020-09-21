defmodule RumblWeb.UserController do
  use RumblWeb, :controller

  alias Rumbl.Accounts

  def index(conn, _params) do
    users = Accounts.list_users
    render(conn, "index.html", users: users)
  end

  def show(conn, %{"id" => user_id}) do
    user = Accounts.get_user(user_id)
    render(conn, "show.html", user: user)
  end
end
