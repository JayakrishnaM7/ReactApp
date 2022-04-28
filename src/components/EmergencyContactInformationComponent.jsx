import React,{useState} from 'react'
function EmergencyContactInformationComponent() {
    const [values, setValues] = useState({
        first: '',
        last:'',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        primaryPhone:'',
        alternatePhone:'',
        relationship: '',
    });
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
    
    return (
        <div>
          <header>
            <p> EmergencyContactInformation</p>
          </header>
          
          <form>
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
        </form>
         
    </div>
              )
              }

export default EmergencyContactInformationComponent