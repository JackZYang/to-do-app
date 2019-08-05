import React from 'react';

const ToDoList = ({itemlist, handleDelete}) => (
    <ul className="ToDoList">
      {itemlist.map((item, index) => 
        <li key={index}>
        {item}
        <button className="btn btn-danger" onClick={handleDelete.bind(this, index)}>Delete</button>
      </li>
      )}
    </ul>
  );

export default ToDoList;