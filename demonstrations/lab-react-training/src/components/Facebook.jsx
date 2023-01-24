import React from 'react'
import { useState } from 'react';
import profiles from '../data/berlin.json';
import IdCard from './IdCard';
import IdCardFacebook from './IDFacebook';

const Facebook = () => {
    console.log(profiles)
    const [filter, setFilter ] = useState('All')

  return (
    <div>
        <h2>Facebook</h2>
        <div>
            <button onClick={()=>setFilter('All')}>All</button>
            <button onClick={()=>setFilter('England')}>England</button>
            <button onClick={()=>setFilter('USA')}>Usa</button>
        </div>
        {profiles.filter(profiles=>{
            if(filter==='All'){return true}
            return profiles.country===filter
        }).map(profile=><IdCardFacebook data={profile}/>)}
    </div>
  )
}

export default Facebook


// <IdCard
//   lastName='Doe'
//   firstName='John'
//   gender='male'
//   height={178}
//   birth={new Date("1992-07-14")}
//   picture="https://randomuser.me/api/portraits/men/44.jpg"
// /> 