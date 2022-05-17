import React,{Component} from 'react'
import {Card,Row,Col,Button} from 'react-bootstrap'
import './gallery.css'
import 'bootstrap/dist/css/bootstrap.min.css'


class gallery extends Component{
    constructor() {
        super();
        this.state = { imginfo: [] };
      }
    
      imgSource() {
        fetch("http://localhost:4000/getimg")
          .then(res => res.json())
          .then(res => this.setState({ imginfo: res }));
      }

      componentDidMount(){
          this.imgSource()
      }
      render(){
        var info =this.state.imginfo.map((value)=>
        <Col sm={2} className="mx-3 mt-5">
        <Card style={{ width: '18rem' }}>
        <Card.Img  className="images" src={value.routeinfo}/>
        <Card.Body>
          <Card.Title>{value.imageDesc}</Card.Title>
          <Card.Text><b>Rs.20</b></Card.Text>
          <Button style={{backgroundColor:"#53A3C4",borderColor:"#53A3C4",color:"black"}} >Add to cart</Button>
        </Card.Body>
      </Card>
      </Col>
        )
        return (
            <Row className="mt-4 mx-3">{info}</Row>
        );
  
      }
}

export default gallery