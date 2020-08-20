defmodule CliTest do
  use ExUnit.Case
  doctest Issues

  import Issues.CLI, only: [parse_args: 1, sort_into_descending_order: 1]

  test ":help returned by option passing with -h and --help options" do
    assert parse_args(["-h", "anything"]) == :help
    assert parse_args(["--help", "anything"]) == :help
  end

  test "three values returned if three arguments given" do
    assert parse_args(["user", "project", "99"]) == {"user", "project", 99}
  end

  test "count is default if two values give" do
    assert parse_args(["user", "project"]) == {"user", "project", 4}
  end

  test "sort descending orders the correct way" do
    result =
      ["c", "a", "b"]
      |> fake_created_at_list
      |> sort_into_descending_order

    issues = for issue <- result, do: Map.get(issue, "created_at")
    assert issues == ~w(c b a)
  end

  defp fake_created_at_list(values) do
    for value <- values,
        do: %{"created_at" => value, "other_data" => "xxx"}
  end
end
