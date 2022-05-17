import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Slick/slick.css';


export default class Slickimg  extends Component{
  constructor() {
    super();
    this.state = { imgURL: [] };
  }

  callAPI() {
    fetch("http://localhost:4000/getURL")
      .then(res => res.json())
      .then(res => this.setState({ imgURL: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

    render(){
      var listItems =this.state.imgURL.map((value)=>
        <div>
          <img src={value.imagePath} />
      </div>
      )
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true
      };
      return (
        <Slider style={{marginTop:"20px"}} {...settings}>
          
          {listItems}
          
        </Slider>
      );

    }
}


// var images =[]
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'red' }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'green' }}
//       onClick={onClick}
//     />
//   );
// }
/*
class Slickimg extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3200/users/getimages')
      .then(res => res.json())
      .then(imgs => this.setState({ imgs }));
  }

  sliders() {
    return this.state.imgs.map(data => {
      return (
        <div key={data}>
          <img alt="image" src={data.image} />
        </div>
      );
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="slick">
        <Slider {...settings}>{this.sliders()}</Slider>
      </div>
    );
  }
}
*/
// export default function slick() {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <Slider {...settings}>
      
//       {listItems}
      
//     </Slider>
//   );
// }
// //export default ;
