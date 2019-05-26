import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';


const FieldInput = ({ input, meta, type, placeholder , ...rest}) =>  (
  <FormControl
    type={type}
    placeholder={placeholder}
    value={input.value}
    onChange={input.onChange}
    {...rest}
  />
);

FieldInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
}

export { FieldInput };