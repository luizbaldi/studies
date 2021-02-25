import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

function Home() {
  const queryClient = useQueryClient();

  const [text, setText] = useState("");

  const { data, isLoading, isFetching } = useQuery("items", async () => {
    const { data } = await axios.get("/api/items");
    return data;
  });

  const mutation = useMutation(
    (newText) => axios.post("/api/items", { text }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("items");
        setText("");
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <span>Updated at: {new Date(data.timestamp).toLocaleTimeString()}</span>
      <ul>
        {data.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span>{isFetching && "Updating in background..."}</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate(text);
        }}
      >
        <label>Add a new item: </label>
        <input
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <button>Add</button>
        {mutation.isLoading && "Adding item..."}
      </form>
    </>
  );
}

export default Home;
