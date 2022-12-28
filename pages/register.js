import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import { useRouter } from 'next/router'
import codes from '../public/CountryCodes.json'






export default function register() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [age, setAge] = useState("")
  const [countrycode, setCountrycode] = useState("")
  
  const router = useRouter()
  
  
  const RegisterBody = {username: `${username}`, email: `${email}`, password: `${password}`, phonenumber: `${phonenumber}`, age: `${age}`}
  const [notify, setNotify] = useState("");

  // make post to the backend and store user in db:

const registerUser = async function() {

  const res = await fetch('http://127.0.0.1:8000/auth/register/', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(RegisterBody),
    })
    .then(res => {
      if (!res.ok){
          setNotify("One or more entries were invalid. Please try again")
          // alert("Invalid username or password.")
      }
      else {
          return res.json()
    .then(alert('Account created!'))
    .then(router.push('/#login'))
}})}

  return (
    <>
    <Navbar/>
    <div className={styles.pageContainer}>
        <section className={styles.regImage}>
          [bg image here]
        </section>
        <section className={styles.loginForm}>
            <div className={styles.title}>Enter the fields below to create an account with us.</div>
            <form  className={styles.form}>
                    <div className={styles.errortext}>{notify}</div>
                    <input type="text" className={styles.input} name="username"  placeholder="Username" onChange={evt => setUsername(evt.target.value)}/>
                    <div className={styles.disclaimer}>(maximum 20 characters)</div>
                    <input type="text" className={styles.input} name="email"  placeholder="Email Address" onChange={evt => setEmail(evt.target.value)}/>
                    <input type="text" className={styles.input} name="password"  placeholder="Password" onChange={evt => setPassword(evt.target.value)}/>
                    <div className={styles.disclaimer}>(minimum 8 characters)</div>
                    <input type="text" className={styles.input} name="Retype password"  placeholder="Retype Password"/>
                    <input type="text" className={styles.input} name="age"  placeholder="Date of Birth [YYYY-MM-DD]" onChange={evt => setAge(evt.target.value)}/>
                    <div className={styles.disclaimer}>(users must be over 13 years)</div>
                    <div className={styles.numberContainer}>
                    <select  className={styles.code} name="countrycode"  onChange={evt => setCountrycode(evt.target.value)}>
                          {codes.map(code => <option>{code.dial_code}</option>)}
                    </select>

                      <input type="text" className={styles.phoneinput} name="phonenumber"  placeholder="Phone number" onChange={evt => setPhonenumber(`${countrycode}` + evt.target.value)}/>
                    </div>
                    <div className={styles.disclaimer}>(this is for us to remain bot free)</div>

            </form>          
            <div className={styles.formButtons}>
                    <div className={styles.Button} onClick={registerUser}><button>Create Account</button></div>
            </div>

        </section>
       




    </div>
    </>
  )
}

const styles ={
    pageContainer: "flex flex-row w-[100vw] h-contain bg-blue-300",
    loginForm: "flex justify-center flex-col w-1/2  items-center bg-[#fde6b2] m-12 rounded-xl",
    form: "flex gap-4 flex-col w-1/3 pt-10 mt-5 items-center justify-center", 
    regImage: "felx w-1/2",
    input: 'rounded-lg m-2 p-2 bg-[#f4f4ee]', 
    formButtons: 'flex text-white bg-green-400 flex-col w-1/3 p-2 items-center rounded-md mt-12 mb-36', 
    title: 'text-2xl px-12 pt-16',
    disclaimer: "text-xs text-slate-600 -mt-4",
    errortext: "text-red-600",
    numberContainer: "flex gap-1 w-64",
    phoneinput: 'flex rounded-lg w-3/4  p-2 bg-[#f4f4ee]', 
    code: "flex w-1/4 h-contain rounded-lg py-2 px-1  bg-[#f4f4ee]"
}