import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import React,{useState} from 'react';


function CreateUser() {
const[username,setUsername] = useState("");
const[email,setEmail] = useState("");
const[feedback,setFeedback] = useState("");
const navigate = useNavigate();
const SubmitHandler = (e) =>{

Axios.post('http://localhost:2000/users/add',
{username: username, email: email, feedback: feedback})
.then(()=>alert("Thankyou for your feedback!"))
.catch(e=>console.log(e))
setUsername("");
setEmail("");
setFeedback("");
navigate('/');
}
  return (
  
  <div style={{padding:'100px 10%',backgroundColor:'pink'}}>
   <Container>
   <h1> <center>How is it our Website</center></h1> <br/><br/>
   <Row>  
        <Col lg={6}>
     
    <Form onSubmit={SubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" defaultValue = {username}
 onChange={(e) => {setUsername(e.target.value)}}
 required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" defaultValue = {email}
 onChange={(e) => {setEmail(e.target.value)}}
 required/>
      </Form.Group>
 
 <Form.Group className="mb-3" controlId="formBasicFeedback">
        <Form.Label>Feedback</Form.Label>
        <Form.Control type="feedback" placeholder="feedback" defaultValue = {feedback}
 onChange={(e) => {setFeedback(e.target.value)}}
 required/>
      </Form.Group>
     
      <Button variant="success" className="d-flex justify-content-around" type="submit" active>
        Submit
      </Button>
    </Form>
</Col>
</Row>
</Container>
</div>
  );
}

export default CreateUser;
