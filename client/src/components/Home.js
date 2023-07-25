//import { Jumbotron, Container,  } from 'react-bootstrap';
import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import GoogleMaps from './GoogleMaps';

function Home() {
  return (
    <div className='home'>
      <section>
        <header className='title1'>
        <h1>Welcome to Narxoleptic Customs!</h1>
        </header>
      </section>

      <div className='parallax-container'>
      <section>
      <BackgroundVideo/>
      <h1>We rebuild, modify, and increase performance on anything with an engine.</h1>
      </section>
      </div>

      <section>
        <header className='title1'>
        <h1>bottom text</h1>
        </header>
      </section>

      <div className='home'>
        <section>
          
        </section>
      </div>
      <div className='map'>
      <GoogleMaps />
      </div>  

      <div className='footer-container'>
        <h6 className='menu'> <a href='https://drag-n-drive.com/'>Our Affiliates</a> </h6>
      </div>

    </div>
  );
}

export default Home;
