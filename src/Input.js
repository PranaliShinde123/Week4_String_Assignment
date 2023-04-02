import React, { useState } from "react";
import "./Input.css";

function Input(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = (event) => {
    setIsFocused(false);
    setIsFilled(event.target.value !== "");
  };

  return (
    <div className={`input-container ${isFocused ? "focused" : ""}`}>
      <label
        htmlFor={props.id}
        className={isFocused || isFilled ? "shrink" : ""}
      >
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
}

export default Input;
