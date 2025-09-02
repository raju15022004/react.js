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

  let[uppercase,setUppercase]=useState(false)
  let[lowercase,setLowercase]=useState(false)
  let[number,setNumber]=useState(false)
  let[symbols,setSymbols]=useState(false)

  let createPassword=()=>{
    let charSet=''
    if(uppercase || lowercase || number || symbols){
      if(uppercase) charSet==UC;
      if(lowercase) charSet==LC;
      if(number) charSet==NC;
      if(symbols) charSet==SC;
      console.log(charSet)

    }
    else{
      alert("Plase one CheckBox!.....")
    }
  }

  return(
    <>
    <div className='passwordBox'>
    <h2>Password Generator</h2>

    <div className='passwordBoxin'>
      <input type='text' readOnly/>
      <button>Copy</button>

    </div>

    <div className='passlengh'>
      <lable>Password Length</lable>
      <input type='number' />
    </div>

    <div className='passlengh'>
      <lable>Include uppercase letters</lable>
      <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
    </div>

    <div className='passlengh'>
      <lable>Include lowercase letters</lable>
      <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
    </div>

    <div className='passlengh'>
      <lable>Include numbers</lable>
      <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
    </div>

    <div className='passlengh'>
      <lable>Include symbols</lable>
      <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
    </div>

     <button className='btn' onClick={createPassword}>
      Generator password
      </button>
    </div>
    </>

  );
}

export default App;




