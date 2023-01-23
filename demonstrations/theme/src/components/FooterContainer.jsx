import React from 'react'
import FooterSwitch from './FooterSwitch'

const FooterContainer = ({setTheme}) => {
  return (
    <div className='FooterContainer'>
        <h2>FooterContainer</h2>
        <FooterSwitch setTheme={setTheme}/>
    </div>
  )
}

export default FooterContainer