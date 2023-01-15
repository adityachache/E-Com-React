import { Button } from "flowbite-react";
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
        alert("Email already in use. Try loggin in instead");
      } else if (err.code === "auth/network-request-failed") {
        alert("login failed due to connection issue. Please try again");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <h2 className="my-2 font-semibold text-4xl">Don't have an account?</h2>
      <p className="mb-6 font-medium text-lg">
        Sign up with an email and password
      </p>
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

        <Button type="submit" color={"dark"}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUpForm;
