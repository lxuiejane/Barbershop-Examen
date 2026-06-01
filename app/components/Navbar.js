import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo2.png" alt="Urban Edge" />
      </div>

      <ul className="navLinks">
        <li><Link href="/">Services</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      <button className="signOut">Sign Out</button>
    </nav>
  );
}