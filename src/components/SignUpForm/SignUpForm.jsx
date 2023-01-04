import { Alert, Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match.");
      return;
    }
    try {
      const response = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      //   console.log(response)
      await createUserDocumentFromAuth(response.user, {
        displayName,
      });
      setFormField(defaultFormFields);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("email is already in use.");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <h2>Don't have an account?</h2>
      <p>Sign up with Email and Password</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          required={true}
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label={"Email"}
          type="email"
          required={true}
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label={"Password"}
          type="password"
          required={true}
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label={"Confirm password"}
          type="password"
          required={true}
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
