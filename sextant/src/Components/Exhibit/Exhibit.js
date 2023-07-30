import React  from 'react'
import Card from '../Card/Card'



const Exhibit = () => {
 
  return (
    <div className='container'>
        <div className='h2 m-4'>Dashboard</div>
        <div className='d-flex justify-content-start align-items-start  flex-wrap'>
        <Card  ipType="ipv4"/>
        <Card  ipType="ipv6"/>
        </div>
       

    </div>
    
  )
}

export default Exhibit