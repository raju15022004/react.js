import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  let name="Wscubetech"
  return (
    <div className="main">
      <Header/>
      <div className='row'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>


      </div>
      <Footer/>
    </div>
  );
}

export default App;

function Card(){
  return(
    <div className='CardItems'>Card Div</div>
  )
}
