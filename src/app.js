import express from "express";

const app = express();

app.get("/api/v1/users/ping", (req, res) => {
  res.json({ message: "Ping is working ✅" });
});

export { app };
