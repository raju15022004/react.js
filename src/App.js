import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import btnModule from "./Button.module.css"
// import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

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
let [status,setStatus]=useState(false);
let [pstatus,setPstatus]=useState(false);
let [modalstatus,setModalstatus]=useState(false)
let [menuStatus,setMenuStatus]=useState(false)

  return (
<div className='App'>
  {/* <NotificationContainer/> */}
  <button>Save</button>

  <button className='micon' onClick={()=>setMenuStatus(!menuStatus)}>
  {
    menuStatus ?
    <span>&times;</span>
    :
    <span>&#9776;</span>
  }

    </button>

  <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Course</li>
      <li>Gallery</li>
      <li>Contact</li>
    </ul>

  </div>
  <input type={pstatus ? 'text':'password'}/>
  <button onClick={()=>setPstatus(!pstatus)}>{pstatus ? 'Hide':'show'}</button>
  <br/>
  <button className={btnModule.error}>Error</button>
  <button className={btnModule.warning}>Demo</button>
  <button onClick={()=>setStatus(!status)}>
  {(status)? 'Hide':'Show'}
  </button>
  {
    (status)
    ?
  <p className='para'>welcome to ws</p>
  :
  ''
}
    </div>
  );
}

export default App;


