import React, {useState, useEffect} from'react';
import ReactDOM from'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import messages from '../public/messages.svg'
import { useRouter } from 'next/router';

export default function UserSearch() {
  return (
    
    <div className ={styles.pageContainer}>
        <div className={styles.search}>
            <input type="text"  className={styles.searchInput} name="Friendsearch" placeholder="Search users..."/>
            <button type="submit" className={styles.searchButton}><Image src="/searchIcon.png" width={25} height={25}></Image></button>
        </div>
    </div> 
    )
}

const styles = {
    pageContainer: "h-screen w-[70vw] flex flex-col rounded",
    search: "flex justify-center w-full h-20px border p-5 rounded  gap-3",
    searchInput: "rounded p-2 bg-slate-200"
}