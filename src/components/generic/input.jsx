import React from "react";
import { Input } from "reactstrap";

export default function GenericInput({
  type,
  name,
  onChange,
  value,
  className,
  place_holder,
  id,
  options
}) {
  if (type === "select") {
    return (
      <Input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className={className}
        placeHolder={place_holder}
        id={id}
      >
        {options.map(dat => (
          <option value={dat.value}>{dat.name}</option>
        ))}
      </Input>
    );
  } else {
    return (
      <Input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className={className}
        placeHolder={place_holder}
        id={id}
      />
    );
  }
}
