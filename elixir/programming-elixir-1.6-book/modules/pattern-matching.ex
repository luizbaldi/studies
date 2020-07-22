defmodule PatternMatching do

  # Implement and run a function sum(n) that uses recursion to calculate
  # the sum of the integers from 1 to n.
  def sum(0) do
    0
  end

  def sum(num) do
    num + sum(num - 1)
  end

end
