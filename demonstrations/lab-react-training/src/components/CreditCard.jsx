import React from 'react'
import visaLogo from '../assets/images/visa.png'
import masterCardLogo from '../assets/images/master-card.png'

import './style/creditCard.css'

const CreditCard = ({type}) => {
    
  return (
    <div className="CreaditCard">
        <h2>MasterCard</h2>
        <img src={type==='Visa' ? visaLogo : masterCardLogo} alt="" />
        {/* <img src={visaLogo} alt="" /> */}
        {/* <img src={masterCardLogo} alt="" /> */}
        <p>=========================</p>
        {type==='Master Card' && <img src="./assets/master-card.png"/>}
        <p>=========================</p>
    </div>
  )
}

export default CreditCard