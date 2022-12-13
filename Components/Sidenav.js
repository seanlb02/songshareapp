import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Sidenavitem from "./Sidenavitem"


export default function Sidenav() {



  return (
    <div className={styles.sideContainer}>
        <section className={styles.navLinkContainer}>
            <Sidenavitem title="Profile" src="/avatar.png" width={27} height={20} link="/profile" />
            <Sidenavitem title="Search" src="/personsearch.png" width={27} height={20} link="/search"/>
            <Sidenavitem title="Settings" src="/settingicon.png" width={27} height={20} link="/settings"/>
            <Sidenavitem title="Help" src="/helpicon.png" width={25} height={18} link=""/>
            <div className={styles.spacer}></div>
            {/* log out button */}
            <div>
                <Link href="/" className={styles.itemClickable} onClick={() => localStorage.removeItem("tokenKey")}>
                    <div >Log out</div>
                    <Image className={styles.navIcon} src="/logouticon.png" width={27} height={20}></Image>
                </Link>
            </div>
            
            
            {/* <Sidenavitem title="Log out" src="/logouticon.png" width={27} height={20} link="" onClick={() => {console.log("cleaned")}}/> */}




            {/* <div className={styles.profileClickable}>
                <div className={styles.profileButton}>Profile</div>
                <Image className={styles.profileIcon} src="/avatar.png" width={27} height={20}></Image>
            </div>
            <div className={styles.profileClickable}>
                <div className={styles.profileButton}>Search</div>
                <Image className={styles.profileIcon} src="/avatar.png" width={27} height={20}></Image>
            </div>
            <div className={styles.profileClickable}>
                <div className={styles.profileButton}>Settings</div>
                <Image className={styles.profileIcon} src="/avatar.png" width={27} height={20}></Image>
            </div>
            <div className={styles.profileClickable}>
                <div className={styles.profileButton}>Profile</div>
                <Image className={styles.profileIcon} src="/avatar.png" width={27} height={20}></Image>
            </div>
            <div className={styles.profileClickable}>
                <div className={styles.profileButton}>Help</div>
                <Image className={styles.profileIcon} src="/avatar.png" width={27} height={20}></Image> */}
            {/* </div> */}
        </section>
    </div>
  )
}

const styles = {
    sideContainer: "h-[100vh] pr-5 w-contain bg-[#f4f4ef] static left-0 top-25",
    navLinkContainer: "mt-10 ",
    spacer: "w-full h-[50vh]",
    itemClickable: "flex w-full ml-2 justify-start gap-4 text-l py-3 items-center",
    navIcon: "flex ml-auto mr-5 flex-end h-25 w-25"

}
