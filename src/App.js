import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import {Container} from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
// import { Row, Col } from 'antd';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Children } from 'react';
import {blog} from './Data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
//  const headerInfo = "This is Header Info";
//   let name="Wscubetech"
  return (
    <div className="main">
   <button className='bg-[red] p-[10px]'>Save</button>
   <img width={200} src={weblogo}></img>

   <img src={aboutImg}></img>
   <Header/>
   <h1 className='text-[40] text-red-900 font-bold'>welcome to ws</h1>

    </div>
  );
}

export default App;


