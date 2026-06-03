"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [pathname]);
  //   Pathname is used so that the navbar updates when the user logs in or out, without needing to refresh the page.

  function handleLogout() {
    localStorage.removeItem("user");

    setUser(null);

    router.push("/signin");
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/logo2.png" alt="Urban Edge" />
        </div>

        <ul className="navLinks">
          <li>
            <Link href="/">Services</Link>
          </li>

          <li>
            <Link href="/profile">Profile</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="authLinks">
          {user ? (
            <>
              <li>Hello, {user.name}</li>

              <p>|</p>

              <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                Sign Out
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/signin">Sign In</Link>
              </li>

              <p>|</p>

              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
