import React from "react";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";

function Authentication() {
  return (
    <>
      <div className="auth-container grid lg:grid-cols-2 lg:gap-40 md:gap-20 sm:gap-20 p-10 mt-16 mx-auto">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
}

export default Authentication;
