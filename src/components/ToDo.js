import React from 'react';
import { TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo(props) {
const tasks=props.tasks
return(
<div className="List">
  <p>
    <TextField className="inputbox" variant='standard' color="secondary" id={tasks.key} value={tasks.text} 
    onChange={ (e) => {props.setUpdate(e.target.value, tasks.key)}}
    />
    <DeleteIcon className="deletebutton" onClick={()=>props.delete(tasks.key)}/>
  </p>
</div>
)
}