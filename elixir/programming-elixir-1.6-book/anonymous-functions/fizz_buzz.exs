# Write a function that takes three arguments. If the first two are zero,
# return “FizzBuzz.” If the first is zero, return “Fizz.”
# If the second is zero, return “Buzz.” Otherwise return the third argument.

fizzBuzz = fn
  0, 0, _ -> "FizzBuzz"
  0, _, _ -> "Fizz"
  _, 0, _ -> "Buzz"
  _, _, _ -> "Error"
end

# Prints "Buzz"
fizzBuzz.(1, 0, 1)

# Prints "FizzBuzz"
fizzBuzz.(0, 0, 1)

# Prints "Fizz"
fizzBuzz.(0, 1, 0)

# Prints "Error"
fizzBuzz.(1, 1, 1)
