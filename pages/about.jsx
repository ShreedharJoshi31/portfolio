import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <h1 className={styles.key}>A Wizard in Code and Craft:</h1>
      <h3>
        In the world of software development, I blend the strategy of a seasoned
        gamer with the finesse of a wizard casting spells. My passion for
        Multiplayer Online games is more than just a pastime, it's a realm where
        I sharpen my strategic thinking, leadership, and teamwork skills. Just
        as Harry Potter mastered spells at Hogwarts, I master coding languages
        and software solutions, conjuring up innovative and efficient systems.
        Whether I'm navigating a virtual battlefield or solving complex coding
        challenges, my gamer's spirit and developer's expertise come together to
        create magic in the digital world. Join me on this journey as I continue
        to weave spells of innovation and creativity in software development.
      </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
