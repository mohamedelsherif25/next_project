"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddMoviePage() {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    duration: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Movie added successfully!");
      setFormData({ title: "", genre: "", duration: "", year: "" });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Add New Movie</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
          value={formData.genre}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="duration"
          type="number"
          placeholder="Duration (min)"
          onChange={handleChange}
          value={formData.duration}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="year"
          type="number"
          placeholder="Year"
          onChange={handleChange}
          value={formData.year}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          Save
        </button>
      </form>
      <Link href="/movies" className="text-blue-500 underline block mt-4">
        Back to list
      </Link>
    </div>
  );
}
