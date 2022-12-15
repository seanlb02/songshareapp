import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Account from '../Components/Account.js'
import FriendsList from '../Components/FriendsList.js'
import Sidenav from '../Components/Sidenav.js'

export default function profile() {
  return (
    <>
      <div className={styles.pageContainer}>
      <Sidenav/>
      <Account/>
      <FriendsList/>
      </div>
    </>
  )
}

const styles = {
    pageContainer: "h-[100vh] flex w-[100vw] ",
    nav: "fixed bg-red-500s"
}