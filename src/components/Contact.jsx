import React from 'react'
import './styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact-us'>
      <form action="" style={{display: 'flex', flexDirection: 'column',
        width: '225px', justifyContent:'center', textAlign:'center', margin:"auto",
        gap:'25px', padding: '14px'
      }}>
          <label htmlFor="">First Name</label>
          <input type="text" />

          <label htmlFor="">Second Name</label>
          <input type="text" />


          <label htmlFor="">Email</label>
          <input type="email" />


          <label htmlFor="">Message Us</label>
          <input type="text" placeholder='Enter Your message here...' style={{height: '126px'}}/>

          <input type="submit" style={{backgroundColor:'black', color:'white'}} />
      </form>
    </div>
  )
}

export default Contact