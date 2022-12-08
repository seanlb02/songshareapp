import React from "react";
import Link from 'next/link'
import Image from "next/image";



export default function ProfileHeader() {
  return (
    <div className={styles.profileContainer}>
    <section className={styles.headerContainer}>
      <div className={styles.infoContainer}>
        <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={100} width={100}/>
        <div className={styles.userName}>User0001</div>
      </div>
      <div className={styles.bioContainer}>
        <div className={styles.Location}>City, Country</div>
        <div className={styles.Location}>Short user tagline goes here or link</div>
      </div>
    </section>
    <section classname={styles.treePreview}>bye
    </section>
    </div>
  )
}

const styles = {
  profileContainer: "h-screen w-[70vw] flex flex-col ",
    headerContainer: "h-[20vw]  w-100%  border-b border-slate-200",
    treePreview: "h-[100vh] w-3/5 bg-black",
    profilePic: "rounded-full ml-24",
    infoContainer: "h-contain flex gap-5 items-center content-center mt-12",
    userName: "text-3xl",

    bioContainer: "flex flex-col h-contain py-6 pl-28 flex gap-2 ",
    Location: "text-l"


}
