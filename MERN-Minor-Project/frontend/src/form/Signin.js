import React from 'react'
import {Form,Button,Container} from 'react-bootstrap'
import './signin.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function signin(){

    return(
      <Container>
        <Form onSubmit="/signin"  className="signin">
               <Form.Group >
                 <Form.Label className="label">Username</Form.Label>
                 <Form.Control type="text" className="input" name="username" placeholder="Username" />
              </Form.Group>
              <Form.Group >
              <Form.Label className="label" style={{marginRight:"900px"}}>Password</Form.Label>
                <Form.Control  type="password" className="input" name="password" placeholder="Enter your password" />
              </Form.Group>
          <Button variant="primary" type="submit" style={{marginRight: "400px"}} className="w-50">
            Signin
          </Button>
        </Form>
      </Container>
    )
}

export default signin