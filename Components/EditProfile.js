import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import locdata from '../public/locationapi.json'


export const EditProfile = () => {



        //  .then((countryArray) => countryArray.cities.map(country => cityArray.push(country.cities)))
        //  .then(() => setCities(cityArray))

        //  map(item => setCity(item.cities)))
        // //  .then((data) => console.log(array))
        //  .then(() => locArray.map(item => countryArray.push(item.country)))
        // //  .then(console.log(countryArray))
        //  // .then((data =>  data.map(item => setUserdata(item))))
         
 

//  async function getCity() {
//     await fetch( 'https://countriesnow.space/api/v0.1/countries/', {
//      method: 'GET',
 
//      })
//      .then(res => res.json())
//      .then((data) => data.data.map(item => setCity(item.cities)))
//     //  .then((data) => console.log(array))
//     //  .then(() => locArray.map(item => countryArray.push(item.country)))
//     //  .then(console.log(countryArray))
//      // .then((data =>  data.map(item => setUserdata(item))))
     
// }




// useEffect(() => {
   

//         locdata.data.map(item => cityArray.push(item.cities));
//         // console.log(cityArray.flat(1))
//         setMajorcities(cityArray.flat(1))


    
    

const [bio, setBio] = useState();
const [city, setCity] = useState();
const [country, setCountry] = useState();

const EditBody = { bio: `${bio}`, country: `${country}`, city: `${city}` }

const saveChanges = function() {

    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))

    const res = 
    fetch('http://127.0.0.1:8000/users/current/editprofile/', {
    method: 'PATCH',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(EditBody),
    })
    .then((res) => res.json())

    .catch((error) => {
    console.error('Error:', error);
    });

}



const locArray = []
const [countryArray, setCountryArray] = useState();
const [cities, setCities] = useState();
// const [majorcities, setMajorcities] = useState([]);
const cityArray = []

const [selectedObj, setSelectedObj] = useState();

const data = locdata.data 

const selection = (data.filter(obj => {
    return obj.country === country

}))
console.log(selection)

const capitals = selection.map(obj => obj.cities)
console.log(capitals)

var cityselector = capitals[0]
console.log(cityselector)



  return (
    <div className={styles.editContainer}>
    <section className={styles.editHeader}>
        Edit Profile
    </section>
    
        <section className={styles.loginForm}>
            <div className={styles.title}>Fill in the fields below to edit your profile</div>
            <form  className={styles.form}>
                    <input type="text" className={styles.input} name="bio"  placeholder="Type your new bio here" onChange={evt => setBio(evt.target.value)}/>
                    <select type="select" className={styles.input} name="country"  placeholder="Country" onChange={evt => setCountry(evt.target.value)}>
                        {/* {countryArray.map(country => <option>{country.country}</option>)} */}
                        <option>Select Country</option>
                        {locdata.data.map(item => <option>{item.country}</option>)}
                    </select>
                    <select type="select" className={styles.input} name="city"  placeholder="City" onChange={evt => setCity(evt.target.value)}>
                        <option>Select city</option>
                        {country != undefined ? cityselector.map(item => <option>{item}</option>) : <option></option>}
                    </select>

            </form>          
            <div className={styles.formButtons}>
                    <div className={styles.Button} onClick={saveChanges} ><button>Save Changes</button></div>
            </div>

        </section>
    </div>
  )
}


const styles = {
    editContainer: "overflow-y-scroll h-screen w-[60vw] flex flex-col ",
    editHeader: "h-20% w-4/5 ml-auto text-2xl mt-20",
    loginForm: "flex justify-center flex-col w-contain  items-center  m-12 rounded-xl",
    form: "flex gap-4 flex-col w-full pt-10 mt-5 items-center justify-center", 
    regImage: "felx w-1/2",
    input: 'rounded-lg w-full m-2 p-2 bg-[#f4f4ee]', 
    formButtons: 'flex text-white bg-green-400 flex-col w-1/3 p-2 items-center rounded-md mt-12 mb-36', 
    title: 'text-2xl px-12 pt-16',
    disclaimer: "text-xs text-slate-600 -mt-4",
}