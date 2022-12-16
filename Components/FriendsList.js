import React from "react";
import Link from 'next/link'
import Image from "next/image";
import FriendListItem from "./FriendListItem";
import { useState, useEffect } from "react";


export default function FriendsList() {


// resolve following list as array of user IDs 
  // const userToken = localStorage.getItem("tokenKey")
  const [done, setDone] = useState(false)
 
const [followers, setFollowers] = useState()
let followerArray = []
let nameArray = []
const [username, setUsername] = useState()
const [isLoaded, setIsLoaded] = useState(false)

 const getFollowerIds = function () {

      var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
      fetch('http://127.0.0.1:8000/connections/following/', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          },
      })
      .then(res => res.json())
      .then((data => data.map(object => followerArray.push(object.followee_id))))
      .then(() => setFollowers(followerArray))
      .then(() => setIsLoaded(true))
      
 
      .catch((error) => {
        console.error('Error:', error)})

}

      // .then(() => {followerArray.map(follower => fetch(`http://127.0.0.1:8000/users/${follower}/`, {
      //   method: 'GET',
      //   headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${token}`,
      //       },
      //   })
      //   .then(res => res.json())
      //   .then((data => nameArray.push(data.name))))})
      //   .then(() => setUsername(nameArray))
      //   .then(() => setIsLoaded(true))
      //   .then(console.log(nameArray))
      //   .then(console.log(followers))


      // .catch((error) => {
      //   console.error('Error:', error)})
      
      // }
      
     

     const getFollowerNames = function () {
      var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))

       followerArray.map(follower => fetch(`http://127.0.0.1:8000/users/${follower}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            },
        })
        .then(res => res.json())
        .then((data => nameArray.push(data.name)))
        .then(() => setUsername(nameArray))
        
        

        // .then((data =>  data.map(item => setUsername(item.name))))
      )
      }
// this runs first API fetch onMount which sets 'followers' state 
  useEffect(() => {
   
     getFollowerIds();
  
  }, [])

// onMount the funct wont fire due to if statement, second 
// execution will fire due to the 'followers' dependancey change?
  useEffect(() => {
      
      if(followers != undefined ){
      
        getFollowerNames();
      }
    }, [followers])


  return (
    <div className={styles.sideContainer}>
        <div className={styles.search}>
            <input type="text"  className={styles.searchInput} name="Friendsearch" placeholder="Search..."/>
            <button type="submit" className={styles.searchButton}><Image src="/searchIcon.png" width={25} height={25}></Image></button>
        </div>
       
        {isLoaded == true ? username && username.map(user => (<FriendListItem key={user} UserName={user}/>)) : <div>loading</div>}
        {followers !=undefined ? followers.map(user => (<FriendListItem key={user} UserName={user}/>)) : <div>loading</div>}
    </div>
  )
}

const styles = {
    sideContainer: "overflow-y-scroll h-[100vh] mb-96 mr-2 w-[25vw] bg-white border-slate-200 border-l-2 static right-0 top-25",
    search: "flex w-contain py-6 justify-center  items-center align-center border-b",
    searchButton: "min-w-28 min-h-28 pr-2",
    searchInput: "w-full mx-2 rounded-lg p-2 bg-[#f4f4ef] h-10 ",


}
