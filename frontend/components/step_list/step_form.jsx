import React from 'react';

export default class StepForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      todoId: this.props.todoId,
      done: false
    };

    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uniqueId = this.uniqueId.bind(this);
  };

  updateValue(type) {
    return (e) => this.setState({[type]: e.currentTarget.value});
  }

  uniqueId() {
    return new Date().getTime();
  }

  handleSubmit(e) {
    e.preventDefault();

    let newStep = Object.assign({}, this.state);
    newStep.id = this.uniqueId();
    this.props.receiveStep(newStep);

    this.setState({
      title: '',
      body: '',
      todoId: this.props.todoId,
      done: false
    });
  }

  render() {
    return(
      <div className='step-form'>
        <h4 className='step-form-header'>Add a New Step</h4>
        <label className='form-label' >Title:
          <input type='text' 
            className='form-text-input'
            placeholder='step1' 
            value={this.state.title}
            onChange={this.updateValue('title')}>
            </input>
        </label>
        <label className='form-label' >Body:
          <input type='text' 
            className='form-text-input'
            placeholder='do the first thing'
            value={this.state.body}
            onChange={this.updateValue('body')}></input>
        </label>
        <button type='submit'
          className='form-button'
          onClick={this.handleSubmit}>Add Step</button>
      </div>
    )
  }
};