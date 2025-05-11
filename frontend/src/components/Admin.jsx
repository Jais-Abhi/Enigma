import React from 'react'
import { Link } from 'react-router'
const Admin = () => {
  return (
    <div className='border-2 border-b-amber-950 w-1/2 flex flex-col justify-center items-center gap-12 mt-36 mx-auto box-border'>
        <form action="/dashboard" method='post'>
        <p className='text-3xl text-center m-4 p-4' >Login AS Admin</p>
        <div className='m-4 text-2xl flex flex-row justify-between items-center gap-12'>
            <span>Username : </span>
            <input className='border-black border-2 w-3xs' type="text" />
        </div>
        <div className='m-4 text-2xl flex flex-row justify-between items-center'>
            <span>Password : </span>
            <input className='border-black border-2 w-3xs' type="text" />
        </div>
        <div className='m-4 text-2xl flex flex-row justify-between items-center'>
            <span>Unique-Key : </span>
            <input className='border-black border-2 w-3xs' type="text" />
        </div>
        <Link to="/dashboard" className='flex justify-center' >
            <button className=' bg-blue-400 rounded-4xl p-4 text-2xl m-8 text-center mx-auto' >Enter Admin Panel</button>
        </Link>
        
        </form>
    </div>
  )
}

export default Admin