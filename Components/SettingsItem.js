import React from "react";
import Link from 'next/link'
import Image from "next/image";


export default function SettingsItem({text, link}) {
  return (
    <>
    <div className={styles.settingsItem}>
        {text}
    </div>
    </>
  )
}

const styles = {
    settingsItem: "text-xl"

}
