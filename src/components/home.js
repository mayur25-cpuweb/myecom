import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Mainlistproducts from './mainlistproducts'
import Servicefrontcard from './Servicefrontcard'
import  Productdetail from "./productdetail";
import ReactDOM from "react-dom";

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
      </React.Fragment>

    )
  }
}

export default Home1
