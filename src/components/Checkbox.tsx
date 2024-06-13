import React from "react";

interface checkboxProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ label, name, value, onChange }: checkboxProps) {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          name={name}
          value={value}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
