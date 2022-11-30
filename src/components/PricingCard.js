import "./PricingCardStyles.css"

import React ,{Component} from 'react'
import { Link } from "react-router-dom"

class PricingCard extends Component {
  render(){
   
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
            <h3>{this.props.c1}</h3>
            <span className="bar"></span>
            <p className="btc">{this.props.c1_1}</p>
            <p>{this.props.c1_2}</p>
            <p>{this.props.c1_3}</p>
            <p>{this.props.c1_4}</p>
            <p>{this.props.c1_5}</p>
            <Link to="/contact" className={this.props.val}>{this.props.btnval}</Link>
        </div>

        <div className="card">
            <h3><p>{this.props.c2}</p></h3>
            <span className="bar"></span>
            <p className="btc"><p>{this.props.c2_1}</p></p>
            <p>{this.props.c2_2}</p>
            <p>{this.props.c2_3}</p>
            <p>{this.props.c2_4}</p>
            <p>{this.props.c2_5}</p>
             <Link to="/contact" className={this.props.val}>{this.props.btnval}</Link>
        </div>

        <div className="card">
            <h3><p>{this.props.c3}</p></h3>
            <span className="bar"></span>
            <p className="btc"><p>{this.props.c3_1}</p></p>
            <p>{this.props.c3_2}</p>
            <p>{this.props.c3_3}</p>
            <p>{this.props.c3_4}</p>
            <p>{this.props.c3_5}</p>
            <Link to="/contact" className={this.props.val}>{this.props.btnval}</Link>
        </div>
      </div>
    </div>
  )
}
}

export default PricingCard
