import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homebody from '../Components/Homebody.js'
import Navbar from '../Components/Navbar'

export default function profile() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.header}>
          
      </section>
    </div>
  )
}

const styles = {
    pageContainer: "h-[100vh]",
    header: "h-30vw bg-red-600"
}