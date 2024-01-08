import React, { useState } from 'react'
import '../Navbar.css'
const Navbar = () => {
  const[isScrolled,setIsScrolled]=useState(false)
  window.onscroll=()=>{
  setIsScrolled(window.pageYOffset===0?false:true);
  return()=>(window.onscroll=null)
  };
  // console.log(isScrolled);
  return (
    <div className={isScrolled?'navbar scrolled':'navbar'}>
      <div className='container'>
        <div className='left'>
<img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=" "/>
<span>Home</span>
<span>Series</span>
<span>Movies</span>
<span>New and Popular</span>
<span>Mylist</span>
        </div>
        <div className='right'>
        <i className="fa-solid fa-magnifying-glass" ></i>
        <span>KID</span>
        <i className="fa-solid fa-bell"></i>
        <img src="https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper-thumbnail.png" alt=" " width={20}/>
        <div className='profile'>
        <i className="fa-solid fa-caret-down" ></i>
        <div className='options'>
            <span>Settings</span>
            <span>Logout</span>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
