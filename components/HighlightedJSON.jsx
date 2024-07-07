import styles from "../styles/HighlightedJSON.module.css";
import { useState } from "react";
import { useEffect } from "react";

const HighlightedJSON = ({ data }) => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const splitDescription = (description, maxWordsPerLine) => {
    const words = description.split(" ");
    const lines = [];
    for (let i = 0; i < words.length; i += maxWordsPerLine) {
      lines.push(words.slice(i, i + maxWordsPerLine).join(" "));
    }

    return lines;
  };

  return (
    <pre className={styles.code}>
      <p className={styles.line}>
        <span className={styles.square}>&#91;</span>
      </p>
      {data.map((item, index) => (
        <div key={index}>
          <p className={styles.line}>
            <span className={styles.curly}>&#123;</span>
          </p>
          <p className={styles.line}>
            <span className={styles.key}>"title"</span>:{" "}
            <span className={styles.value}>"{item.title}"</span>,
          </p>
          <p className={styles.line}>
            <span className={styles.key}>"company"</span>:{" "}
            <span className={styles.value}>"{item.company}"</span>,
          </p>
          <p className={styles.line}>
            <span className={styles.key}>"description"</span>:{" "}
            <span className={styles.square}>&#91;</span>
            {item.description.map((descItem, descIndex) => (
              <div
                key={descIndex}
                className={`${styles.line} ${styles.descContainer}`}
              >
                <span className={`${styles.value} ${styles.indent2}`}>
                  "
                  {isPhone ? (
                    <span className={styles.value}>{descItem}</span>
                  ) : (
                    splitDescription(descItem, 15).map((description, idx) =>
                      idx !== 0 ? (
                        <span key={idx}>
                          {"\n"}
                          <span className={`${styles.value} ${styles.indent3}`}>
                            {description}
                          </span>
                        </span>
                      ) : (
                        <span key={idx}>
                          <span className={styles.value}>{description}</span>
                        </span>
                      )
                    )
                  )}
                  "
                </span>
                {descIndex < item.description.length - 1 && <span>,</span>}
              </div>
            ))}
            <span className={styles.line}>
              <span className={`${styles.square} ${styles.indent1}`}>
                &#93;
              </span>
            </span>
          </p>
          <p className={styles.line}>
            <span className={styles.curly}>&#125;</span>
            {index < data.length - 1 && <span>,</span>}
          </p>
        </div>
      ))}
      <p className={styles.line}>
        <span className={styles.square}>&#93;</span>
      </p>
    </pre>
  );
};

export default HighlightedJSON;
