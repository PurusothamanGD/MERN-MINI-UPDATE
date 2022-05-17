import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function footer(){
    return(
        <div className="mt-5"style={{backgroundColor:"#00B398",color:"white"}}>
            <Row >
            <Col className="my-5 mx-5" style={{textAlign:"left"}} >
                <h6 >ABOUT US</h6>
                <ol className="list-unstyled" >
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>OUR JOURNEY</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>WHAT MAKES US STAND APART</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>114 QUALITY TESTS</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>THE PROMISE of 10</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>VISION MISSION VALUES</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>LEADERSHIP TEAM</li>
                </ol>
            </Col>
            <Col className="my-5 mx-5" style={{textAlign:"left"}} >
                <h6 >BRANDS</h6>
                <ol className="list-unstyled" >
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>BISLERI</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>VEDICA</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>FONZO</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>BISLERI SODA</li>
                   
                </ol>
                </Col>
            <Col className="my-5 mx-5" style={{textAlign:"left"}}>
                <h6 >OSR</h6>
                <ol className="list-unstyled" >
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>PLASTIC RECYCLING</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>RAINWATER HARVESTING</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>OZONE THERAPY</li>
                    
                </ol>
                </Col>
            <Col className="my-5 mx-5" style={{textAlign:"left"}} >
                <h6 >SPOTLIGHT</h6>
                <ol className="list-unstyled" >
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>SOCIAL BUZZ</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>WHAT'S NEW</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>IN THE NEWS</li>
                    <li className="text-white my-2" style={{opacity:'0.5',fontWeight:'bold'}}>BISLERI MEME FIESTA</li>
                </ol>
                </Col>
            <Col className="my-5 mx-5" style={{textAlign:"left"}}>
                <h6 >CAREERS</h6>
                </Col>
            <Col className="my-5 mx-5" style={{textAlign:"left"}} >
                <h6 >CONTACT US</h6>
                </Col>
                
            </Row>
            <hr style={{width:"90%",textAlign:"center",marginLeft:"50px"}}></hr>
            <Row style={{opacity:'0.5',fontWeight:'bold'}}>
                <Col sm={2}></Col>
                <Col sm={2}>COMPLIANCE</Col>|
                <Col sm={2}>TERMS AND CONDITIONS</Col>|
                <Col sm={2}>PRIVACY</Col>|
                <Col sm={2}>COPYRIGHT 2019-20</Col>|
                <Col></Col>
                
            </Row>
           
        </div>
    )

}

export default footer