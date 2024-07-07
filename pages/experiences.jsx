import { useEffect, useState } from "react";
// import styles from "../styles/ExperiencePage.module.css";
import HighlightedJSON from "../components/HighlightedJSON";
import { getExperiences } from "./api/experiences";

const ExperiencePage = ({ experiences }) => {
  return <HighlightedJSON data={experiences} />;
};

export async function getStaticProps() {
  const experiences = getExperiences();

  return {
    props: { title: "Experiences", experiences },
  };
}

export default ExperiencePage;
