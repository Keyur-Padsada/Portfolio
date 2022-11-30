import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import ContactFrom from '../components/ContactFrom'

const Contact = () => {
  return (
    <div>
     <Navbar></Navbar>
      <Heroimg2 heading="CONTACT" text ="Let's Discuss On Chat" number ="9664882513"></Heroimg2>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </div>
  )
}

export default Contact
