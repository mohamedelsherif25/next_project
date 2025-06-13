"use client";

export default function Error({ statusCode }) {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        {statusCode ? `Error ${statusCode}` : "An error occurred"}
      </h1>
      <p>Please try again later.</p>
    </div>
  );
}
