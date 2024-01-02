import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
const Banner = () => {
  const[movie,setMovie]=useState([])
  useEffect(()=>{

  },[])
  function truncate(string,n){
return string?.length>n?string.substr(0,n-1)+'...':string;
  }
  return (
    <header className='banner'
     style={{backgroundSize:"cover",backgroundPosition:"center center",
     backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`}}>
<div className='banner_contents'>
    <h1 className='banner_title'>Movie Name</h1>
    <div className='banner-buttons'>
        <button className='banner-button'>Play</button>
        <button className='banner-button'>My List</button>
    </div>
    <h1 className='banner_descreption'>{truncate(`Spend more time on your business growth. Boost your online sales today. Easy Onboarding. Migration Assistance. Voice, Email and Chat Support. Remote Jobs. High Salary. Click To Apply. Apply Now. Jobs Near You. Search Jobs & Apply. Online Work From Home. Get Job Alert. Spend more time on your business growth. Boost your online sales today.
    ApplySpend more time on your business growth. Boost your online sales today. Easy Onboarding. Migration Assistance. Voice, Email and Chat Support. Remote Jobs. High Salary. Click To Apply. Apply Now. Jobs Near You. Search Jobs & Apply. Online Work From Home. Get Job Alert. ApplySpend more time on your business growth. Boost your online sales today. Easy Onboarding. Migration Assistance. Voice, Email and Chat Support. Remote Jobs. High Salary. Click To Apply. Apply Now. Jobs Near You. Search Jobs & Apply. Online Work From Home. Get Job Alert. Apply`,180)}</h1>
</div>
<div className='banner--fadeBottom'>
</div>
    </header>
  )
}

export default Banner
