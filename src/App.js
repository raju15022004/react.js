import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import {Container} from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
// import { Row, Col } from 'antd';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  let name="Wscubetech"
  return (
    <div className="main">
      <Header/>
      <Container fluid >
        <Container>
          <Row>
            <Col className="col-12 text-center">
            <h1>our Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
             <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
            <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
            <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
          </Row>
        </Container>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;


