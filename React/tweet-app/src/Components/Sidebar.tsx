import React from 'react'
import Home from '../Pages/Home'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IRootState } from '../Store';

export default function Sidebar() {

  const loggedIn = useSelector((state: IRootState)=>state.user.loggedIn);

  return (
    <div className='sidebar'>
      <Link className='navlink' to={'/home'} >Home</Link>
      <Link className='navlink' to={'/view'} >Search People</Link>
      <Link className='navlink' to={'/tweet'} >Upload Post</Link>
    </div>
  )
}
