import React from "react";
import Checkbox from "./Checkbox";
import {
  useCheck,
  useLocationCheck,
  useRadioValue,
  useSetRadioValue,
} from "../context/InputContext";

function Filter() {
  const setRadioValue = useSetRadioValue();
  const setChecked = useLocationCheck();
  const checked = useCheck();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setRadioValue(e.target.value);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
    setRadioValue("");
  };

  return (
    <div className="navbar">
      <div className="radio-buttons-container">
        <h2 className="title-header">Location:</h2>
        <Checkbox
          label=""
          name="location"
          value="location"
          onChange={() => handleCheckboxChange()}
        />
      </div>
      <div className="radio-buttons-container">
        <h2 className="title-header">Status:</h2>
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              name="status"
              value="alive"
              onChange={handleRadioChange}
            />
            Alive
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="dead"
              onChange={handleRadioChange}
            />
            Dead
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="unknown"
              onChange={handleRadioChange}
            />
            Unknown
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
