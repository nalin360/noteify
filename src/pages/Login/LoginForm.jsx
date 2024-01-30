import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import Inputs from '../../components/Form/Inputs';
import { FORM_LABEL_EMAIL , FORM_LABEL_PASSWORD } from '../../data/Constants';

function LoginForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  };
  const handleButtonClick = () => {
    console.log('Submit button clicked!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <Inputs
          placeholder={FORM_LABEL_EMAIL }
          type={"email"}
          value={name}
          onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Password:
        <Inputs
          placeholder={FORM_LABEL_PASSWORD}
          type={FORM_LABEL_PASSWORD}
          value={FORM_LABEL_PASSWORD}
          onChange={(event) => setEmail(event.target.value)} />
      </label>
      <Button label="Submit" onClick={handleButtonClick} />
    </form>
  );
}

export default LoginForm;