import React from 'react'
import face from './face.jpg'

const into = () => {
  return (
    <div class="intro">
            <div class="img"> 
         <img src={face} alt="MyPicture"/>
            </div>
            <div>
                    <h1>Adegbite Raheem</h1>
                    <p>Web Developer</p>
            </div>
    </div>
  )
}

export default into