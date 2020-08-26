defmodule StatsTest do
  use ExUnit.Case

  describe "Stats on a list of ints" do
    setup do
      [list: [1,2,3,4]]
    end

    test "calculates sum", context do
      assert Stats.sum(context.list) == 10
    end

    test "calculates count", context do
      assert Stats.count(context.list) == 4
    end

    test "calculates average", context do
      assert Stats.average(context.list) == 2.5
    end
  end
end
