import { Jumbotron, Container,  } from 'react-bootstrap';



function Home() {
  return (
    <div className = 'contact'>
    <Jumbotron fluid className="hero text-white  header " >
      <Container>
        <h1>Welcome to Narxaleptic</h1>
        <p>We specialize in building  custom cars.</p>
        
      </Container>
    </Jumbotron>
    
    </div>
  );
}

export default Home;
