defmodule DocsExamplesTest do
  use ExUnit.Case
  doctest DocsExamples

  test "greets the world" do
    assert DocsExamples.hello() == :world
  end
end
