import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContentRouter from "./components/MainContentRouter/MainContentRouter";


function App() {
  return (
    
    <Container fluid>
      <Header />
      <BrowserRouter>
              <MainContentRouter />
      </BrowserRouter>
<Footer/>
    </Container>
  );
}

export default App;
