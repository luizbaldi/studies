# Creates an anonymous function with "multiple bodies" using pattern matching
handle_open = fn
  {:ok, file} -> IO.puts "Read data: #{IO.read(file, :line)}"
  {_, error} -> IO.puts "Error: #{:file.format_error(error)}"
end

# Prints the file content
handle_open.(File.open("./hello.txt"))

# Prints an error using the Erlang File module (dope right?!x)
handle_open.(File.open("nonexistent"))
