import React from "react";
import InputField from "./form/InputField";
import SelectField from "./form/SelectField";

const CalculatorRow = ({ row, onToggle, onValueChange, onRemove }) => (
  <div>
    <SelectField
      value={row.sign}
      onChange={(e) => onValueChange("sign", e.target.value)}
    />
    <InputField
      value={row.value}
      onChange={(e) => onValueChange("value", e.target.value)}
      disabled={!row.enabled}
    />
    <button className="btn" onClick={onToggle}>
      {row.enabled ? "Disable" : "Enable"}
    </button>
    <button className="btn" onClick={onRemove}>
      Remove
    </button>
  </div>
);

export default CalculatorRow;
