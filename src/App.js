import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import btnModule from "./Button.module.css"
import { questions, showAns } from "./data";

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
//  const headerInfo = "This is Header Info";
//   let name="Wscubetech"
let [status,setStatus]=useState(false);
let [pstatus,setPstatus]=useState(false);
let [modalstatus,setModalstatus]=useState(false)
let [menuStatus,setMenuStatus]=useState(false)
// let [modalstatus,setModalstatus]=useState(false)


  return (
<div className='App'>
  <div>
    <h1>Frequently Asked Question(FAQs)</h1>
    <div className='faqouter'>
      {
       questions.map((faqItems,i)=>{
        return(

      <div className='faqItems'>
        <h2>{faqItems.question}</h2>
        <p className={showAns==faqItems.id ? 'activeAns':''}>{faqItems.answer}</p>
      </div>
        )
       }
      )
      }
    </div>
  </div>
  {/* <button className='en' onClick={()=>setModalstatus(true)}>Enquiry Now</button>
  <div onClick={()=>setModalstatus(false)}className={`modalOverLay ${modalstatus?'modalShow':''}`}></div>
  <div className={`ModalDiv ${modalstatus?'showModalDiv':''}`}>
    <h3>Enquiry Now <span onClick={()=>setModalstatus(false)}>&times;</span></h3>
  </div> */}
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


