import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import PricingCard from '../components/PricingCard'
import AboutDes from '../components/AboutDes'

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimg2 heading="ABOUT" text ="Im a Friendly Front-End Devloper"></Heroimg2>
      <AboutDes></AboutDes>
      <PricingCard c1=" SKILLS  " c1_1="JAVA" c1_2 ="JAVASCRIPT" c1_3="HTML" c1_4="CSS" c1_5="OBJECT ORIENTED PROGRAMMING(OPPS)"  
       c2="SKILLS" c2_1="REACT JS" c2_2 ="SQL" c2_3="MONGO DB(Basic)" c2_4="NODE JS" c2_5="BOOTSTRAP" 
       c3=" NON-TECHINAL  SKILLS" c3_1="TIME MANAGEMENT" c3_2 ="ADAPTIVE NATURE" c3_3="GITHUB" c3_4="" c3_5="" >
     </PricingCard>
      <Footer></Footer>
    </div>
  )
}

export default About
