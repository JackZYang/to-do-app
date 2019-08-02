import React from 'react';

const ToDoList = (props) => (
    <ul className="ToDoList">
      {props.itemlist.map((item, index) => 
      <li key={index}>
        {item}
        <button className="btn btn-danger" onClick={props.handleDelete.bind(this, index)}>Delete</button>
      </li>)}
    </ul>
  );

export default ToDoList;