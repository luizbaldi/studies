defmodule CardsTest do
  use ExUnit.Case
  doctest Cards

  test "should create a deck with 20 cards" do
    assert length(Cards.create_deck) == 20
  end

  test "should shuffle deck properly" do
    deck = Cards.create_deck
    refute deck == Cards.shuffle(deck)
  end
end
