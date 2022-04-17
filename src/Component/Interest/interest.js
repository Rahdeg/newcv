import React from 'react'
import coding from './images/coding.png'
import gaming from './images/gaming.png'
import luggage from './images/luggage.png'
import football from './images/football-field.png'



const interest = () => {
  return (
    <div class="interest">
                <h2>interest</h2>
                <div class="interest-list">
                    <ul>
                        <li><img src={coding} alt="co"/>
                            Coding</li>
                        <li><img src={luggage} alt="lu"/>
                            Travelling</li>
                        <li><img src={gaming} alt="ga"/>
                            Gaming</li>
                        <li><img src={football} alt="fo"/>
                            Soccer</li>
                    </ul>
                </div>
            </div>
  )
}

export default interest