defmodule Identicon.Recursion do
  def sum_list([head | tail], acum) do
    sum_list(tail, head + acum)
  end

  def sum_list([], acum) do
    acum
  end
end
