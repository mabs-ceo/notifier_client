import React, { useEffect, useState } from 'react'
import { getPrayerTime } from '../functions'

export default function PrayerTime() {
    const[prayerTimes,setPrayerTimes]=useState([])
    async function getData(){
        const data = await getPrayerTime()
      
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>PrayerTime</div>
  )
}
