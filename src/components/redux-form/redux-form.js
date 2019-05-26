import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FieldInput } from '../common';
import { FORM_NAME } from '../../constants/forms';

class ReduxForm extends Component {
  render() {
    const {handleSubmit, reset} = this.props;
    const submit = (values) => console.log(values);

    return (
      <form onSubmit={handleSubmit}>
        <Field name="title" component={FieldInput} type="text"/>
        <Field name="text" component={FieldInput} type="text"/>
        <div>
          <button type="button" onClick={reset}>Очистить форму</button>
          <button type="submit">Отправить форму</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: FORM_NAME 
})(ReduxForm);