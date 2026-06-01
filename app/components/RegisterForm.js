"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.find((u) => u.email === email);

    if (exists) {
      setError("Email bestaat al");
      return;
    }

    users.push({ email, password });

    localStorage.setItem("users", JSON.stringify(users));

    router.push("/signin");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-4 border rounded"
    >
      <h1>CREATE ACCOUNT!</h1>
      <p>Searching for a new cut?</p>
      <div>
        <input
          type="email"
          placeholder="e-mail address*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Sign Up</button>

      <p>
        Already have an account? <Link href="app/signin">Sign in here.</Link>
      </p>
    </form>
  );
}
