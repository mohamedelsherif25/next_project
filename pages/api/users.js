// Task 3

// export default function handler(req, res) {
//   switch (req.method) {
//     case "GET":
//       res.status(200).json({ message: "GET request received" });
//       break;
//     case "POST":
//       res.status(201).json({ message: "POST request received" });
//       break;
//     case "PUT":
//       res.status(200).json({ message: "PUT request received" });
//       break;
//     case "DELETE":
//       res.status(200).json({ message: "DELETE request received" });
//       break;
//     default:
//       res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

/*

GET: http://localhost:3000/api/users
POST: http://localhost:3000/api/users
PUT: http://localhost:3000/api/users
DELETE: http://localhost:3000/api/users

*/

// ==================================================================================================== //

// Task 4

import { z } from "zod";
import axios from "axios";

const userSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  id: z.number().optional(),
});

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const response = await axios.get("http://localhost:3001/users");
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
      }
      break;

    case "POST":
      try {
        const data = userSchema.parse(req.body);
        const apiRes = await axios.post("http://localhost:3001/users", data);
        res.status(201).json(apiRes.data);
      } catch (error) {
        if (error.name === "ZodError") {
          return res.status(400).json({
            error: "Validation failed",
            details: error.errors.map((e) => ({
              field: e.path.join("."),
              message: e.message,
            })),
          });
        }
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    case "PUT":
      try {
        const data = userSchema.parse(req.body);
        const apiRes = await axios.put(
          `http://localhost:3001/users/${req.query.id}`,
          data
        );
        res.status(200).json(apiRes.data);
      } catch (error) {
        if (error.name === "ZodError") {
          return res.status(400).json({
            error: "Validation failed",
            details: error.errors.map((e) => ({
              field: e.path.join("."),
              message: e.message,
            })),
          });
        }
        res.status(500).json({ error: "Failed to update user" });
      }
      break;

    case "DELETE":
      try {
        const apiRes = await axios.delete(
          `http://localhost:3001/users/${req.query.id}`
        );
        res.status(200).json(apiRes.data);
      } catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// npx json-server --watch db.json --port 3001 >> Run Server
