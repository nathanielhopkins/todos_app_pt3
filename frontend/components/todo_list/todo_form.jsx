import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      title: "",
      body: "",
      done: false,
      newTag: "",
      tags: []
    }

    this.deleteTag = this.deleteTag.bind(this);
    this.updateTags = this.updateTags.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  deleteTag(e) {
    e.preventDefault();

    let idx = e.currentTarget.getAttribute('refkey');
    let newTags = Array.from(this.state.tags);
    newTags.splice(idx,1);
    this.setState({tags: newTags});
  }

  updateValue(type) {
    return (e) => this.setState({ [type]: e.currentTarget.value });
  }

  updateTags(event) {
    let newTags = Array.from(this.state.tags);
    newTags.push(this.state.newTag);
    this.setState({ newTag: '' });
    this.setState({ tags: newTags });
  }

  submitForm(event) {
    event.preventDefault();

    let todo = Object.assign({}, this.state);
    this.props.createTodo({todo}).then(
    () => this.setState({
      title: "",
      body: "",
      newTag: "",
      tags: []
    }));
  }

  render() {
    return(
      <div className='todo-form'>
        <h2 className='todo-form-header'>New Todo</h2>
        <div className='form-errors'>
          {this.props.errors.map((err,idx) => <p key={idx} className="todo-form-error">{err}</p>)}
        </div>
        <label className='form-label'>Title:
        <input type='text' 
          className='form-text-input'
          id='title' 
          placeholder='pet the dog' 
          value={this.state.title}
          onChange={this.updateValue('title')}
          /></label>

        <label className='form-label' >Body:
        <input type='text' 
          className='form-text-input'
          id='body' 
          placeholder="because he's a good boy" 
          value={this.state.body}
          onChange={this.updateValue('body')}
          /></label>

        <div className='tags'>
        <input type='text' 
          className='form-text-input'
          placeholder='#tag'
          value={this.state.newTag}
          onChange={this.updateValue('newTag')}
          ></input>

        <input type='button' 
          className='form-button'
          value='Add Tag' 
          placeholder='Add a new tag'
          onClick={this.updateTags} 
          />
        </div>

        <div className='tag-buttons'>
          {this.state.tags.map((tag, idx) => 
          <input 
            type='button'
            className='tag-button'
            value={tag}
            key={idx}
            refkey={idx}
            onClick={this.deleteTag}>
            </input>)}
        </div>

        <input type='submit'
        className='form-button'
        value='Create Todo!' 
        onClick={this.submitForm}
        />
      </div>
    );
  }
}