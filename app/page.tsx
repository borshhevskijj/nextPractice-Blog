import { GetServerSideProps } from "next";
import styles from "./page.module.css";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>тут пока ничего нет</h1>
      {/* <Button variant="text">app Text</Button>
      <Button variant="outlined"> app Outlined</Button> */}
    </main>
  );
}
