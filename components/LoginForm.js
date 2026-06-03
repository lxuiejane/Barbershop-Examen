"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../app/signin/signin.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    // Save logged in user
    localStorage.setItem("user", JSON.stringify(user));

    router.push("/");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>WELCOME BACK!</h1>
        <p>Ready for your next cut?</p>
      </div>

      <div>
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
          SIGN IN
        </button>

        <p className={styles.linkText}>
          Don't have an account? <Link href="/signup">Sign up here.</Link>
        </p>
      </div>
    </form>
  );
}
//
