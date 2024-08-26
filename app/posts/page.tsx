import { Post, PostApi } from "@/services/postApi";
import cl from "./posts.module.css";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

const api = new PostApi();

export default async function Posts() {
  let posts: Post[] = [];
  try {
    posts = await api.getPosts();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <main className={cl.container}>
      <h1>Posts:</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <ListItemButton>
                <ListItemText primary={id} />
                <ListItemText primary={title} />
              </ListItemButton>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
