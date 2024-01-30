import React from 'react'
import Inputs from '../../components/Form/Inputs'
import Button from '../../components/Form/Button'
import { FORM_LABEL_EMAIL, SUBMIT_BUTTON_LABEL } from '../../data/Constants';

function SignUpForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Inputs
          placeholder={FORM_LABEL_EMAIL}
          type={FORM_LABEL_EMAIL}
          value={FORM_LABEL_EMAIL}
          onChange={(event) => setName(event.target.value)} />

        <Inputs
          placeholder={FORM_LABEL_PASSWORD}
          type={FORM_LABEL_PASSWORD}
          value={FORM_LABEL_PASSWORD}
          onChange={(event) => setName(event.target.value)} />
        <Inputs
          placeholder={"Confirm password "}
          type={FORM_LABEL_PASSWORD}
          value={FORM_LABEL_PASSWORD}
          onChange={(event) => setName(event.target.value)} />

        <br />
        <Button type={SUBMIT_BUTTON_LABEL}/>
      </form>
    </div>
  )
}

export default SignUpForm