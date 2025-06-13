"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditMoviePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    duration: "",
    year: "",
  });

  useEffect(() => {
    if (!id) return;
    fetch(`/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch(() => {
        alert("Failed to load movie data.");
        router.push("/movies");
      });
  }, [id]);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    if (res.ok) {
      alert("Movie updated successfully!");
      router.push("/movies");
    } else {
      alert("Failed to update the movie.");
    }
  };

  if (!movie.title) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Movie: {movie.title}</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded shadow"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-black font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={movie.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-amber-700"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="genre" className="block text-black font-medium mb-2">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-amber-700"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-black font-medium mb-2"
          >
            Duration (min)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={movie.duration}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-amber-700"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="year" className="block text-black font-medium mb-2">
            Year
          </label>
          <input
            type="number"
            id="year"
            name="year"
            value={movie.year}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-amber-700"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition-colors"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
