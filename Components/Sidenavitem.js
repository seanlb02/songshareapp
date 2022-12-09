import React from "react";
import Link from 'next/link'
import Image from "next/image";



export default function Sidenavitem({title, src, link}) {
  return (
    <>
            <Link href={link}>
              <div className={styles.itemClickable}>
                  <div className={styles.navButton}>{title}</div>
                  <Image className={styles.navIcon} src={src} width={27} height={20}></Image>
              </div>
            </Link>
    </>
  )
}

const styles = {
    navLinkContainer: "mt-10 ",
    itemClickable: "flex w-full ml-2 justify-start gap-4 text-l py-3 items-center",
    navIcon: "flex ml-auto mr-5 flex-end h-25 w-25"


}

