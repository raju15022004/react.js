import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
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
  return (
<div className='App'>
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


