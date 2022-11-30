import "./ContactFormStyles.css"

import React from 'react'
// import { Form } from "react-router-dom"

const ContactFrom = () => {
    return (
        <div>
            <form className="form from-line">
                <div className="f1">
                    <label>Name        :
                        <input type="text" placeholder="ENTER YOUR NAME"></input>
                    </label>
                </div>

                <div className="f2">
                    <label>Contact     :
                        <input type="number" placeholder="MOBILE NUMBER"></input>
                    </label>
                </div>

                <div className="f3">
                    <label>Company     :
                        <input type="text" placeholder="WHAT'S YOUR COMPANY NAME"></input>
                    </label>
                </div>
                <div className="f5">
                    <label>Technology     :
                        <input type="text" placeholder="WHICH TECHNOLOGY "></input>
                    </label>
                </div>

                <div className="f4">
                    <label>Location    :
                        <input type="text" placeholder="ENTER ADDRESS"></input>
                    </label>
                </div>

                <div className=" btn btn-submit from-line">
                  <buttton type="submit">Submit</buttton>
                </div>

            </form>
        </div>
    )
}

export default ContactFrom
