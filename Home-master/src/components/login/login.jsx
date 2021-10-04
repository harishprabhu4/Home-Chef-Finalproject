import React from "react";
import "./style.scss";
// import Chefinfo from "../../form/personalinfo";
// import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

export class Login extends React.Component 
{
  

  render() {
    return (
      <div className= "base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
          </div>
          <h2 className="header">Login to your account</h2> <br/>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="Email address" placeholder="Email address" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="********" id="password" />
            
              
            </div>
          </div>
        </div>
        
          <button type="submit" className="butn-login"> <b> LOGIN </b> </button> <br/>

          {/* <button type="submit" className="butn-login"> <b> LOGIN as USER</b> </button> */}
          
        
        
      

                        

      </div>
    );
  }
}

                    