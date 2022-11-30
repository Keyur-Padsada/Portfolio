import "./WorkCardStyles.css"
import pro1 from "../assets/project1.png"
import pro2 from "../assets/project21.png"
import pro3 from "../assets/project31.png"

import React from 'react'
// import { NavLink , Link} from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
     <div className="project_heading">
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="nature"/>
                <h2 className="project-title">project title 1</h2>
                <div className="pro-details">
                    <p>This is a E- commerce Website and hosting on netlify server . </p>
                    <div className="pro-btns">
                    <a  className ="btn" href="https://indiacloths.netlify.app/" target="_blank" rel="noreferrer">View</a>
                    <a  className ="btn" href="https://github.com/Keyur-Padsada/Ecom_By_javaScript_HTML_CSS" target="_blank" rel="noreferrer">Source</a>
                        {/* <NavLink to="https://youtu.be/sX2bYV6nSy4" className="btn">Source</NavLink> */}
                        
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={pro3} alt="nature"/>
                <h2 className="project-title">project title 2</h2>
                <div className="pro-details">
                    <p>this website is find a dog around youe area and buy this dog and this website is hosting on netlify.</p>
                    <div className="pro-btns">
                    <a  className ="btn" href="https://dogsloves.netlify.app" target="_blank" rel="noreferrer">View</a>
                    <a  className ="btn" href="https://github.com/Keyur-Padsada/dogs" target="_blank" rel="noreferrer">Source</a>
                        {/* <NavLink to="https://youtu.be/sX2bYV6nSy4" className="btn">View</NavLink>
                        <NavLink to="https://youtu.be/sX2bYV6nSy4" className="btn">Source</NavLink> */}
                        
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={pro2} alt="nature"/>
                <h2 className="project-title">project title 3</h2>
                <div className="pro-details">
                    <p>This is my first Website and its contain a various drum sound and you also play the drums .</p>
                    <div className="pro-btns">
                    <a  className ="btn" href="https://drumsplay6.netlify.app" target="_blank" rel="noreferrer">View</a>
                    <a  className ="btn" href="https://github.com/Keyur-Padsada/drumproject" target="_blank" rel="noreferrer">Source</a>
                        {/* <NavLink to="/www.Goggle.com" className="btn">View</NavLink>
                        <Link to="/https://youtu.be/sX2bYV6nSy4" className="btn">Source</Link> */}
                       
                        
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default WorkCard
