import React from "react";
import Link from 'next/link'
import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { data } from "autoprefixer";

export default function UserProfile({name}) {

  const followerfetcharray = []
  const followerArray = []
  const [followers, setFollowers] = useState();
  const [loggedinUser, setloggedinUser] = useState();
  
// get logged in users name so we can return to their profile
  async function getLoggedinUsername() {

    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
  
    const res = await fetch('http://127.0.0.1:8000/users/profile/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
    })
    .then(res => res.json())
    .then((data =>  data.map(item => setloggedinUser(item))))
    

  
  }
  
  function getFriends() {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = fetch(`http://127.0.0.1:8000/connections/following/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
    })
    .then(res => res.json())
    .then((data => data.map(item => followerfetcharray.push(item))))
    .then(() => followerfetcharray.map(user => followerArray.push(user.followee_id)))
    // .then(((data) =>  {followerArray.push(data.followee_id)}))
    .then(() => {setFollowers(followerArray)})
    .then(console.log(followerArray))
    .then(console.log(userdata.id))
    .then(() => {
      if(followerArray.includes(userdata.id)){
        setFollowingText(styles.followingText)
        setFollowButton(styles.followButtonDisappear)
      }
  })}


  

const [followButton, setFollowButton] = useState(styles.followButton);
const [followingText, setFollowingText] = useState(styles.HiddenFollowingText)

const [userdata, setUserdata] = useState ([])
const userFeederArray = []



  const router = useRouter()

async function getAccount() {

  var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`http://127.0.0.1:8000/users/${router.query.user}/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
      
    })
    .then(res => res.json())
    .then((data =>  userFeederArray.push(data)))
    .then((data =>  userFeederArray.map(item => setUserdata(item))))

    // .then(console.log(userFeederArray))
    

    // .then(console.log(router.query.user))

}


// async function getFollowers() {

//   var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
//   const res = await fetch(`http://127.0.0.1:8000/connections/following/`, {
//   method: 'GET',
//   headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//       },
    
//   })
//   .then(res => res.json())
//   .then((data =>  data.map(connection => )))

// }
  
useEffect(() => {


  if(!router.isReady) return;

getAccount();



}, [router.query.user])

useEffect(() => {


  
  if(loggedinUser == undefined)
  {getLoggedinUsername()}

  if(loggedinUser != undefined){
  
      if(userdata.username == loggedinUser.username)
      { router.push('/profile')}}
  
  
}, [loggedinUser])

useEffect(() => {

getFriends();

}, [userdata])


  // triggers when follow is clicked
const followUser = async function() {
  const body = {followee_id : `${userdata.id}`}
  var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
  const res = await fetch(`http://127.0.0.1:8000/connections/follow/`, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
  })
  .then(res => res.json())
  // .then((data =>  userFeederArray.push(data)))
  // .then((data =>  userFeederArray.map(item => setUserdata(item))))
  .then(() => setFollowingText(styles.followingText))
  .then(() => setFollowButton(styles.followButtonDisappear))

}

// triggers when unfollow is clicked
const unfollowUser = function () {
  setFollowingText(styles.HiddenFollowingText)
  setFollowButton(styles.followButton)
} 

if(loggedinUser != undefined){
  
  if(userdata.username == loggedinUser.username)
  { router.push('/profile')}}

  return (
    <div className={styles.profileContainer}>
    <section className={styles.headerContainer}>
          <div className={styles.infoContainer}>
            <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={100} width={100}/>
            <div className={styles.userName}>{userdata.username}</div>
            <div className={followButton} onClick={followUser}>follow</div>
            <div className={followingText} onClick={unfollowUser}>unfollow</div>
 
          </div>
          <div className={styles.bioContainer}>
            <div className={styles.Location}>{userdata.city}, {userdata.country}</div>
            <div className={styles.bio}>{userdata.bio}</div>
          </div>
    </section>
    <section className={styles.treePreview}>
      <div className={styles.treeText}>User has not added any branches to their track tree yet.</div>
    </section>
    </div>
  )
}

const styles = {
  profileContainer: "overflow-y-scroll h-screen w-[60vw] flex flex-col ",
    headerContainer: "h-contain  w-100%  border-b-2 border-slate-200",
    treePreview: " flex h-screen w-full justify-center align-center items-center border-t-2 ",
    treeText: "text-slate-500",
    profilePic: "rounded-full",
    infoContainer: "w-4/5 ml-auto h-contain flex gap-5 items-center content-center mt-12",
    userName: "text-3xl",
    followingText: "text-black bg-white border-2 border-black ml-2 p-2 px-5 rounded-md",
    HiddenFollowingText: "hidden",
    followButtonDisappear: "hidden",
    followButton: "bg-black text-white p-2 rounded-md px-5",
    bioContainer: "w-4/5 ml-auto flex flex-col h-contain py-6 flex gap-2 ",
    Location: "text-l text-slate-600",
    bio: "text-l"


}
