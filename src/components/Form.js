import React from "react";
import TodoList from "./ToDoList";
import { TextField, Container, Paper } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
          date: new Date().toLocaleString(),
            array:[],
            task:{
                text:'',
                key:''
            }
        }
    
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onDelete=this.onDelete.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        
      }
      onChange(e){
          this.setState({
            name:e.target.value,
              task:{
                  text:e.target.value,
                  key:Date.now()
              }
          })
         
      }
    onSubmit(e){
        e.preventDefault();
        const newTask=this.state.task;
        if(newTask.text !==""){
            const tasks = [...this.state.array, newTask];
            this.setState({
                array:tasks,
                task:{
                    text:'',
                    key:''
                }
            })
        }
    }
    setUpdate(text,key){
        const items = this.state.array;
        items.map(item=>{      
          if(item.key === key){
            item.text= text;
          }
        })
        this.setState({
          array: items
        })
      }  
    onDelete(key){
        const filteredItems= this.state.array.filter(item =>
          item.key!==key);
        this.setState({
          array: filteredItems
        })

      }

    render(){
       
        return(
          <div>
            <Container>
              <Paper className="todolist" elevation={6}>
                <h1 className="title">Let's get this done!</h1>
                
                  <form id="to-do-form" onSubmit={this.onSubmit}>
                  <TextField className="inputbox" label="Enter Task Here" variant="standard" color="secondary"
                  value={this.state.task.text}
                  onChange={this.onChange}
                  />
                  <button className="addbutton"><AddIcon/></button>
                </form>
                <hr />
                <div className="itemlist">
                  <TodoList tasks={this.state.array} 
                  deleteItem={this.onDelete}
                  setUpdate={this.setUpdate}
                  date={this.state.date}
                  />
                </div>
                </Paper>
              </Container>
            </div>
        )
    }
}
export default Form;    