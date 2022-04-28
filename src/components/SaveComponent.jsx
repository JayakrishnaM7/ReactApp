import React, { useState } from 'react'
function SaveComponent(){
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));
        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }
    }
    return (
        <div>
      <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
      </div>
    )
}
export default SaveComponent      