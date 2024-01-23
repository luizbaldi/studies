# Script to show how we pattern match on tuples
user_input = IO.gets("Write your ability score: \n")

ability_modifier =
  case Integer.parse(user_input) do
    {ability_score, _} -> (ability_score - 10) / 2
    :error -> "- Invalid ability score"
  end

IO.puts("Your ability modifier is #{ability_modifier}")
