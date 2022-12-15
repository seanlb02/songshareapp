import React from "react";
import Link from 'next/link'
import Image from "next/image";
import FriendListItem from "./FriendListItem";
import { useState, useEffect } from "react";


export default function FriendsList() {


// resolve following list as array of user IDs 
  // const userToken = localStorage.getItem("tokenKey")
  const [UserID, setUserID] = useState("")
 
const [followers, setFollowers] = useState()
let followerArray = []

async function getFollowers() {

      var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
      console.log(token)
      await fetch('http://127.0.0.1:8000/connections/following/', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          },
        
      })
      .then(res => res.json())
      .then((data => data.map(object => followerArray.push(object.followee_id))))
      .then(() => setFollowers(followerArray))
      .catch((error) => {
        console.error('Error:', error);})
     }

  useEffect(() => {
  
    
    getFollowers()
    
      
    }, [])



  return (
    <div className={styles.sideContainer}>
        <div className={styles.search}>
            <input type="text"  className={styles.searchInput} name="Friendsearch" placeholder="Search..."/>
            <button type="submit" className={styles.searchButton}><Image src="/searchIcon.png" width={25} height={25}></Image></button>
        </div>
        <div>{followerArray}</div>
        <div>i</div>
        {followers && followers.map(follower => (<FriendListItem UserName={follower}/>))}
      
        
         
    
    </div>
  )
}

const styles = {
    sideContainer: "overflow-y-scroll h-[100vh] mb-96 mr-2 w-[25vw] bg-white border-slate-200 border-l-2 static right-0 top-25",
    search: "flex w-contain py-6 justify-center  items-center align-center border-b",
    searchButton: "min-w-28 min-h-28 pr-2",
    searchInput: "w-full mx-2 rounded-lg p-2 bg-[#f4f4ef] h-10 ",


}
