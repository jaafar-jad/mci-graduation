
import './header.css';
import React from 'react'
import {Link} from 'react-router-dom'



export default function header() {
    return (
 <div className='top'>
         <ul className='topList'> 
                <li className='topListItem'><Link  className='link' to="/">HOME</Link></li>
                <li className='topListItem'><Link  className='link' to="/about">ABOUT</Link></li>
                <li className='topListItem' ><Link  className='link' to="/service">BLOG</Link></li>
                <li className='topListItem'><Link  className='link' to="/contact">CONTACT</Link></li>
                <li className='topListItem' ><Link  className='link' to="/user"></Link></li>
    </ul>
        </div>
        
    )
}
