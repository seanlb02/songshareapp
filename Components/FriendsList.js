import React from "react";
import Link from 'next/link'
import Image from "next/image";
import FriendListItem from "./FriendListItem";


export default function FriendsList() {
  return (
    <div className={styles.sideContainer}>
        <div className={styles.search}>
            <input type="text"  className={styles.searchInput} name="Friendsearch" placeholder="Search..."/>
            <button type="submit" className={styles.searchButton}><Image src="/searchIcon.png" width={25} height={25}></Image></button>
        </div>
        <FriendListItem/>
        <FriendListItem/>
        <FriendListItem/>
        <FriendListItem/>
        <FriendListItem/>
        <FriendListItem/>
        <FriendListItem/>
        <FriendListItem/>
        <FriendListItem/>
        <FriendListItem/>
        <FriendListItem/>
        <FriendListItem/>
    
    </div>
  )
}

const styles = {
    sideContainer: "overflow-y-scroll h-[100vh] mb-96 mr-2 w-[25vw] bg-white border-slate-200 border-l-2 static right-0 top-25",
    search: "flex w-contain py-6 justify-center  items-center align-center border-b",
    searchButton: "min-w-28 min-h-28 pr-2",
    searchInput: "w-full mx-2 rounded-lg p-2 bg-[#f4f4ef] h-10 ",


}
