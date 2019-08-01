import React from 'react';
import './App.css';
import Todolist from './Todolist';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      itemlist: []
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      itemlist: [...this.state.itemlist, this.state.input],
      input: ''
    });
  }

  render() {
    return (
      <div>
        <h1>To do:</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add:<br />
          </label>
          <input type="text" value={this.state.input} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
        <Todolist itemlist={this.state.itemlist} />
      </div>
    );
  }
}

export default Todo;
