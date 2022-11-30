import "./Heroimg2Styles.css"

import React,{Component} from 'react'

class Heroimg2 extends Component{
   
    render(){
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            <p>{this.props.number}</p>
        </div>
    
    </div>
  )
}
}


export default Heroimg2
