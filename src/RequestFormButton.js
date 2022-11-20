import React, { useContext } from "react";
import StylesContext from "./StylesContext";

export default function RequestFormButton() {
  //useContext function stores data that is passed through Context from App.js into a variable
  //took out the React. and it still works. Possibly because React was imported, so doesn't
  //need to be invoked?
  const buttonStyling = useContext(StylesContext)
  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
      <input type="submit" value="Submit" style={buttonStyling}/>

    </div>
  );
}
