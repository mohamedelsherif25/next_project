import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "src/lib/movies.json");
  const jsonData = fs.readFileSync(filePath);
  let movies = JSON.parse(jsonData);

  const { id } = req.query;
  const movieIndex = movies.findIndex((m) => m.id === Number(id));

  if (movieIndex === -1) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }

  if (req.method === "GET") {
    res.status(200).json(movies[movieIndex]);
    return;
  }

  if (req.method === "PUT") {
    try {
      const updatedMovie = req.body;
      movies[movieIndex] = { ...movies[movieIndex], ...updatedMovie };
      fs.writeFileSync(filePath, JSON.stringify(movies));
      res.status(200).json(movies[movieIndex]);
    } catch (error) {
      res.status(500).json({ message: "Error updating movie" });
    }
    return;
  }

  if (req.method === "DELETE") {
    movies.splice(movieIndex, 1);
    fs.writeFileSync(filePath, JSON.stringify(movies));
    res.status(204).end();
    return;
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}
