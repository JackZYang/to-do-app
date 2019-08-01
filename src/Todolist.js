import React from 'react';

const Todolist = (props) => (
    <ul>
      {props.itemlist.map((item, index) => <li key={index}>{item}<input type="checkbox" /></li>)}
    </ul>
  );

export default Todolist;