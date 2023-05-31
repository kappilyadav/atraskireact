// import React from 'react';
// import emailjs from 'emailjs-com';
import React, { useRef } from 'react'
import { useState } from 'react';

import emailjs from 'emailjs-com'
import { Container } from 'react-bootstrap';

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ur7cevn', 'template_8vvu6fv', form.current, 'VBOwlrdUCvw7Qk5Nz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFormSubmitted(true);

    };


    
  return (
    <Container>
      <h1 style={{color:'white'}}>Contact Us</h1>
      {/* <Row>
        <Col>
        
          <Form>
            <Form.Group controlId="formName">
              <Form.Label style={{color:'white'}}>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label style={{color:'White'}}>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label style={{color:'White'}}>Query?</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit" style={{margin:'10px'}}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row> */}
      <form ref={form} onSubmit={sendEmail} class="form-container">
  <label for="user_name">Name</label>
  <input type="text" id="user_name" name="user_name" required />

  <label for="user_email">Email</label>
  <input type="email" id="user_email" name="user_email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message" required></textarea>

  <input type="submit" value="Send" />
</form>
{formSubmitted && <p>Message submitted successfully!</p>}

    </Container>

    // email
    
    // email
  );
};

export default ContactUs;
