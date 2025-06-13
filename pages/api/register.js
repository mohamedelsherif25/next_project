import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(8),
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const data = userSchema.parse(req.body);
    res.status(200).json({ message: "Validation successful", data });
  } catch (error) {
    res.status(400).json({ error: "Invalid input", details: error });
  }
}

// http://localhost:3000/api/register >> Endpoint >> Task 2
