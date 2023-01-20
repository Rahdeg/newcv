import React from 'react'
import gmail from './Images/gmail.png'
import home from './Images/home.png'
import instagram from './Images/instagram.png'
import linkedin from './Images/linkedin.png'
import twitter from './Images/twitter.png'
import whatsapp from './Images/whatsapp.png'

const info = () => {
  return (
   <div class="info">
                <h2 class="title">Contact Info</h2>
                <ul>
                    <li><img className='icon' src={home} alt='f'/>
                        Abeokuta, Nigeria.</li>
                        <li><img className='icon' src={whatsapp} alt='f'/>
                        +2348106473829</li>
                        <li><img className='icon' src={gmail} alt='f'/>
                        walett95@gmail.com</li>
                        <li><img className='icon' src={instagram} alt='f'/>
                        Raheemadegbite</li>
                        <li><img className='icon' src={linkedin} alt='f'/>
                        raheemadegbite</li>
                    <li><img className='icon' src={twitter} alt='f'/>
                    @Walett25</li>
                </ul>
            </div>
  )
}

export default info