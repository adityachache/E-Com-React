import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import { Button } from "flowbite-react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInUserAuthWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      // console.log(error)
      switch (error.code) {
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        case "auth/wrong-password":
          alert("password entered is incorrect");
          break;
        case "auth/network-request-failed/":
          alert("login failed due to connection issue. Please try again");
          break;
        default:
          console.log(error);
      }
    }
  };

  const logInUser = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      <h2 className="my-2 font-semibold text-4xl">Already have an account?</h2>
      <p className="mb-6 font-medium text-lg">
        Sign in with your email and password
      </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
        <div className="grid grid-cols-2 gap-10">
          <Button type="submit" color={"dark"}>
            Sign In
          </Button>

          <Button size={"md"} type="button" onClick={logInUser}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
