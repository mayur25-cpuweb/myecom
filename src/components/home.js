import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Mainlistproducts from './homepage/mainlistproducts'
import Servicefrontcard from './Servicefrontcard'
import  NW  from "./homepage/NW";
import  WW  from "./homepage/WW";


export class Home1 extends Component {
  render() {

    return (
      // carsoul-line
      <React.Fragment>
        <Carousel fade style={{ height: '89.5vh', backgroundColor: 'blue' }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=""
              alt="First slide"
            // height="692vh"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
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
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* // carsoul-line */}

        <Servicefrontcard></Servicefrontcard>
        <div className="container text-center newcollectiontext">
          <div className="text-muted"> New Collection 2021</div>
          <h3>New arrivals</h3>

        </div>
        <br />
       <Mainlistproducts></Mainlistproducts>
       <hr/>
       <br/>

       <div className="container text-center newcollectiontext">
          <div className="text-muted">EXCLUSIVE HERE</div>
          <h3>KOTA ZARIYA</h3>
          {/* exclusive daalna hai yaha */}
<NW></NW>
        </div>
        <hr/>
        <br/>
        <div className="container text-center newcollectiontext">
          <div className="text-muted">Western Wear</div>
          <h3>Dresses</h3>
          {/* exclusive daalna hai yaha */}
<WW></WW>
        </div>
        <hr/>
        <br/>

        <div className="container text-center newcollectiontext">
          <div className="text-muted">Be Comfortable</div>
          <h3>Night Wear</h3>
          {/* exclusive daalna hai yaha */}
<NW></NW>
        </div>
        <hr/>
        <br/>
      </React.Fragment>

    )
  }
}

export default Home1
