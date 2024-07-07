import { useEffect, useState } from "react";
// import styles from "../styles/ExperiencePage.module.css";
import HighlightedJSON from "../components/HighlightedJSON";

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experiences`);

      const data = await res.json();
      setExperiences(data);
    };

    fetchExperiences();
  }, []);

  return <HighlightedJSON data={experiences} />;
};

export async function getStaticProps() {
  return {
    props: { title: "Experiences" },
  };
}

export default ExperiencePage;
