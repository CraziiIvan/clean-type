"use client"

import { useEffect, useState } from "react"
import styles from "./OptionsTab.module.css"
import Option from "./Option"

export default function OptionsTab() {

    const [ active, setActive ] = useState<string>("quote")

    useEffect(() => {
        console.log(active)
    }, [active])

    return (
        <div className={`${styles.optionsTab} ${active === "quote" && styles.active}`}>
            <Option title="Quote" active={active} setActive={setActive} />
            <Option title="Timer" active={active} setActive={setActive} />
        </div>
    )
}