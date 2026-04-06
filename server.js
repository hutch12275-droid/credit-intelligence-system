import express from "express";
import cors from "cors";
import { supabase } from "./supabaseClient.js";

const app = express();
app.use(cors());
app.use(express.json());

// Test DB connection
app.get("/test-db", async (req, res) => {
  const { data, error } = await supabase
    .from("accounts")
    .select("*");

  if (error) return res.json({ error });

  res.json(data);
});

// AI analysis endpoint
app.post("/analyze", async (req, res) => {
  const result = {
    score: 82,
    strategy: "validation_request",
    confidence: 0.76,
    action: "send immediately"
  };

  res.json(result);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
