import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { useState, useEffect } from "react";
import  useRouter  from 'next/router';

export default function SearchListItem({name, link}) {

const router = useRouter;


  return (
    <Link  href={link}><div className={styles.container}>
        <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={25} width={25}/>
        <div className={styles.userName}>{name}</div>
    </div>
    </Link>
  )
}

const styles = {
    container: "flex h-20 w-full border-b px-4 items-center gap-4 cursor-pointer",
    profilePic: "rounded-full h-12 w-12"
}