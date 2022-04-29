import { useState } from "react";
import React from 'react'
import EmployeeService from "../services/EmployeeService";


function CreateEmployee() {
    
        const mystyle = {
          color: "white",
          backgroundColor: "Red",
          padding: "2px",
          flex:1,
          fontFamily: "Arial",
          textAlign: 'center',
          marginRight:10,
          marginLeft:10
          
        };
        const mystyleText = {
            color: 'black',
            marginTop:5,
            marginBottam:5,
            marginLeft:25
        }
        const mystyleEmail = {
            color: 'black',
            marginTop:5,
            marginBottam:5,
            marginLeft:25
        }
        const mystyleWorkPhone = {
            color: 'black',
            marginTop:5,
            marginBottam:5,
            marginLeft:25
        }
        const mystyleFullName = {
            color: 'black',
            marginTop:5,
            marginBottam:5,
            marginLeft:25
        }
        const mystyleAddress = {
            color: 'black',
            marginTop:5,
            marginBottam:5,
            marginLeft:25
        }
        const mystyleHomePhone = {
            color: 'black',
            marginTop:5,
            marginBottam:5,
            marginLeft:25
        }
        const mystyleCellPhone = {
            color: 'black',
            marginTop:5,
            marginBottam:5,
            marginLeft:25
        }
        const mystyleSave = {
                textAlign: 'center',
                marginTop:5,
                marginBottam:5,
                marginLeft:15,
                fontcolor: "Red"
            }
        
   
    const[values, setValues] = useState({
        todayDate: '',
        title: '',
        workphone: '',
        emailAddress: '',
        fullName: '',
        personalAddress: '',
        homePhone:'',
        cellPhone:'',
        personalEmailAddress: '',
        first: '',
        last:'',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        primaryPhone:'',
        alternatePhone:'',
        relationship: '',
        ecifirst: '',
        ecilast:'',
        eciaddress: '',
        ecicity: '',
        ecistate: '',
        ecizipcode: '',
        eciprimaryPhone:'',
        ecialternatePhone:'',
        ecirelationship: ''
        
    })
    const handleTodayDateInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            todayDate: event.target.value,
        }));
    };
    const handleFullNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            fullName: event.target.value,
        }));
    };

    const handleAddressInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            personalAddress: event.target.value,
        }));
    };

    const handleHomePhoneInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            homePhone: event.target.value,
        }));
    };

    const handleCellPhoneInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            cellPhone: event.target.value,
        }));
    };
    const handleTitleInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            title: event.target.value,
        }));
    };

    const handleWorkPhoneInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            workphone: event.target.value,
        }))
    }
    const handlePersonalEmailAddressInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            personalEmailAddress: event.target.value,
        }));
    };
    const handleEmailAddressInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            emailAddress: event.target.value,
        }));
    };
    const handleFirstInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            first: event.target.value,
        }));
    };
    const handleLastInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            last: event.target.value,
        }));
    };
    const handleaddressInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            address: event.target.value,
        }));
    };
    const handleCityInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            city: event.target.value,
        }));
    };
    const handleprimaryPhoneInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            primaryPhone: event.target.value,
        }));
    };
    const handleStateInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            state: event.target.value,
        }));
    };
    const handleZipcodeInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            zipcode: event.target.value,
        }));
    };
    const handlealternatePhoneInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            alternatePhone: event.target.value,
        }));
    };
    const handlerelationshipInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            relationship: event.target.value,
        }));
    };
    const handleFirstInputChangeConatctTwo = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            ecifirst: event.target.value,
        }));
    };
    const handleLastInputChangeConatctTwo = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            ecilast: event.target.value,
        }));
    };
    const handleaddressInputChangeConatctTwo = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            eciaddress: event.target.value,
        }));
    };
    const handleCityInputChangeConatctTwo = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            ecicity: event.target.value,
        }));
    };
    const handleprimaryPhoneInputChangeConatctTwo = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            eciprimaryPhone: event.target.value,
        }));
    };
    const handleStateInputChangeConatctTwo = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            ecistate: event.target.value,
        }));
    };
    const handleZipcodeInputChangeConatctTwo = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            ecizipcode: event.target.value,
        }));
    };
    const handlealternatePhoneInputChangeConatctTwo = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            ecialternatePhone: event.target.value,
        }));
    };
    const handlerelationshipInputChangeConatctTwo = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            ecirelationship: event.target.value,
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let employee={

            todayDate: values.todayDate,
         title: values.title,
        workphone:values.workphone,
        emailAddress: values.emailAddress,
        fullName: values.fullName,
        personalAddress: values.personalAddress,
        homePhone:values.homePhone,
        cellPhone:values.cellPhone,
        personalEmailAddress: values.personalEmailAddress,
        first: values.first,
        last:values.last,
        address: values.address,
        city:values.city,
        state: values.state,
        zipcode: values.zipcode,
        primaryPhone:values.primaryPhone,
        alternatePhone:values.alternatePhone,
        relationship: values.relationship,
        ecifirst: values.ecifirst,
        ecilast:values.ecilast,
        eciaddress: values.eciaddress,
        ecicity:values.ecicity,
        ecistate: values.ecistate,
        ecizipcode: values.ecizipcode,
        eciprimaryPhone:values.eciprimaryPhone,
        ecialternatePhone:values.ecialternatePhone,
        ecirelationship: values.ecirelationship,
        
        }
        console.log('employee => ' + JSON.stringify(employee));
        
          EmployeeService.createEmployee(employee).then(res =>{
              this.props.history.push('/employees');
          });
    
      }
  return (
    <div>
     <header>
     <h1 style={{color: "black"}}>Employee Contact Information Form</h1>
      </header>
      Please complete the following information to ensure we maintain a current
      record of contact information for you and your emergency contacts.
      
      <form onSubmit={e => {handleSubmit(e)}}>
            <div>
                <label style={mystyleText}>Today’s Date:</label>
                <input type="date"  name="todayDate" value={values.todayDate} onChange={handleTodayDateInputChange}/>
            </div>
            <div>
      <header>
        <h4 style={mystyle}>JobInformation</h4>
      </header>
      <div>
        
        <div>
          <label style={mystyleText}>Title/Position :</label>
          
          <input placeholder="Title"  
          style={{marginLeft:34,borderLeft:0,
          borderRight:0,borderTop:0,backgroundColor:"lightcyan",width: "1000px"}} type ="text" name="title" value={values.title} onChange={handleTitleInputChange} />
          <br/>
          <br/>
        </div>
        <div>
          <label style={{marginLeft:25}}>Work Phone  :</label>
         
          <input placeholder="Work Phone"style={{marginLeft:38,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'500px'}}type="number" name="workphone" value={values.workphone} onChange={handleWorkPhoneInputChange}/>
          <br/>
          <br/>
         
          <label style={mystyleEmail}>Email Address  :      </label>
          <input placeholder="Email Address" style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'500px'}} type="text" name="emailAddress" value={values.emailAddress} onChange={handleEmailAddressInputChange}/>
          <br/>
          <br/>
          </div>
        
      </div>
    </div>
    <div>
      <header>
       
        <h4 style={mystyle}>Personal Information</h4>
      </header>
      <div>
       
        <div>
          <label style={{'marginLeft':60}}>Full Name  :</label>
          <input placeholder="FullName"
           style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'1000px'}} type ="text" name="fullName" value={values.fullName} onChange={handleFullNameInputChange} />
          <br/>
          <br/>
        </div>
        <div>
          <label style={{marginLeft:72}}>Address  :</label>
          <input placeholder="Address" style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}}type="text" name="personalAddress" value={values.personalAddress} onChange={handleAddressInputChange}/>
          <br/>
          <br/>
          </div>
          <div>
          <label style={{marginLeft:42}}>Home Phone  :</label>
          <input placeholder="Home Phone" style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type="number" name="homePhone" value={values.homePhone} onChange={handleHomePhoneInputChange}/>
          <br/>
          <br/>
          </div>
          <div>
          <label style={{marginLeft:55}}>Cell Phone  :</label>
          <input placeholder="Cell Phone" style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type="number" name="cellPhone" value={values.cellPhone} onChange={handleCellPhoneInputChange}/>
          <br/>
          <br/>
          </div>
          <div>
          <label style={{marginLeft:34}}>Email Address  :</label>
          <input placeholder="Email Address" style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type="text" name="personalEmailAddress" value={values.personalEmailAddress} onChange={handlePersonalEmailAddressInputChange}/>
          <br/>
          <br/>
          </div>
       
      </div>
    </div>
    <div>
          <header>
           
            <h4 style={mystyle}>EmergencyContactInformation</h4>
          </header>
          
         
        <div>
          <label style={mystyleText}>#1 contact:</label>
          <input placeholder="First" style={{marginLeft:50,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}}  type ="text" name="Contact" value={values.first} onChange={handleFirstInputChange} />
          
          <input placeholder="Last" style={{marginLeft:70,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type ="text" name="Contact" value={values.last} onChange={handleLastInputChange} />
          <br/>
          <br/>
        </div>

        <div>
          <label style={mystyleText}>Address  :</label>

            
          <input placeholder="city" style={{marginLeft:65,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'300px'}} type="text" name="city" value={values.city} onChange={handleCityInputChange}/>
          <input placeholder="state" style={{marginLeft:10,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'300px'}}  type="text" name="state" value={values.state} onChange={handleStateInputChange}/>
          <input placeholder="zipcode" style={{marginLeft:10,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'300px'}}  type="text" name="zipcode" value={values.zipcode} onChange={handleZipcodeInputChange}/>
          <br/>
          <br/>
          </div>

          <div>
          <label style={mystyleText}>primaryPhone  :</label>
          <input placeholder="primaryPhone" style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type="text" name="primaryPhone" value={values.primaryPhone} onChange={handleprimaryPhoneInputChange}/>
          <br/>
          <br/>
          </div>

          <div>
          <label style={mystyleText}>alternatePhone  :</label>
          <input placeholder="alternatePhone" style={{marginLeft:20,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type="text" name="alternatePhone" value={values.alternatePhone} onChange={handlealternatePhoneInputChange}/>
          <br/>
          <br/>
          </div>

          <div>
          <label style={{marginLeft:42}}>relationship  :</label>
          <input placeholder="relationship" style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type="text" name="relationship" value={values.relationship} onChange={handlerelationshipInputChange}/>
          <br/>
          <br/>
          </div>
       
         
    </div>
    <div>
          <label style={mystyleText}>#2 contact:</label>
          <input placeholder="First"style={{marginLeft:50,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type ="text" name="Contact" value={values.ecifirst} onChange={handleFirstInputChangeConatctTwo} />
          <input placeholder="Last" style={{marginLeft:10,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type ="text" name="Contact" value={values.ecilast} onChange={handleLastInputChangeConatctTwo} />
          <br/>
          <br/>
        </div>
        <div>
          <label style={mystyleText}>Address  :</label>

            
          <input placeholder="city" style={{marginLeft:60,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'300px'}}  type="text" name="city" value={values.ecicity} onChange={handleCityInputChangeConatctTwo}/>
          <input placeholder="state" style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'300px'}}type="text" name="state" value={values.ecistate} onChange={handleStateInputChangeConatctTwo}/>
          <input placeholder="zipcode" style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'300px'}} type="text" name="zipcode" value={values.ecizipcode} onChange={handleZipcodeInputChangeConatctTwo}/>
          <br/>
          <br/>
          </div>

          <div>
          <label style={{marginLeft:15}}>primaryPhone  :</label>
          <input placeholder="primaryPhone"style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type="text" name="primaryPhone" value={values.eciprimaryPhone} onChange={handleprimaryPhoneInputChangeConatctTwo}/>
          <br/>
          <br/>
          </div>

          <div>
          <label style={{marginLeft:5}}>alternatePhone  :</label>
          <input placeholder="alternatePhone" style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type="text" name="alternatePhone" value={values.ecialternatePhone} onChange={handlealternatePhoneInputChangeConatctTwo}/>
          <br/>
          <br/>
          </div>

          <div>
          <label style={{marginLeft:30}}>relationship  :</label>
          <input placeholder="relationship" style={{marginLeft:25,borderLeft:0,borderRight:0,borderTop:0,backgroundColor:"lightcyan",width:'400px'}} type="text" name="relationship" value={values.ecirelationship} onChange={handlerelationshipInputChangeConatctTwo}/>
          <br/>
          <br/>
          </div>
        
    <div style={mystyleSave}>
      
       
       <input type='submit'  value='SAVE' />
       
           </div>
      </form> 
    </div>
  )
}

export default CreateEmployee
