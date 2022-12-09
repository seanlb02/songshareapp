import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import SettingsItem from './SettingsItem';


export default function Settings() {
  return (
    <div className={styles.pageContainer}>
        
        <div className={styles.pageTitle}>Settings</div>
        <section className={styles.contentContainer}>
            <SettingsItem text="Edit profile"/>
            <SettingsItem text=""/>
            <SettingsItem/>
            <SettingsItem/>
            <SettingsItem/>

        </section>
        
    
    
    </div>
    
  )
}

const styles = {
    pageContainer: "h-screen w-[70vw] flex flex-col ",
    pageTitle: "text-xl mt-24 ml-36 mb-12",
    contentContainer: "w-full bg-red-500 items-center justify-center align-center"
}
