import React from 'react'
import './leftcontent.css'
import Into from '../../Component/Intro/into'
import Info from '../../Component/Info/info'
import Proskills from '../../Component/Proskills/proskills'
import Techskills from '../../Component/Techskills/techskills'



function leftcontent() {
  return (
    <div className='left-content'>
    <Into/>
    <Info/>
    <Proskills/>
    <Techskills/>

    </div>
  )
}

export default leftcontent