# Module to manipulate a file by appending new elements
defmodule TaskList do
  @file_name "task_list.md"

  def add(task_name) do
    task = "[ ] #{task_name}\n"
    File.write(@file_name, task, [:append])
  end

  def show_list do
    case File.read(@file_name) do
      {:ok, data} -> data
      {:error, err} -> err
    end
  end
end
