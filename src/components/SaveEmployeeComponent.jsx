import React, { Component, useState } from "react";
import EmployeeService from '../services/EmployeeService';
class SaveEmployeeComponent extends Component{
  constructor(props) {
    super(props)
    this.state = {
       
       // id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        emailId: ''
    }
    this.SaveEmployeeComponent=this.saveEmployee.bind(this);
}
  saveEmployee = (e) => {
    let employee = {firstName: this.state.firstName, lastName: this.state.lastName,
       emailId: this.state.emailId};
    console.log('employee => ' + JSON.stringify(employee));
    if(this.state.id === '_add'){
      
      EmployeeService.createEmployee(employee).then(res =>{
          this.props.history.push('/employees');
      });
  }
  }
   
    render() {
  return (
    <div>
      <header>
        <p></p>
      </header>
      <div>
        <form>
        <div>
        <button className="btn btn-success" onClick={SaveEmployeeComponent}>Save</button>
           </div>
        </form>
      </div>
    </div>
  );
}
}

export default SaveEmployeeComponent;