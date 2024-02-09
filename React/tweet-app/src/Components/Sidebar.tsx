import React from 'react'
import Home from '../Pages/Home'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <Link className='navlink' to={'/'} >Home</Link>
    </div>
  )
}
