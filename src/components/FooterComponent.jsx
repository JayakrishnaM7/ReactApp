import React, { useState } from 'react'

function FooterComponent() {
    const[values, setValues] = useState({
        completedForm: '',
    })
  return (
    <div>
        <form>
            <label>Please return the completed form to:</label>
            <input type="text" value={values.completedForm} />
        </form>
    </div>
  )
}

export default FooterComponent