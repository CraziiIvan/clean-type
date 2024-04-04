"use client"

import { useEffect, useState } from "react"
import styles from "./OptionsTab.module.css"
import Option from "./Option"
import useOptionStore from "@/libs/useContext"

export default function OptionsTab() {

    const {active} = useOptionStore()

    useEffect(() => {
        console.log(active)
    }, [active])

    return (
        <div className={`${styles.optionsTab} ${active === "quote" && styles.active}`}>
            <Option title="Quote"/>
            <Option title="Timer" />
        </div>
    )
}