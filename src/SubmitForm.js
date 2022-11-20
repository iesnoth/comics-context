import React from "react";
import RequestFormButton from './RequestFormButton'

export default function SubmitForm() {
  const inputStyling={
    webkitTextStroke: "1px lightgrey",
    margin: 3,
    fontWeight: 800
    }
  return (
    <div style={{display: "flex"}}>
      <form style={{display: "inline-block"}}>
        <label style={inputStyling}>
          Name of Comic:
          <input type="text" />
        </label>
        <label style={inputStyling}>
          Year of Release:
          <input type="text" />
        </label>
        <label style={inputStyling}>
          Your Email:
          <input type="text" />
        </label>

        <RequestFormButton />
      
      </form> 
    </div>
  );
}
