defmodule RumblWeb.AuthTest do
  use RumblWeb.ConnCase, async: true

  alias RumblWeb.Auth
  alias Rumbl.Accounts.User

  setup %{conn: conn} do
    conn =
      conn
      |> bypass_through(RumblWeb.Router, :browser)
      |> get("/")

    {:ok, conn: conn}
  end

  test "authenticate_user halts when no current_user exists", %{conn: conn} do
    conn = Auth.authenticate_user(conn, [])
    assert conn.halted
  end

  test "authenticate_user for existing current_user", %{conn: conn} do
    conn =
      conn
      |> assign(:current_user, %User{})
      |> Auth.authenticate_user([])

    refute conn.halted
  end

  test "login puts the user in the session", %{conn: conn} do
    login_conn =
      conn
      |> Auth.login(%User{id: 123})
      |> send_resp(:ok, "")

    next_conn = get(login_conn, "/")
    assert get_session(next_conn, :user_id) == 123
  end

  test "logout drops the session", %{conn: conn} do
    logout_conn =
      conn
      |> put_session(:user_id, 123)
      |> Auth.logout()
      |> send_resp(:ok, "")

    next_conn = get(logout_conn, "/")
    refute get_session(next_conn, :user_id)
  end

  test "call places user from session into assigns", %{conn: conn} do
    user = user_fixture()

    conn =
      conn
      |> put_session(:user_id, user.id)
      |> Auth.call(Auth.init([]))

    assert conn.assigns.current_user.id == user.id
  end
end
