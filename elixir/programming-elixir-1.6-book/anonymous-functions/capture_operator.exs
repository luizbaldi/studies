# Use the & notation to rewrite the following:

# 1. Enum.map [1,2,3,4], fn x -> x + 2 end
Enum.map([1,2,3,4], &(&1 + 2))

# 2. Enum.each [1,2,3,4], fn x -> IO.inspect x end
Enum.each [1,2,3,4], &(IO.inspect(&1))
