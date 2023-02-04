import { Label, TextInput } from "flowbite-react";
import React from "react";

function FormInput({ label, ...otherProps }) {
  return (
    <div>
      <div>
        <div className="mb-2 block">
          <Label value={label} />
        </div>
        <TextInput {...otherProps} />
      </div>
    </div>
  );
}

export default FormInput;
