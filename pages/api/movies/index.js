import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "src/lib/movies.json");
  const jsonData = fs.readFileSync(filePath);
  const movies = JSON.parse(jsonData);

  if (req.method === "GET") {
    return res.status(200).json(movies);
  }

  if (req.method === "POST") {
    const newMovie = req.body;
    newMovie.id = Date.now();
    const updatedMovies = [...movies, newMovie];

    fs.writeFileSync(filePath, JSON.stringify(updatedMovies));
    return res.status(201).json(newMovie);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
