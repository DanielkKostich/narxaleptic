import { Jumbotron, Container, Button } from 'react-bootstrap';



function Home() {
  return (
    <Jumbotron fluid className="bg-dark text-white">
      <Container>
        <h1>Welcome to Narxaleptic</h1>
        <p>We specialize in building cars.</p>
        <Button variant="primary">Learn More</Button>
      </Container>
    </Jumbotron>
  );
}

export default Home;
