import React from 'react'
import { BsStar } from "react-icons/bs";

const HomeTabs = ({heading, text}) => {
  return (
    <div className='home-tabs'>
        <BsStar color='#3a54b4' size={40}/>
        <p style={{color:'#3a54b4', fontSize: 20, fontWeight: 700}}>{heading}</p>
        <p style={{textAlign:'center', fontWeight: '200', lineHeight: '1.875em'}}>{text}</p>
    </div>
  )
}

export default HomeTabs