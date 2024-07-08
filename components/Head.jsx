import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Shreedhar Joshi is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="shreedhar joshi, shreedhar, joshi, web developer portfolio, shreedhar web developer, shreedhar developer, mern stack, shreedhar joshi portfolio"
      />
      <meta property="og:title" content="Shreedhar Joshi's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta
        property="og:image"
        content="https://imgur.com/your-image-url.png"
      />
      <meta property="og:url" content="https://your-portfolio-url.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Shreedhar Joshi",
};
