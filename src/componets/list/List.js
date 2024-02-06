import React, { useRef, useState } from 'react'
import './List.css'
import Listitem from '../listitem/Listitem'
export default  function List(){
  const[isMoved,setMoved]=useState(0)
  const [sliderNumber,setsliderNumber]=useState(0);
  const listRef=useRef()
  const handleClick=(direction)=>{
    let distance=listRef.current.getBoundingClientRect.x-50
if(direction==='left' &&sliderNumber>0){
  setsliderNumber(sliderNumber-1)
  listRef.current.style.transform=`translatex(${230+distance}px)`
  }
  if(direction==='right'&& sliderNumber<5){
    setsliderNumber(sliderNumber-1)
    listRef.current.style.transform=`translatex(${-230+distance}px)`
    }
    console.log(distance)
}
  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className='wrapper'>
      <i className="fa-solid fa-chevron-left"  style={{fontSize:'30px',position:'reltive',top:'70%',left:'10px'}}onClick={()=>handleClick('left')}/>
      <div className='container' ref={listRef}>
        <Listitem index={1}/>
        <Listitem index={2}/>
        <Listitem index={3}/>
        <Listitem index={4}/>
        <Listitem index={5}/>
      </div>
      <i className="fa-solid fa-chevron-right" style={{fontSize:'30px', position:"relative",left:'95%'}}onClick={()=>handleClick('right')}/>
      </div>
    </div>
  )
}



