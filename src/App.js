import React, { Component } from 'react';
import { ReduxForm } from './components/redux-form';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Hey!", { values });
  }

  render() {
    return <ReduxForm onSubmit={this.handleSubmit}/>;
  }  
}

export default App;
