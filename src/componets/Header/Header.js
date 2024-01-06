import React from 'react';
import{Link} from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IEY62zMxfun8M83Muzek1wK7nORzHw1DRjpQbxIxXg&s" alt="logo"/>
     <Link to='/' className=" btn btn-round">sign In</Link>
        </div>
        <div className='header-content'>
            <h1>Unlimeted movies, tv shows and  more</h1>
            <p>Watch  anywhere,  Cancel Anytimes</p>
            <Link to="/netflix-show" className='btn btn-xl'>
                Watch free for 30 days
                <i className='fas fa-chevron-right  btn-icon'></i>
            </Link>
        </div>
    </div>
  )
}

export default Header
