import React from 'react'
import { tabLabels } from './constant'
import { Link } from 'react-router-dom'
import "./Tabs.css"
const Tabs = ({activeTabName,onclickTab}) => {
    const{ CENCEL_AT_ANY_TIME, WATCH_ANYWHERE, PICK_YOUR_PRICE}=tabLabels;
    const renderTabTitles=(tabTitle,isActive,icon,id)=>(
       <div onClick={()=>onclickTab(tabTitle)} id={id} className={`tab-item ${isActive&&" tab-border"}`}>
<i className={icon}/>
<p >{tabTitle}</p>
       </div> 
    )
  return (
    <div>
      <section className='tabs'>
        <div className='container'>
            {renderTabTitle(CENCEL_AT_ANY_TIME,activeTabName===CENCEL_AT_ANY_TIME," fas fa-door-open fa-3x","tab-1")}
        </div>
      </section>
    </div>
  )
}

export default Tabs
