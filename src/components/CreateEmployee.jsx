import { useState } from "react";
import React from 'react'
import EmployeeService from "../services/EmployeeService";

function CreateEmployee() {
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
        }
        console.log('employee => ' + JSON.stringify(employee));
        
          EmployeeService.createEmployee(employee).then(res =>{
              this.props.history.push('/employees');
          });
    
      }
  return (
    <div>
     <header>
        <p>Employee Contact Information Form</p>
      </header>
      Please complete the following information to ensure we maintain a current
      record of contact information for you and your emergency contacts.
      
      <form onSubmit={e => {handleSubmit(e)}}>
            <div>
                <label>Today’s Date:</label>
                <input type="date" name="todayDate" value={values.todayDate} onChange={handleTodayDateInputChange}/>
            </div>
            <div>
      <header>
        <p>JobInformation</p>
      </header>
      <div>
        
        <div>
          <label>Title/Position:</label>
          <input placeholder="Title" type ="text" name="title" value={values.title} onChange={handleTitleInputChange} />
        </div>
        <div>
          <label>Work Phone:</label>
          <input placeholder="Work Phone" type="number" name="workphone" value={values.workphone} onChange={handleWorkPhoneInputChange}/>
          </div><div>
          <label>Email Address:</label>
          <input placeholder="Email Address" type="text" name="emailAddress" value={values.emailAddress} onChange={handleEmailAddressInputChange}/>
          </div>
        
      </div>
    </div>
    <div>
      <header>
        <p> Personal Information</p>
      </header>
      <div>
       
        <div>
          <label>Full Name:</label>
          <input placeholder="FullName" type ="text" name="fullName" value={values.fullName} onChange={handleFullNameInputChange} />
        </div>
        <div>
          <label>Address:</label>
          <input placeholder="Address" type="text" name="personalAddress" value={values.personalAddress} onChange={handleAddressInputChange}/>
          </div>
          <div>
          <label>Home Phone:</label>
          <input placeholder="Home Phone" type="number" name="homePhone" value={values.homePhone} onChange={handleHomePhoneInputChange}/>
          </div>
          <div>
          <label>Cell Phone:</label>
          <input placeholder="Cell Phone" type="number" name="cellPhone" value={values.cellPhone} onChange={handleCellPhoneInputChange}/>
          </div>
          <div>
          <label>Email Address:</label>
          <input placeholder="Email Address" type="text" name="personalEmailAddress" value={values.personalEmailAddress} onChange={handlePersonalEmailAddressInputChange}/>
          </div>
       
      </div>
    </div>
    <div>
          <header>
            <p> EmergencyContactInformation</p>
          </header>
          
         
        <div>
          <label>#1 contact:</label>
          <input placeholder="First" type ="text" name="Contact" value={values.first} onChange={handleFirstInputChange} />
          <input placeholder="Last" type ="text" name="Contact" value={values.last} onChange={handleLastInputChange} />
        </div>

        <div>
          <label>Address:</label>

            
          <input placeholder="city" type="text" name="city" value={values.city} onChange={handleCityInputChange}/>
          <input placeholder="state" type="text" name="state" value={values.state} onChange={handleStateInputChange}/>
          <input placeholder="zipcode" type="text" name="zipcode" value={values.zipcode} onChange={handleZipcodeInputChange}/>
          </div>

          <div>
          <label>primaryPhone:</label>
          <input placeholder="primaryPhone" type="text" name="primaryPhone" value={values.primaryPhone} onChange={handleprimaryPhoneInputChange}/>
          </div>

          <div>
          <label>alternatePhone:</label>
          <input placeholder="alternatePhone" type="text" name="alternatePhone" value={values.alternatePhone} onChange={handlealternatePhoneInputChange}/>
          </div>

          <div>
          <label>relationship:</label>
          <input placeholder="relationship" type="text" name="relationship" value={values.relationship} onChange={handlerelationshipInputChange}/>
          </div>
       
         
    </div>
    <div>
      
       
       <input type='submit' value='SAVE' />
       
           </div>
      </form> 
    </div>
  )
}

export default CreateEmployee
