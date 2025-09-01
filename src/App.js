import logo from './logo.svg';
import './App.css';
import Header from './Header';
 import { useState } from 'react';
//  import btnModule from "./Button.module.css"
// import { ReactNotifications, Store } from 'react-notifications-component'
// import 'react-notifications-component/dist/theme.css'

// import Footer from './Footer';
// import {Container} from 'react-bootstrap';
// import { Row, Col } from 'react-bootstrap';
// import { Row, Col } from 'antd';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Children, useState } from 'react';
// import {blog} from './Data/blog';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';



function App() {

let [todolist,setToDolist]=useState([])

  let saveToDoList=(event)=>{


    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
    let finalDolist=[...todolist,toname]
    setToDolist(finalDolist)
    }
    else{
      alert("toDo Name Allready Exists...")
    }
    event.preventDefault();
  }
  let list=todolist.map((value,index)=>{
    return(
      <ToDoListItems  key={index} value={value} indexNumber={index}
      todolist={todolist}
      setToDolist={setToDolist}
      />
    )
  })

  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name='toname'/>
        <button type='submit'>Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
            {list}
        </ul>

      </div>
    </div>

  );
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setToDolist}){

  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumber)
    setToDolist(finalData)
  }
  return(
       <li>
         {indexNumber+1}{value} <span onClick={deleteRow}>&times;</span>
       </li>
  )
}


