import React from 'react';
import './App.css';
import ToDoList from './ToDoList';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      itemlist: []
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (/\S/.test(this.state.input)) {
      this.setState({
        itemlist: [...this.state.itemlist, this.state.input]
      });
    }
    this.setState({
      input: ''
    })
  }

  handleDelete = (indexToDelete) => {
    this.state.itemlist.splice(indexToDelete, 1);
    this.setState({
      itemlist: this.state.itemlist,
    });
  }

  render() {
    return (
      <div className="ToDoApp">
        <h1>To do:</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="form-control" value={this.state.input} onChange={this.handleChange} />
          <button className="btn btn-success">Submit</button>
        </form>
        <ToDoList itemlist={this.state.itemlist} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default ToDo;
