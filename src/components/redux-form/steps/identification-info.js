import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FieldInput } from '../../common';
import { FORM_NAME } from '../../../constants/forms';

class IdentificationInfo extends Component {
  render() {
    const { handleSubmit, reset } = this.props;

    console.log(this.props)
 
    return (
      <form onSubmit={handleSubmit}>
        <Field name="address" component={FieldInput} type="text"/>
        <Field name="name" component={FieldInput} type="text"/>
        <Field name="description" component={FieldInput} type="text"/>
        <div>
          <button type="button" onClick={reset}>Reset</button>
          <button type="submit">Next</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: FORM_NAME,
  forceUnregisterOnUnmount: true,
  destroyOnUnmount: false 
})(IdentificationInfo);