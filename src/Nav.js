import { useState ,useEffect} from 'react'
import './Nav.css'
const Nav=() => {
    const[show,handleShow]=useState(false);
 const transitionNavBar=()=>{
if(window.scrollY>100){
  handleShow(true)
 }
else{
    handleShow(false)
 }
};
useEffect(()=>{window.addEventListener("scroll",transitionNavBar);
return()=> window.removeEventListener('scroll',transitionNavBar);
 },[])
  return (
    <div className={`nav ${show&&"nav_black"}`}>
    <div className='nav_contents'>
        <img className='nav_logo'src="https://www.shutterstock.com/image-vector/netflix-logo-icon-design-vector-260nw-2270211003.jpg"alt="logo"/>
        <img className="nav_avtar" src="https://clipart-library.com/images/BTaEkro5c.png"alt=" "width='150px'/>
        </div>
    </div>
  )
}

export default Nav
