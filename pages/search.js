import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Profile from '../Components/Profile.js'
import FriendsList from '../Components/FriendsList.js'
import Sidenav from '../Components/Sidenav.js'
import UserSearch from '../Components/UserSearch.js'

export default function profile() {
  return (
    <>
      <div className={styles.pageContainer}>
      <Sidenav/>
      <UserSearch/>
      <FriendsList/>
      </div>
    </>
  )
}

const styles = {
    pageContainer: "h-[100vh] flex w-[100vw] ",

}