import React from 'react'
import { Container,Row,Col, Card,Form,Button } from 'react-bootstrap'


export default function EducationService(){
    return(
        <Container>
            <Row>
                <Col>
                <Card>
                    <Card.Title>TEFL COURSE</Card.Title>
                    <Card.Subtitle>
                    TEFL/TESOL Registration

                    </Card.Subtitle>
                    <Card.Body>
                <Card.Text>
                Association for International Language Studies is offering a 120-hr online certificate in Teaching English as a Foreign Language and Teaching English to Speakers of Other Languages with a 40-hr teaching practicum for $100. The course is 20 Units covering English grammar and teaching pedagogy to prepare you for a career teaching English as a foreign language. It is administered entirely online with a trained group of mentor teachers who check your assignments and give feedback on your lessons with real English students. Fill out this form to register and you will be contacted within 48 hours. Payment is accepted securely online after program acceptance.

                </Card.Text>

                <Form className="col-4">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter Your full name" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                    </Card.Body>
                   
                </Card>
                
                                      
                </Col>
            </Row>
<Row>
        <Col>
        
        <div class="jumbotron jumbotron-fluid">
        
            
            <h1 class="display-4">Membership is free.</h1>
            <p class="lead">Membership with AFIL Studies gives you connections to a close-knit body of teachers, trainers, administrators, professors, and others in the field of education who want to be your partner in the technological revolution of education which is happening now. AFIL Studies Members support and train each other in modern best practices and promote research-based decision making in the education field.</p>
            
           
           
         
           </div>
           <div class="jumbotron jumbotron-fluid">
        
            
        <h1 class="display-4">Members Receive:</h1>
        <li class="lead">Access to AFIL Studies monthly virtual research brief where we share recent findings in the field of educational research and tips for teaching virtually</li>
        <li class="lead">Networking connections through our virtual events</li>
        <li class="lead">Access to our partners’ international job boards</li>
        <li class="lead">Access to our a list of public hosted events (in-person and virtual)</li>
     
        

        <Button>Learn More</Button>
       
       
     
       </div>
        </Col>
</Row>
        </Container>
        )
}
