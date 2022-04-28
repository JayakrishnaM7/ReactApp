import { render } from "@testing-library/react";
import React, { useState } from "react";

function JobInformation() {
    const [values, setValues] = useState({
        title: '',
        workphone: '',
        emailAddress: '',
    });
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

    const handleEmailAddressInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            emailAddress: event.target.value,
        }))
    }
  return (
    
    <div>
      <header>
        <p>JobInformation</p>
      </header>
      <div>
        <form>
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
        </form>
      </div>
    </div>
  );
}

export default JobInformation;
