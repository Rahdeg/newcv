import React from 'react'
import './rightcontent.css'
import Summary from '../../Component/Summary/summary'
import Experience from '../../Component/Experience/experience'
import Education from '../../Component/Education/education'
import Prodev from '../../Component/Prodev/prodev'
import Interest from '../../Component/Interest/interest'




function rightcontent() {
  return (
    <div className='right-content'>
    <Summary/>
    <Experience/>
    <Education/>
    <Prodev/>
    <Interest/>
    </div>
  )
}

export default rightcontent