defmodule Exercise do
  # Convert a float to a string with two decimal digits
  def float_to_string(num) when is_float(num) do
    :erlang.float_to_binary(num, decimals: 2)
  end

  # Return the extension component of a file name
  def get_file_extension(file_name) do
    [_ | extension] = String.split(file_name, ".")
    List.first extension
  end

  # Return the process’s current working director
  def get_cwd do
    with {:ok, directory} <- File.cwd do
      directory
    end
  end
end
