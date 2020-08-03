defmodule MyList do
  def len([]) do
    0
  end

  def len([_ | tail]) do
    1 + len(tail)
  end

  def square([]) do
    []
  end

  def square([head | tail]) do
    [head * head | square(tail)]
  end

  def map([], _func) do
    []
  end

  def map([head | tail], func) do
    [func.(head) | map(tail, func)]
  end
end
