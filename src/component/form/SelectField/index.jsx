import React from "react";
import styles from "./selectfield.module.css";

const SelectField = (props) => {
  const { value, onChange } = props;
  return (
    <select className={styles.input_select} value={value} onChange={onChange}>
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
  );
};

export default SelectField;
