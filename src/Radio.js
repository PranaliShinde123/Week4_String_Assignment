import React from "react";
import "./RadioGroup.css";

function RadioGroup(props) {
  return (
    <div className="radio-group">
      {props.options.map((option) => (
        <RadioButton
          key={option.value}
          value={option.value}
          label={option.label}
          name={props.name}
          checked={props.value === option.value}
          onChange={props.onChange}
        />
      ))}
    </div>
  );
}

function RadioButton(props) {
  return (
    <label className="radio-button">
      <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      <span>{props.label}</span>
    </label>
  );
}

export { RadioGroup, RadioButton };
