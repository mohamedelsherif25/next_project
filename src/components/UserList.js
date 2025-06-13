"use client";
import React, { useState, useEffect } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Users List</h2>

      {loading && <p className="text-center text-gray-500">Loading users...</p>}

      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && users.length === 0 && (
        <p className="text-center text-gray-500">No users found.</p>
      )}

      {!loading && !error && users.length > 0 && (
        <ul className="space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition"
            >
              <span className="font-semibold text-gray-800">
                {user.username}
              </span>{" "}
              <span className="text-gray-500">({user.email})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
