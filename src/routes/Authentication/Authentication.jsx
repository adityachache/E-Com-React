import React from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";

function Authentication() {
  return (
    <>
      <div className="auth-container grid lg:grid-cols-2 grid-cols-1 lg:gap-40 gap-20 p-10 mt-16 mx-auto">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
}

export default Authentication;
