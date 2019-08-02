import React from 'react';

const ToDoList = (props) => (
    <ul>
      {props.itemlist.map((item, index) => 
      <li key={index}>
        {item}
        <button type="button" onClick={props.handleDelete.bind(this, index)}>Delete</button>
      </li>)}
    </ul>
  );

export default ToDoList;