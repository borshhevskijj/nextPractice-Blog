import Link from "next/link";
import Button from "@mui/material/Button";
import cl from "./navbar.module.scss";

export default function NavBar() {
  return (
    <nav className={cl.navbar}>
      <ul>
        <li>
          <Link href="/">
            <Button variant="text">Home</Button>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <Button variant="text">posts</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
