
import './App.css';
import Header from './components/Header/Header';
import FilmCard from './components/Film-Card/FilmCard';
import './components/Header/Header.css'
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Detalle from './pages/Detalle'

function App() {
  return (
    <>
        <Header/>
       <Container fluid className='bg-dark pt-3'>
          <Row style={{ justifyContent: "between"  }}>
          <FilmCard/>
          <FilmCard/>
          <FilmCard/>                 
          </Row>
          <Detalle/>
      </Container>
      
      
    
      
      
    </>
  );
}

export default App;
