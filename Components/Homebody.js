import React from'react';
import ReactDOM from'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import messages from '../public/messages.svg'


export default function Homebody() {
  return (
    <div className={styles.pageContainer}>
        <div className={styles.HeroContainer}>
            <div className={styles.HeroText}>
                <div className={styles.title}>Trade tracks with the world</div>
                <div className={styles.text}>Curate your own [AppName] profile and get sent music reccomendations from the world&apos;s best tastemakers
                 &mdash; your friends included</div>
                 
            </div>
            <div className={styles.heroImage}>
                <div className={styles.mainImage}></div>
            </div>
            
        </div>

            <div className={styles.aboutOne}>
                <div className={styles.aboutOneTitle}>
                        New music you add to your profile's <em>track tree</em> gets automatically distributed to your followers as <u>branches</u>
                </div>
                <div className={styles.rightImage}>
                <Image src="/upload.svg" width={700} height={100}/>
                </div>
            
            </div>
            <div className={styles.aboutTwo}>
                <div className={styles.aboutTwoTitle}>
                    Branches sent to you by the people you follow are stored like a messages thread. Consider these threads as personalised playlists. 
                </div>
                <div className={styles.rightImage}>
                <Image src="/messages.svg" width={700} height={100}/>
                </div>
            </div>
            <div className={styles.aboutThree}>
                <div className={styles.aboutOneTitle}>
                    Keep your branches tidy by <em>removing</em> tracks you dont vibe with. 
                    <br></br>
                    <br></br>Don&apos;t worry &mdash; we won&apos;t tell them
                </div>
                <div className={styles.rightImage}>
                <Image src="/delete.svg" width={700} height={100}/>
                </div>
            </div>    
            <header className={styles.loginHeader}>Get discovering</header>
            <form  className={styles.form} action="/send-data-here" method="post">
                    
                    <input type="text" value='' className={styles.input} name="first" placeholder="Email Address"/>
                    <input type="text" value='' className={styles.input} name="last" placeholder="Password"/>
                    <div className={styles.Button}><button type="submit">Log In</button></div>
                    <div className={styles.forgot}><Link  href="/forgotpassword">Forgot your password?</Link></div>

            </form>   
    </div>
    )
}

const styles = {
    HeroContainer: 'flex xs:flex-col lg:flex-row lg:min-h-screen mb-10 align-center justify-center',
    HeroText: 'flex flex-col w-[100vw]  xs:p-10 lg:mt-0 pr-0 align-center ',

    title: 'font-roboto md:pr-0 font-bold xs:text-3xl md:text-4xl md:px-0 xs:pt-12 md:pt-16 md:text-center lg:text-5xl mb-10 lg:pl-4', 
    text: 'text-l md:pr-0 text-center lg:pl-0 mx-96',

    aboutOne: 'flex flex-row h-[50vw] w-[100vw] mb-36 bg-blue-300 py-12 text-white',
    aboutOneTitle: 'w-1/2 font-roboto  xs:text-2xl md:text-2xl md:px-24 xs:pt-12 md:pt-16 md:text-center lg:text3xl mb-10 lg:pt-44 lg:text-left',
    rightImage: 'flex w-1/2',
    aboutTwo: 'flex flex-row-reverse  h-[50vw] w-[100vw] mb-36 py-12 bg-yellow-200',
    aboutTwoTitle: 'w-1/2 font-roboto  xs:text-2xl md:text-2xl md:px-24 xs:pt-12 md:pt-16 md:text-center lg:text3xl mb-10 lg:pt-44 lg:text-left ',
    messageFeedImage: 'flex w-1/2 ',
    aboutThree: 'flex flex-row h-[50vw] w-[100vw] mb-36 bg-red-300 py-12',

    loginHeader: 'text-4xl pl-56',
    Button: 'flex bg-[#a09924] rounded-lg p-1 w-1/2 justify-center ml-2 mt-5 px-5 text-white',
    input: 'rounded-lg m-2 p-2 bg-[#f4f4ee]', 
    form: 'flex flex-col w-1/3 pt-10 mt-12  ml-56 ', 
    loginBox: 'flex w-2/3',
    forgot: 'text-blue-600 text-sm ml-2 mt-6 mb-12 xs:mb-0', 

}