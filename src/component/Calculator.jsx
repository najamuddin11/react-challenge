import React, { useState } from "react";
import CalculatorRow from "./CalculatorRow";

const Calculator = () => {
  const [rows, setRows] = useState([]);

  const onRowValueChange = (index, field, value) => {
    setRows((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  };

  const onToggleRow = (index) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === index ? { ...row, enabled: !row.enabled } : row
      )
    );
  };

  const onRemoveRow = (index) => {
    setRows((prev) => prev.filter((item, i) => i !== index));
  };

  const calculateTotal = () => {
    let sum = 0;

    rows.forEach((row) => {
      if (row.enabled && row.value !== "") {
        sum += row.sign === "+" ? parseInt(row.value) : -parseInt(row.value);
      }
    });
    return sum;
  };

  const onAddNewRow = () => {
    setRows((prev) => [...prev, { sign: "+", value: 0, enabled: true }]);
  };

  return (
    <div>
      <h2>Najam's React Calculator</h2>
      <button onClick={onAddNewRow}>Add Row</button>
      <ul>
        {rows.map((row, index) => (
          <li key={index}>
            <CalculatorRow
              row={row}
              onToggle={() => onToggleRow(index)}
              onValueChange={(field, value) =>
                onRowValueChange(index, field, value)
              }
              onRemove={() => onRemoveRow(index)}
            />
          </li>
        ))}
      </ul>
      <div>
        <div>
          {" "}
          <b>Total: {calculateTotal()}</b>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
