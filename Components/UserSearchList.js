import React, {useState, useEffect} from'react';
import ReactDOM from'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import messages from '../public/messages.svg'
import { useRouter } from 'next/router';
import SearchListItem from './SearchListItem'


export const UserSearchList = () => {

 const [username, setUsername] = useState("");


  return (
    <SearchListItem/> 
  )
}
