import React, {useState, useEffect} from'react';
import ReactDOM from'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import messages from '../public/messages.svg'
import { useRouter } from 'next/router';
import SearchListItem from './SearchListItem'

export default function UserSearch() {

const [user, setUser] = useState("");
const [search, setSearch]  = useState("");

const searchUser = function(e) {
    e.preventDefault();
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))

    const res = 
        fetch(`http://127.0.0.1:8000/users/search/${search}/`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        }
    })
        .then((res) => res.json())
        .then((data) => {
        setUser(data.username);
        // setUser(data.username)

        })
        .catch((error) => {
        console.error('Error:', error);
        });

}

  return (
    
    <div className ={styles.pageContainer}>
        <div className={styles.search}>
            <form onSubmit={searchUser} className={styles.inputview}>
                <input type="text" value={search} onChange={(evt) => setSearch(evt.target.value)} className={styles.searchInput} name="Friendsearch" placeholder="Search users..."/>
                <button type="submit" onClick={searchUser} className={styles.searchButton}><Image src="/searchIcon.png" width={25} height={25}></Image></button>
            </form>
        </div>
        {/* {user ? <SearchListItem name={user} link={`/user/${user}`}/> : <div></div>} */}
        {user == undefined && <div>No results found, check your spelling.</div>}
        {user &&
           <SearchListItem name={user} link={`/user/${user}`}/>
        }
        {user == "" && <div></div>}
    
    </div> 
    )
}

const styles = {
    pageContainer: "h-screen w-[60vw] flex flex-col rounded",
    search: "flex justify-center items-center align-center w-full h-20px border p-5 rounded",
    searchInput: "rounded p-2 bg-[#f4f4ef]",
    searchButton: "h-contain px-2",
    inputview: "flex flex-row bg-[#f4f4ef] rounded-lg mx-6"

}