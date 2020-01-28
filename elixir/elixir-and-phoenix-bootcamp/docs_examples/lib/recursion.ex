defmodule DocsExamples.Recursion do
  @moduledoc """
    Shows how to use recursion in elixir since we don't have for loops.

    Obs: Yes this can be done with the Enum module, this is only for learning purposes.
  """
  def print_multiple_times(msg, n) when n <= 1 do
    IO.puts msg
  end

  def print_multiple_times(msg, n) do
    IO.puts msg
    print_multiple_times(msg, n - 1)
  end

  def sum_list([head | tail], acum) do
    sum_list(tail, head + acum)
  end

  def sum_list([], acum) do
    acum
  end
end
