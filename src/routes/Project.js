import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer'
import WorkCard from '../components/WorkCard'
import PricingCard from '../components/PricingCard'

const Project = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Heroimg2 heading="PROJECTS." text="Some of My Recent Work"></Heroimg2>
     <WorkCard ></WorkCard>
     <PricingCard c1="-- Basic--" c1_1="$100" c1_2 ="--3 Days--" c1_3="--5 Pages--" c1_4="--Features Limit--" c1_5="--Responsive Design--" val="btn" btnval="Purchase"
     c2="-- Premium--" c2_1="$200" c2_2 ="--5 Days--" c2_3="--7 Pages--" c2_4="--Features extends--" c2_5="--Responsive Design--" 
     c3="-- Bussiness--" c3_1="$500" c3_2 ="--7 Days--" c3_3="--12 Pages--" c3_4="--Features Next Level--" c3_5="--Responsive Design--" >

     </PricingCard>
     <Footer></Footer>
    </div>
  )
}

export default Project
