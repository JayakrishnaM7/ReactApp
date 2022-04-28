import React,{useState} from 'react'

function PersonalInformationComponent() {
    const [values, setValues] = useState({
        fullName: '',
        address: '',
        homePhone:'',
        cellPhone:'',
        emailAddress: '',
    });
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
            address: event.target.value,
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

    const handleEmailAddressInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            emailAddress: event.target.value,
        }));
    };

  return (
    <div>
      <header>
        <p> Personal Information</p>
      </header>
      <div>
        <form>
        <div>
          <label>Full Name:</label>
          <input placeholder="FullName" type ="text" name="fullName" value={values.fullName} onChange={handleFullNameInputChange} />
        </div>
        <div>
          <label>Address:</label>
          <input placeholder="Address" type="text" name="address" value={values.address} onChange={handleAddressInputChange}/>
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
          <input placeholder="Email Address" type="text" name="emailAddress" value={values.emailAddress} onChange={handleEmailAddressInputChange}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalInformationComponent