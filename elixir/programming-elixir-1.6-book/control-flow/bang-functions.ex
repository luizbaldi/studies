defmodule Bang do
  def ok!(arg) do
    case arg do
      {:ok, data} -> data
      _ -> raise "There was an error."
    end
  end
end
