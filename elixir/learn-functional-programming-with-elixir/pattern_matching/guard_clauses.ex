defmodule EvenOrOdd do
  require(Integer)

  def check(number) when Integer.is_even(number) do
    "even"
  end

  def check(number) when Integer.is_odd(number) do
    "odd"
  end
end
