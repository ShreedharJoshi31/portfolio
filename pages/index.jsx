import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Shreedhar Joshi</h1>
            <h6 className={styles.bio}>Software Developer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <button
              className={styles.outlined}
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://drive.google.com/file/d/1DVLafITKagIcP4pzJF9ZuddLN6rDBZ0h/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Resume
            </button>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
