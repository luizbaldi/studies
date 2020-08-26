defmodule StatsPropertyTest do
  use ExUnit.Case
  use ExUnitProperties

  describe "Stats on lists of ints" do
    property "single element lists are their own sum" do
      check all number <- integer() do
        assert Stats.sum([number]) == number
      end
    end

    property "count not negative" do
      check all list <- list_of(integer()) do
        assert Stats.count(list) >= 0
      end
    end

    property "sum equals average times count" do
      check all list <- list_of(integer(), min_length: 1) do
        assert_in_delta(
          Stats.sum(list),
          Stats.count(list) * Stats.average(list),
          1.0e-6
        )
      end
    end
  end

end
