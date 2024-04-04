import { Clock, Text } from "lucide-react";
import styles from "./Option.module.css";
import { GeistSans } from "geist/font/sans";
import { Dispatch, SetStateAction, useEffect } from "react";

type TOptionsProps = {
  title: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
};

export default function Option({ title, active, setActive }: TOptionsProps) {
  function setActiveHandler(title: string) {
    setActive(title.toLocaleLowerCase());
  }

  useEffect(() => {
    console.log(title);
  }, [active]);

  return (
    <div className={`${styles.options} ${active === title.toLowerCase() && styles.activeOption}`}>
      <button
        onClick={() => setActiveHandler(title)}
        className={`${GeistSans.className} ${styles.optionsBtn}`}
      >
        {
          title === "Quote" && <Text size={16} className={styles.optionsIcon} />
        }
        {
          title === "Timer" && <Clock size={16} className={styles.optionsIcon} />
        }
        <span>{title}</span>
      </button>
      <ul className={styles.optionsList}>
        <li className={styles.optionItems}>10</li>
        <li className={styles.optionItems}>25</li>
        <li className={styles.optionItems}>50</li>
        <li className={styles.optionItems}>100</li>
      </ul>
    </div>
  );
}
