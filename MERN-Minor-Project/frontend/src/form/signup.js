import React,{Component} from 'react'
import {Form,Button,Container} from 'react-bootstrap'
import axios from 'axios'
import './signup.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class signup extends Component{
  constructor(){
    super()
    this.state={
      username:'',
      phone_no:'',
      password:'',
      
    }
    this.changeUsername=this.changeUsername.bind(this)
    this.changePhonenumber=this.changePhonenumber.bind(this)
    this.changePassword=this.changePassword.bind(this)
    this.submit=this.submit.bind(this)
  }

  changeUsername(event){
    this.setState({
      username:event.target.value
    })
  }
  changePhonenumber(event){
    this.setState({
      phone_no:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }

  submit(event){
    event.preventDefault()
    
    const register={
      username:this.state.username,
      phone_no:this.state.phone_no,
      password:this.state.password
    }
    axios.post('http://localhost:4000/signup',register)
    .then(res=>console.log(res.data))

    this.setState({
      username:'',
      phone_no:'',
      password:''
    })
  }
  render(){
    return(
      <Container>
        <Form  onSubmit={this.submit}  className="signup">
             <Form.Group>
                 <Form.Control className="input" type="text" onChange={this.changeUsername} value={this.state.username} name="username" placeholder="Username" />
              </Form.Group>
               <Form.Group >
                 <Form.Label className="label">Mobile number</Form.Label>
                 <Form.Control type="Number" className="input" onChange={this.changePhonenumber} value={this.state.phone_no} name="phone_no" placeholder="Enter your mobile number" />
              </Form.Group>
              <Form.Group >
              <Form.Label className="label" style={{marginRight:"900px"}}>Password</Form.Label>
                <Form.Control  type="password" className="input" onChange={this.changePassword} value={this.state.password} name="password" placeholder="Enter your password" />
              </Form.Group>
          <Button variant="primary" type="submit" value="submit" style={{marginRight: "400px"}} className="w-50">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default signup