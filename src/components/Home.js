import { Jumbotron, Container,  } from 'react-bootstrap';



function Home() {
  return (
    <div>
    <Jumbotron fluid className="bg-dark text-white" >
      <Container>
        <h1>Welcome to Narxaleptic</h1>
        <p>We specialize in building  custom cars.</p>
        
      </Container>
    </Jumbotron>
    <p>Sample</p>
    </div>
  );
}

export default Home;
