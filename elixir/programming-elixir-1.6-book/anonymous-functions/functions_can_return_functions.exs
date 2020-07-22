# Write a function prefix that takes a string. It should return a
# new function that takes a second string. When that second
# function is called, it will return a string containing the
# first string, a space, and the second string

prefix = fn
  prefix_str -> (fn name -> "#{prefix_str} #{name}" end)
end

mr = prefix.("Mr.")

# Prints "Mr. Luiz"
mr.("Luiz")

# Prints "Elixir Clojures"
prefix.("Elixir").("Clojures")
