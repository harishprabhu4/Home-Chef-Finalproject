import React, { Component } from 'react'
import './personalinfo.css';

export default class Chefinfo extends Component
 {
 
    constructor(props) {
        super(props)
    
        this.state = {
             Name: '',
            //  Gender: '',
             
             Address: '',
             City: '',
             State: '',
             Pincode: '',
             Phno:  '',
             Email:'',
            //  POI: '', POIno: '',
             Kname : '',
             Preference: '',
            //  Exp:'',
            //  Nofy: '0',
             Promises: '',
             username: '',
             password: '',
             rePassword: ''
            //  FSSAIno:'', True: '',
            //  Terms: '', Cdate: ''

        }
    }

    

    cname = (event) => {  this.setState ( {Name : event.target.value} ) }
   //cnation = (event) => { this.setState ( { Nation: event.target.value} ) }
    caddress = (event) => { this.setState ( { Address: event.target.value} ) }
    ccity = (event) => { this.setState ( { City: event.target.value} ) }
    cstate = (event) => { this.setState ( { State: event.target.value} ) }
    cpincode = (event) => { this.setState ( { Pincode: event.target.value} ) }
    cphno = (event) => { this.setState ( { Phno: event.target.value} ) } 
    // caphno = (event) => { this.setState ( { Aphno: event.target.value} ) }
    cemail = (event) => { this.setState ( { Email: event.target.value} ) }
    // cpoi = (event) => { this.setState ( { POI: event.target.value} ) }
    // cpoin = (event) => { this.setState ( { POIno: event.target.value} ) }
    ckname = (event) => { this.setState ( { Kname: event.target.value} ) }
    cprefer = (event) => { this.setState ( { Preference: event.target.value} ) }
    // cexp = (event) => { this.setState ( { Exp: event.target.value} ) }
    // cnofy = (event) => { this.setState ( { Nofy: event.target.value} ) }
    cpromi = (event) => { this.setState ( { Promises: event.target.value} ) } 
    cusername = (event) => { this.setState ( { username: event.target.value} ) } 
    cpassword = (event) => { this.setState ( { password: event.target.value} ) } 
    crepassword = (event) => { this.setState ( { rePassword: event.target.value} ) }    
    // cterms = (event) => { this.setState ( { Terms: event.target.value} ) }
    // ccdate = (event) => { this.setState ( { Cdate: event.target.value} ) }

////////////////////on submit //////////////////////////////////////////////////////////////////////////////////////

    submitted = (eve) => {
         eve.preventDefault(); 
         console.log (this.state);

        }

/////////////////// on Reset //////////////////////////////////////////////////////////////////////////////////////////

    setClean = () => {
        this.setState ( {Name : ''} ) 
        // this.setState ( {Gender :''} )  
        this.setState ( {Address :''} ) 
        this.setState ( {City :''} ) 
        this.setState ( {State :''} ) 
        this.setState ( {Pincode :''} ) 
        this.setState ( {Phno :''} )
        this.setState ( {Email :''} )
        this.setState ( {Kname :''} )
        this.setState ( {Preference :''} )
        this.setState ( {Promises :''} )
        this.setState ( {username :''} )
        this.setState ( {password :''} )
        this.setState ( {rePassword :''} )
    }
////////////////// text Regex /////////////////////////////////////////////////////////////////////////////////////

    textPattern = (eve) => {
         const textPattern = /^[A-Za-z\s,]+$/
         let text = eve.target.value;
         let idname =  eve.target.id ;

         if( idname === "nameId")
         {
            if(textPattern.test(text))
            {
                let div = document.getElementById("nameCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("nameCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
         else if (idname === "cityId")
         {
             if(textPattern.test(text))
            {
                let div = document.getElementById("cityCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("cityCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }

         else if (idname === "stateId")
         {
             if(textPattern.test(text))
            {
                let div = document.getElementById("stateCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("stateCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }

         else if (idname === "promiseId")
         {
             if(textPattern.test(text))
            {
                let div = document.getElementById("promiseCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("promiseCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }


////////////////////// Phone number Regex ////////////////////////////////////////////////////////////////////////////////////////

    numberPattern = (eve) =>{
         const textPattern = /^[0-9]{10}$/
         let text = eve.target.value;
         let idname =  eve.target.id ;
          if( idname === "phnoId")
         {
            if(textPattern.test(text))
            {
                let div = document.getElementById("phnoCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("phnoCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }

////////////////////// Pincode Regex ////////////////////////////////////////////////////////////////////////////////////////

    pincodePattern = (eve) =>{
         const textPattern = /^[0-9]{6}$/
         let text = eve.target.value;
         let idname =  eve.target.id ;
         if (idname === "pincodeId")
         {
             if(textPattern.test(text))
            {
                let div = document.getElementById("pincodeCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("pincodeCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }

///////////////////////// Email Regex /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    emailPattern = (eve) =>{
         const textPattern = /^[a-zA-Z0-9]+[@]{1}[a-zA-Z]+[.com]{4}$/
         let text = eve.target.value;
         let idname =  eve.target.id ;
         if( idname === "emailId")
         {
            if(textPattern.test(text))
            {
                let div = document.getElementById("emailCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("emailCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }

/////////////////////username/////////////////////////////////////////////////////////////////////////////////////////////////////////

    usernamePattern = (eve) => {
         const textPattern = /^[A-Za-z0-9]+$/
         let text = eve.target.value;
         let idname =  eve.target.id ;

         if( idname === "usernameId")
         {
            if(textPattern.test(text))
            {
                let div = document.getElementById("usernameCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("usernameCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }

///////////////////// Password /////////////////////////////////////////////////////////////////////////////////////////////////////////

    passwordPattern = (eve) => {
         const textPattern = /^((?=.*\d)(?=.*[a-z])(?=.*[A-z])(?=.*[@!#$%^&.?*()+-])).{8,12}$/
         let text = eve.target.value;
         let idname =  eve.target.id ;

         if( idname === "passwordId")
         {
            if(textPattern.test(text))
            {
                let div = document.getElementById("passwordCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("passwordCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }

/////////////////////re-enter Password /////////////////////////////////////////////////////////////////////////////////////////////////////////

    repasswordPattern = (eve) => {
         let text = eve.target.value;
         let idname =  eve.target.id ;

         if( idname === "repasswordId")
         {
            if(text === this.state.password)
            {
                let div = document.getElementById("repasswordCmds");
                div.textContent = "correct";
                div.style.color="green";
            }
            else{
                let div = document.getElementById("repasswordCmds");
                div.textContent = "incorrect";
                div.style.color="red";
            }
         }
    }


    render() {
        return (
            <div className = "bod">
                <h3>Registration Details</h3><br/>
              <form onSubmit={this.submitted}> 

                 <div className="container">
                <label className="label"> Name </label>
                <input type="text"  name="chefName" value = {this.state.Name} onChange = {this.cname} onInputCapture={this.textPattern} id="nameId" className = "ip1" required></input>
                <span id="nameCmds" className="valid-cmds"> </span> <br/>
            

                <div className="Address-container">

                

                <label className="label"> Address </label>                
                <input type="text"  name="chefAddresss" value = {this.state.Address} onChange ={this.caddress} className = "ipage" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label  className="label"> City </label>
                <input type="text"  name="chefCity" value = {this.state.City} onChange = {this.ccity} onInputCapture={this.textPattern} id="cityId"  className = "ipage" required></input> 
                <span id="cityCmds" className="valid-cmds"> </span> <br/>

                <label className="label"> State </label>
                <input type="text"  name="chefState" value = {this.state.State} onChange = {this.cstate} onInputCapture={this.textPattern} id="stateId" className = "ipage" required></input> 
                <span id="stateCmds" className="valid-cmds"> </span> &ensp; &ensp; &ensp; &nbsp;

                <label className="label" > Pincode </label>
                <input type="text"  name="chefPincode" inputMode= "numeric" value = {this.state.Pincode} onChange = {this.cpincode} onInputCapture={this.pincodePattern} id="pincodeId" className = "ipage" required></input>
                 <span id="pincodeCmds" className="valid-cmds"> </span> <br/>

                 <label className="label"> Phone Number </label>
                <input type="text"  name="chefPhno" inputMode= "numeric" value = {this.state.Phno} onChange = {this.cphno}  onInputCapture={this.numberPattern} id="phnoId" className = "ipage " required></input>
                <span id="phnoCmds" className="valid-cmds"> </span> &ensp; &ensp; &ensp; &nbsp;

                

                
                <label className="label"> E-mail Id </label>
                <input type="email"  name="chefEmail" value = {this.state.Email} onChange = {this.cemail} onInput={this.emailPattern} id="emailId" className = "ipage" required></input>
                <span id="emailCmds" className="valid-cmds"> </span> &ensp; &ensp; &ensp; &nbsp;

                

                     </div>



 
                              
                <label className="label"> Your Kitchen Name </label>                
                <input type="text"  name="kitchenName" placeholder="Enter your preferable name" value = {this.state.Kname} onChange = {this.ckname} className = "ip1" required></input> <br/>
            


                <label className="label"> Dietry Restriction</label>
                <select name="dietry" className = "ip selectarea" required value = {this.state.Preference} onChange = {this.cprefer}>
                    <option value='' disabled> Choose your preference that you cook</option>
                    <option value = "Veg" onChange = {this.cprefer}>Veg</option>
                    <option value = "Non-veg" onChange = {this.cprefer}>Non-veg</option>
                    <option value = "Both" onChange = {this.cprefer}>Both</option>
                    </select> <br/> 

               

                <label className="label"> Promises </label>                
                <input type="text"  name="promises" placeholder="eg: no ajinomoto, no food colorants, no artificial ingredients etc.." value = {this.state.Promises} onChange = {this.cpromi} onInputCapture={this.textPattern} id="promiseId" className = "ip1" ></input>
                <span id="promiseCmds" className="valid-cmds"> </span> <br/> <br/>

              
            
             <label  className="label">Upload your Kitchen photo  </label>
                 <input type="file" className="upload"></input><br/><br></br>
            




                   <label className="label" > Upload the FSSAI certificate </label>
                 <input type="file" className="upload" required ></input>

                 <div>
                      <label  className="label">Set Username </label>
                      <input type="text"  name="chefusername" value = {this.state.username} onChange = {this.cusername} onInputCapture={this.usernamePattern} id="usernameId"  className = "ipage" required></input> 
                      <span id="usernameCmds" className="valid-cmds"> </span> <br/>

                      <label  className="label">Set Password </label>
                      <input type="password"  name="chefpassword" value = {this.state.password} onChange = {this.cpassword} onInputCapture={this.passwordPattern} id="passwordId"  className = "ipage" required></input> 
                      <span id="passwordCmds" className="valid-cmds"> </span> <br/>

                      <label  className="label"> Re-enter Password </label>
                      <input type="password"  name="chefrepassword" value = {this.state.rePassword} onChange = {this.crepassword} onInputCapture={this.repasswordPattern} id="repasswordId"  className = "ipage" required></input> 
                      <span id="repasswordCmds" className="valid-cmds"> </span> <br/>
                  </div>

                  <div className="diiv"><br/>

                
                                           <b>
                          <ol>
                              <li> I certify that all information provided in this registration application is true .
                                  I understand that any false information or ommission of information may reject me from consideration of a home chef</li>
                              <br/> <li> I have read and understood the above declaration before signing this</li>
                          </ol>
 
                        <input type="checkbox"  value = {this.state.Terms} onChange = {this.cterms} required className="agreem"></input> <label> <u>I agree to the Terms and Conditions</u></label> <br/> 

                      </b>
                      <br></br>
                 
                
                  </div>
                

                      <button type="reset" onClick={this.setClean} className="butn">RESET</button>
                      <button type="submit" className="butn">SUBMIT</button>
                </div>
              </form> 
            </div>
        )
    }
}
