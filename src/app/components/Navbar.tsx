
import Link from "next/link";
import "../main.css"; 

export default function Navbar() {
  return (
    <nav className="top-nav">
      <div className="nav-text-large">My App</div>
      <ul className="nav-list">
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
}
