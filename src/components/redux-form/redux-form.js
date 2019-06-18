import React, { Component } from 'react';
import IdentificationInfo from './steps/identification-info';

class ReduxForm extends Component {

  constructor(props) {
    super(props)
    this.nextStep = this.nextStep.bind(this)
    this.prevStep = this.prevStep.bind(this)
    this.renderIdentificationInfo = this.renderIdentificationInfo.bind(this);
    this.state = {
      step: 1
    }

    this.stepRendererById = {
      1: this.renderIdentificationInfo,
      2: () => null
    };
  }

  nextStep() {
    this.setState({ step: this.state.step + 1 })
  }

  prevStep() {
    this.setState({ step: this.state.step - 1 })
  }

  renderIdentificationInfo() {
    return <IdentificationInfo onSubmit={this.nextStep}/>;
  }

  render() {
    const { step } = this.state;

    return this.stepRendererById[step]();
  }
}

export default ReduxForm;
