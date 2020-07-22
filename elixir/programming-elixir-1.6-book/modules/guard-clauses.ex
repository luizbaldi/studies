defmodule GuardClauses do
  def factorial(0) do
    1
  end

  # Simple usage of guard clauses for a factorial method
  def factorial(num) when is_integer(num) and num > 0 do
    num * factorial(num - 1)
  end
end
