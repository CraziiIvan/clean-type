import { GeistMono } from "geist/font/mono"
import styles from "./Header.module.css"
import { User } from "lucide-react"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.logo}`}>
        Clean-Type
      </div>
      <a className={styles.userBtn}>
        <User size={16}/>
      </a>
    </header>
  )
}

