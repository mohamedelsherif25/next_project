"use client";

import { useServerInsertedHTML } from "next/server";
import { cache } from "react";

const addUser = cache(async (username, email) => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email }),
  });
  const data = await response.json();
  return data;
});

const AddUserFormWithServerAction = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addUser(username, email);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserFormWithServerAction;
