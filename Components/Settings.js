import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import SettingsItem from './SettingsItem';


export default function Settings() {
  return (
    <div className={styles.pageContainer}>
        
        <div className={styles.pageTitle}>Settings</div>
        <section className={styles.contentContainer}>
            <Link href="/edit"><SettingsItem text="Edit profile"/></Link>
            <SettingsItem text="Preferences"/>
            <SettingsItem text="Cookies Settings"/>
            <SettingsItem text="Privacy Policy"/>
            <div>___________________________________</div>
            <SettingsItem  text="Delete Account"/>

        </section>
        
    
    
    </div>
    
  )
}

const styles = {
    pageContainer: "h-screen w-[60vw] flex flex-col ",
    pageTitle: "text-2xl mt-24 ml-24 mb-12",
    contentContainer: "flex flex-col w-4/5 ml-auto gap-4 "
}
