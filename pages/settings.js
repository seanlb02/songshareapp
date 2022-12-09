import React from 'react'
import Head from 'next/head'
import Image from 'next/image'


import FriendsList from '../Components/FriendsList.js'
import Sidenav from '../Components/Sidenav.js'
import Settings from '../Components/Settings.js'

export default function settings() {
  return (
    <div className={styles.pageContainer}>
       <Sidenav/>
       <Settings/>
        <FriendsList/>
    </div>
  )
}

const styles = {
    pageContainer: "h-[100vh] flex w-[100vw] ",
  
}