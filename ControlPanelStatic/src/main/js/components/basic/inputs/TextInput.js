import React from 'react';
import PropTypes from 'prop-types';
import InputLabel, {styles} from "@material-ui/core/es/InputLabel/InputLabel";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import Input from "@material-ui/core/es/Input/Input";

export const TextInput = (props) => {

    const {label, value, onChange, type} = props;

    return <FormControl className={styles.formControl}>
        <InputLabel>{label}</InputLabel>
        <Input value={value}
               disabled={onChange === undefined}
               onChange={onChange}
               type={type}/>
    </FormControl>
};

TextInput.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.oneOf(["text", "password"]),
};

TextInput.defaultProps = {
    value: "",
    label: "",
    type: "text",
};