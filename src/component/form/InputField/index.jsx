import React from 'react';
import styles from './inputfield.module.css'
const InputField = (props) => {
    const { value, onChange, disabled } = props;
    return(

        <input className={styles.input_number} type="number" value={value} onChange={onChange} disabled={disabled} />
    )
}
   

export default InputField;