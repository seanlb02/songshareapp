import React from'react';
import ReactDOM from'react-dom';
import Image from 'next/image';
import Link from 'next/link';


export default function Homebody() {
  return (
    <div className={styles.pageContainer}>
        <div className={styles.HeroContainer}>
            <div className={styles.HeroText}>
                <div className={styles.title}>Trade tracks with the world</div>
                <div className={styles.text}>Curate your own [AppName] profile and get sent music reccomendations from the world&apos;s best tastemakers
                 &mdash; your friends included</div>
                <form  className={styles.form} action="/send-data-here" method="post">
                    
                    <input type="text" value='' className={styles.input} name="first" placeholder="Email Address"/>
                    <input type="text" value='' className={styles.input} name="last" placeholder="Password"/>
                    <div className={styles.Button}><button type="submit">Log In</button></div>
                    <div className={styles.forgot}><Link  href="/forgotpassword">Forgot your password?</Link></div>

                </form>   
            </div>
            <div className={styles.heroImage}>
                <div className={styles.mainImage}></div>
            </div>
            
        </div>

            <div className={styles.aboutOne}>
                <div className={styles.aboutOneTitle}>
                        New music you add to your profile's <em>track tree</em> gets automatically distributed to your followers as <u>branches</u>.
                </div>
            
            </div>
            <div className={styles.aboutTwo}>
                <div className={styles.aboutTwoTitle}>
                    The branches you are sent by the people you follow are stored like a messages feed. Consider these feeds as personalised playlists. 
                </div>
                <div className={styles.messageFeedImage}>
                <Image/>
                </div>
            </div>
            <div className={styles.aboutThree}>
                <div className={styles.aboutThreeTitle}>
                    Keep your branches in order by <em>removing</em> tracks you dont vibe with. 
                    <br></br>
                    <br></br>Don&apos;t worry &mdash; we won&apos;t tell them
                </div>
                <div className={styles.removingTracksImage}>
                <Image/>
                </div>
            </div>     
    </div>
    )
}

const styles = {
    HeroContainer: 'flex xs:flex-col lg:flex-row lg:min-h-screen border-b-4 border-black mb-10 ',
    HeroText: 'flex flex-col w-2/5  xs:p-10 lg:mt-0 pr-0',
    heroImage: 'flex w-3/5',
    title: 'font-roboto md:pr-0 font-bold xs:text-3xl md:text-4xl md:px-0 xs:pt-12 md:pt-16 md:text-center lg:text-left lg:text-5xl mb-10 lg:pl-4', 
    text: ' text-l md:pr-0 text-left lg:pl-4',
    Button: 'flex bg-[#a09924] rounded-lg p-1 w-1/2 justify-center ml-2 mt-5 px-5 text-white',
    input: 'rounded-lg m-2 p-2 bg-[#f4f4ee]', 
    form: 'flex flex-col  pt-10 mr-24 mt-0 lg:pl-4', 
    loginBox: 'flex w-2/3',
    forgot: 'text-blue-600 text-sm ml-2 mt-6 mb-12 xs:mb-0', 

    aboutOne: 'flex flex-row h-[40vw] w-[100vw]',
    aboutOneTitle: 'w-1/2 font-roboto  xs:text-2xl md:text-2xl md:px-24 xs:pt-12 md:pt-16 md:text-center lg:text3xl mb-10 lg:pt-44 lg:text-left',
    addingTracksImage: 'flex w-1/2 ',
    aboutTwo: 'flex flex-row-reverse h-[50vh] h-[40vw] w-[100vw]',
    aboutTwoTitle: ' w-1/2 font-roboto lg:pl-24 xs:text-2xl md:text-2xl md:px-24 xs:pt-12 md:pt-16 md:text-center lg:text3xl mb-10 lg:pr-36 lg:pt-44 lg:text-left',
    messageFeedImage: 'flex w-1/2 ',
    aboutThree: 'flex flex-row h-[40vw] w-[100vw] ',
    aboutThreeTitle: ' w-1/2 font-roboto xs:text-2xl md:text-2xl md:px-24 xs:pt-12 md:pt-16 md:text-center lg:text3xl mb-10 lg:pr-52 lg:pt-44 lg:text-left',
    removingTracksImage: 'flex w-1/2 '
}