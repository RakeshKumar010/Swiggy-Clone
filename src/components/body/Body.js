import React, { useState } from 'react'
import Api from '../../config.js'
import './Body.css'
import Bcard from './Bcard.js'

const Body = () => {

  
  return (
    <div className='body'>
      {/* {Api.map((value)=>{ 
        return value.data 
      })} */}
      {Api.map((value)=>{
        return <Bcard d={value}/>
      })}
    </div>
  )
}

export default Body