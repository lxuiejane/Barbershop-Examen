"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../app/signup/signup.module.css";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // users ophalen in de localStorage.
    // '[]' als er nog geen users zijn opgeslagen.
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    router.push("/signin");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>CREATE ACCOUNT!</h1>
        <p>Searching for a new cut?</p>
      </div>
      <div>
        <div>
          <input
            className={styles.inputSign}
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className={styles.inputSign}
            type="email"
            placeholder="e-mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className={styles.inputSign}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.signButton}>
          SIGN UP
        </button>
        <p className={styles.linkText}>
          Already have an account? <Link href="/signin">Sign in here.</Link>
        </p>
      </div>

    </form>
  );
}
// THIS WORKS.
