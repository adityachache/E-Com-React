import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

function SignIn() {
  const logInUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    // console.log(response)
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button
        type="button"
        onClick={logInUser}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sign In With Google
      </button>
      <SignUpForm/>
    </div>
  );
}

export default SignIn;
