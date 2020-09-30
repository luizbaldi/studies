defmodule Reverse do
  def run(list) do
    run(list, [])
  end

  def run([], reversed) do
    reversed
  end

  def run([head|tail], reversed) do
    run(tail, [head|reversed])
  end
end
