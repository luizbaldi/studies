content = "Now is the time"

lp =
  with {:ok, file} = File.open('./password'),
        content = IO.read(file, :all),
        :ok = File.close(file),
        [_, uid, gid] <- Regex.run(~r/^lp:.*?:(\d+):(\d+)/m, content)
    do
      "Group: #{gid}, User: #{uid}"
    end

# => Group: 26, User: 26
IO.puts lp

# => Now is the time
IO.puts content
