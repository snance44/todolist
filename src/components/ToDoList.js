import React, { Component } from 'react';
import Todo from './ToDo';

export default function TodoList(props){
  const tasks=props.tasks;
  const listItems = tasks.map(item=>{
    return (
    <div className="list" key={item.key}>
      <p>
        <Todo date={props.date} tasks={item} delete={props.deleteItem} setUpdate = {props.setUpdate}/>
      </p>
    </div>
    )
  })
  return(
    <div>
      {listItems}
    </div>
  )
}