/* Dumb api file to mock an api */
const items = ["potato", "broccoli"];

const api = async (req, res) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 1000)
  );

  if (req.method === "POST") {
    const { text } = req.body;

    items.push(text);
    res.json({ ok: "ok" });
    return;
  }

  res.json({
    timestamp: Date.now(),
    items,
  });
};

export default api;
