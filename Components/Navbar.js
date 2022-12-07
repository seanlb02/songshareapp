import React from "react";
import Link from 'next/link'
import Image from "next/image";



export default function Navbar(){
    return(
             
        <div className={styles.NavContainer}>
            
            <div className={styles.logo}><Link href="/">[logo]</Link></div>
            <div className={styles.links}>
                <div className={styles.button}><Link href="/about">About</Link></div>
                <div className={styles.button}><Link href="/Messages">FAQ</Link></div>
                <div className={styles.button}>
                    <div className={styles.GDbutton}>Sign up</div>
                </div>
            </div>

        

        </div>
    )


}

const styles = {
    NavContainer: 'flex p-8 bg-white justify-center content-center xs:h-12 lg:h-24',
    logo:  'flex flex-1 xs:text-s content-center lg:-mr-12 h-auto w-[100px]',
    links: 'flex flex-1 justify-end gap-5 items-center content-right xs:text-s invisible md:visible',
    
    GDbutton:'bg-black rounded-md py-1 px-2 text-white',
}