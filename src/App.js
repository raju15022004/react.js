import logo from './logo.svg';
import './App.css';
import Header from './Header';
// import { useState } from 'react';
// import btnModule from "./Button.module.css"
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

// let [status,setStatus]=useState(false);
// let [pstatus,setPstatus]=useState(false);
// let [modalstatus,setModalstatus]=useState(false)
// let [menuStatus,setMenuStatus]=useState(false)

let [todolist,setToDolist]=useState([])

  let saveToDoList=(event)=>{


    let toname=event.target.toname.value;
    if(!todolist.include(toname)){
    let finalDolist=[...todolist,toname]
    setToDolist(finalDolist)
    }
    else{
      alert("toDo Name Allready Exists...")
    }
    event.preventDefault();
  }

  return (
    <div>
      <h1>ToDO List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name='toname'/><button>Save</button>
      </form>
    </div>

  );
}

export default App;


