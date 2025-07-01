import React, { useState } from 'react'
import { IoChatboxEllipses } from "react-icons/io5";
import { NavLink } from 'react-router';
import Contact from './contact';
const ContactButton = () => {
    let [OnContact,setOnContact] = useState(false)
    let ContactActive = (event)=>{
        // console.log(event)
        setOnContact(event)
    }
  return (
    <div  >    
        <button onClick={()=>{setOnContact(true)}} className=" text-[30px] flex flex-col gap-0 fixed right-4 items-center bottom-4 border-4 rounded-full bg-blue-100/50 animation-bounce  border-fuchsia-700 text-purple-700 z-50 p-2 " >
        <IoChatboxEllipses />
        <span className="text-[10px] font-bold" >contact us</span>
        </button>
        {OnContact && <Contact OnActive={ContactActive} />}
    </div>
  )
}

export default ContactButton