
import React, { useState } from 'react';
import './cart.css';
import Changeaddress from './changeaddress';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Changephno from './changephno';
import Orders from './orders';

export default function Cart()
 {
     const [serving, setServing] = useState(1);

     function changeServings(ev)
     {
         setServing ({serving: ev.target.value});
         console.log(serving);
     }

     
        
                  <Router>
                      <Link exact to="/orders"> </Link>
                      <Switch>
                          <Route path="/orders" component={Orders}></Route>
                      </Switch>
                  </Router>
     

    return (
        <div className="body-cart">

           

           	   <span  className="title-color"><i className="fa fa-map-marker color-primary icon"></i> &nbsp;  &nbsp; Deliver to  </span>  
               <span className="address-align"> <div id="position">65234 uwehcoiuth uieruthp, <br/> jcbyegry cgrb, <br/> cbygregu, <br/> 7534673 </div></span>
               <Router>
                      <Link className="title-color money-right" exact to="/changeaddress">  <i className="fa fa-address-book icon" aria-hidden="true"></i> Change address </Link>
                      <Switch>
                          <Route path="/changeaddress" component={Changeaddress}></Route>
                      </Switch>
                  </Router>
               
                
               <br/> <p></p>

               <i className="fa fa-plus-square icon" aria-hidden="true"></i>  <span className="title-color"> &nbsp;  &nbsp; No of servings </span>
               <input type="number" min="1" onChange={changeServings} name="nofServings"  className="input-box-beauty forcvv" required />

                <br/>  <br/> <br/> <br/>

                
               <div className="payment-border box-beauty">
                     <label className="subtitle "> Items total </label> <span className="money-right"> <i className="fa fa-rupee  "></i> 1877</span>
                     <br/> <br/>

                      <label className="subtitle "> Delivery Charge </label> <span className="money-right"> <i className="fa fa-rupee  "></i> 80</span>

                      <br/> <br/>

                      <label className="subtitle "> Taxes and charges </label> <span className="money-right"> <i className="fa fa-rupee  "></i> 180</span>

                      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

                      <label className="grand-total "> Grand Total </label> <span className="money-right"> <i className="fa fa-rupee  "></i> 2180</span>
               </div>
                <br/>  <br/>  <br/>
               <span className="title-color"> <i className="fa fa-phone  icon"></i>  &nbsp;  &nbsp; Phone no </span>
               <span className="address-align"> +91 7634786879</span> 
                <Router>
                      <Link className="title-color money-right" exact to="/changephno" > Change phone number </Link>
                      <Switch>
                          <Route path="/changephno" component={Changephno}></Route>
                      </Switch>
                  </Router> 
               <br/> <p></p> <br/>

                {/* <Router> */}
                      <Link to="/ordering/orders"> <button type="button" className="buttonpay" > Proceed to payment</button></Link>
                      {/* <Switch> */}
                          {/* <Route exact path="/ordering/orders" component={Orders}></Route> */}
                      {/* </Switch> */}
                  {/* </Router> */}

                <br/> <br/> <br/>
           
            
        </div>
    )
}
