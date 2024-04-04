import styles from "./Header.module.css"
import { User } from "lucide-react"
import OptionsTab from "../optionsTab/OptionsTab"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.logo}`}>
        Ct
      </div>
      <div className={styles.tabContainer}>
        <OptionsTab/>
      </div>
      <a className={styles.userBtn}>
        <User size={16}/>
      </a>
    </header>
  )
}

