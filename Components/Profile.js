import React from "react";
import Link from 'next/link'
import Image from "next/image";



export default function Profile() {
  return (
    <div className={styles.profileContainer}>
    <section className={styles.headerContainer}>
          <div className={styles.infoContainer}>
            <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={100} width={100}/>
            <div className={styles.userName}>User0001</div>
            <Image src="/addIcon.png" width={50} height={50}></Image>
          </div>
          <div className={styles.bioContainer}>
            <div className={styles.Location}>City, Country</div>
            <div className={styles.Location}>Short user tagline goes here or external link</div>
          </div>
    </section>
    <section className={styles.treePreview}>
      <div className={styles.treeText}>User has not added any branches to their track tree yet.</div>
    </section>
    </div>
  )
}

const styles = {
  profileContainer: "overflow-y-scroll h-screen w-[70vw] flex flex-col ",
    headerContainer: "h-contain  w-100%  border-b-2 border-slate-200",
    treePreview: " flex h-screen w-full justify-center align-center items-center border-t-2 ",
    treeText: "text-slate-500",
    profilePic: "rounded-full",
    infoContainer: "w-4/5 ml-auto h-contain flex gap-5 items-center content-center mt-12",
    userName: "text-3xl",

    bioContainer: "w-4/5 ml-auto flex flex-col h-contain py-6 flex gap-2 ",
    Location: "text-l"


}
