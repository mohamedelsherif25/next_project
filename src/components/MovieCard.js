import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{movie.title}</h2>
        <p className="text-gray-600">
          - Genre: <span className="font-medium">{movie.genre}</span>
        </p>
        <p className="text-gray-600">
          - Duration: <span className="font-medium">{movie.duration} min</span>
        </p>
        <p className="text-gray-600">
          - Year: <span className="font-medium">{movie.year}</span>
        </p>

        <div className="mt-4 flex justify-between">
          <Link
            href={`/movies/${movie.id}`}
            className="text-green-500 hover:underline"
          >
            Edit
          </Link>

          <button
            onClick={() => {
              if (confirm("Are you sure you want to delete this movie?")) {
                fetch(`/api/movies/${movie.id}`, { method: "DELETE" }).then(
                  () => {
                    window.location.reload();
                  }
                );
              }
            }}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
