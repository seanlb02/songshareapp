import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";

import { useState, useEffect } from "react";


export default function Account() {

const router = useRouter();

const [userdata, setUserdata] = useState ([])
const datafeeder = []
const [username, setUsername] = useState()
const [bio, setBio] = useState()
const [city, setCity] = useState()
const [country, setCountry] = useState()

async function getAccount() {

  var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))

  const res = await fetch('http://127.0.0.1:8000/users/profile/', {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      },
    
  })
  .then(res => res.json())

  .then((data =>  data.map(item => setUserdata(item))))

  .then(console.log(router.query))


}

const upload = function(){
  router.push('/upload')
}


useEffect(() => {


getAccount()

  
}, [])



  return (
    <div className={styles.profileContainer}>
    <section className={styles.headerContainer}>
          <div className={styles.infoContainer}>
            <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={100} width={100}/>
            <div className={styles.userName}>{userdata.username}</div>
            <Link href="/edit"><Image src="/editprofile.png" width={50} height={50}></Image></Link>
            
          </div>
          <div className={styles.bioContainer}>
            <div className={styles.Location}>{userdata.city}, {userdata.country}</div>
            <div className={styles.bio}>{userdata.bio}</div>
          </div>
    </section>
    <section className={styles.treePreview}>
      <div className={styles.addBranch}>
              <div onClick={upload}><Image src="/addIcon.png" width={50} height={50}></Image></div>
              <div>Add branch...</div>
      </div>
      <div className={styles.treeText}>User has not added any branches to their track tree yet.</div>
    </section>
    </div>
  )
}

const styles = {
  profileContainer: "overflow-y-scroll h-screen w-[60vw] flex flex-col ",
    headerContainer: "h-contain  w-100%  border-b-2 border-slate-200",
    treePreview: " flex flex-col h-screen w-full  items-center border-t-2 ",
    treeText: "text-slate-500 mt-12",
    profilePic: "rounded-full",
    infoContainer: "w-4/5 ml-auto h-contain flex gap-5 items-center content-center mt-12",
    userName: "text-3xl",
    addBranch: "flex items-center gap-1 cursor-pointer my-5 mb-5",
    bioContainer: "w-4/5 ml-auto flex flex-col h-contain py-6 flex gap-2 ",
    Location: "text-l text-slate-600",
    bio: "text-l"
}
