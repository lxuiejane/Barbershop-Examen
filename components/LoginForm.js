'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u) => u.email === email && u.password === password);

        if (!user) {
            setError("Invalid email or password");
            return;
        }

        router.push("/");
    } 

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-8 p-4 border rounded"
        >
            <h1>WELCOME BACK!</h1>
            <div>
                <input
                    type="email"
                    placeholder="e-mail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Sign In</button>

            <p>
                Don't have an account? <Link href="/signup">Sign up here.</Link>
            </p>
        </form>
    );
}
// 