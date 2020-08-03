defmodule Exercise do
  # Write a mapsum function that takes a list and a function.
  # It applies the function to each element of the list and then sums the result
  def mapsum([], _) do
    0
  end

  def mapsum([head | tail], fun) do
    fun.(head) + mapsum(tail, fun)
  end

  # Write a function MyList.span(from, to) that returns a list of the
  # numbers from from up to to.
  def span(from, to) do
    Enum.map(from..to, &(&1))
  end
end
