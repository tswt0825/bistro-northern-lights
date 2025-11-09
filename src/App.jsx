import styles from "./App.module.css";
import List from "./components/List.jsx";
import { meny } from "./data/meny.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Bistro Northern Lights";
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>Bistro Northern Lights</h1>
        <p className={styles.subtitle}>Meny</p>
      </header>

      <main className={styles.main}>
        <List meny={meny} />{" "}
        {/*  Sender HELE meny-arrayet, ikke ett element om gangen */}
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2025 Bistro Northern Lights</p>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/" aria-label="Instagram">
            📸
          </a>
          <a href="https://www.facebook.com/" aria-label="Facebook">
            👍
          </a>
          <a href="https://www.tiktok.com/" aria-label="TikTok">
            🎵
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
