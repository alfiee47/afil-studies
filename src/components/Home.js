import React,{useState} from 'react';
import './home.css';
import { Button, Card, Container, Row,Col,Carousel } from 'react-bootstrap'
import image1 from '../images/image1.jpg';
import sim from '../images/sim.PNG';
import simon from '../images/simon.PNG';


export default function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        
        <>
        <div class="jumbotron jumbotron-fluid">
            <Container>
        <section>
            
            <h1 class="display-4">Training Teachers and linking schools,teachers and students</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            <Button>Learn More</Button>
           
           
           </section>
           </Container>
           </div>



           <section>
               <Container>
           <Row>
            <Col>
            <Carousel    activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sim}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={simon}
          alt="Third slide"
         
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
    

           </Row>
           </Container>
           </section>
        </>
        
        )
}