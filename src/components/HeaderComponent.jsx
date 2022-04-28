import React from "react";
import { useState } from "react";

function HeaderComponent() {
    const[values, setValues] = useState({
        todayDate: '',
    })
    const handleTodayDateInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            todayDate: event.target.value,
        }));
    };
  return (
    <div>
      <header>
        <p>Employee Contact Information Form</p>
      </header>
      Please complete the following information to ensure we maintain a current
      record of contact information for you and your emergency contacts.
      <form>
            <div>
                <label>Today’s Date:</label>
                <input type="date" name="todayDate" value={values.todayDate} onChange={handleTodayDateInputChange}/>
            </div>
      </form>
    </div>
  );
}

export default HeaderComponent;
