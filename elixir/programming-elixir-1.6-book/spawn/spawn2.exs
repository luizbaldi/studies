defmodule Spawn2 do
  def greet do
    receive do
      {sender, msg} ->
        send(sender, {:ok, "Hello, #{msg}"})
        greet()
    end
  end
end

pid = spawn(Spawn2, :greet, [])
send(pid, {self(), "First"})

receive do
  {:ok, msg} ->
    IO.puts(msg)
end

send(pid, {self(), "Second"})

receive do
  {:ok, msg} ->
    IO.puts(msg)
  after 500 ->
    IO.puts("The greeter has gone away")
end
