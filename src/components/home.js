import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Servicefrontcard from './Servicefrontcard'
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
        <div className="productcard container">
          <div className="row row-cols-1 row-cols-md-3 g-4" >
            <div className="col">
              <div className="card h-100 pcard" >
                <span className="badge rounded-pill" style={{
                  width: '15%',
                  marginLeft: '2.5%',
                  zIndex: '1',
                  position: 'absolute',
                  marginTop: '2.5%',
                  backgroundColor: 'coral'
                }}>New</span>
                <img src="https://cdn.shopify.com/s/files/1/2542/7564/products/5_66252b1f-ee51-4d4f-9afe-18ece4e78588_1000x.png?v=1627301931"
                  className="card-img-topproduct" alt="..." style={{ width: "100%", height: "31.5rem", overflow: "hidden" }} />
                <div className="card-body">
                  <h6 className="card-title text-center">PINK TULIP TIE & DYE PURE CHIFFON SAREE</h6>
                  {/* <p className="card-text"></p> */}
                </div>
                <div className="card-footer pfoot" style={{ backgroundColor: "white", color: "black" }}>
                  <div className="text-center"><i class="fas fa-rupee-sign"></i> 5,420</div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 pcard" >
                <img src="https://i.pinimg.com/736x/e4/1f/15/e41f1545bf3e0f8b234482e4e53522b3--saari-embroidery-works.jpg" className="card-img-top" alt="..."
                  style={{ width: "100%", height: "31.5rem", overflow: "hidden" }} />
                <div className="card-body">
                  <h6 className="card-title text-center">PINK TULIP TIE & DYE PURE CHIFFON SAREE</h6>
                  {/* <p className="card-text"></p> */}
                </div>
                <div className="card-footer" style={{ backgroundColor: "white", color: "black" }}>
                  <div className="text-center" >Last updated 3 mins ago</div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 pcard">
                <img src="https://2.bp.blogspot.com/-hgZshtROay0/WiZ8vUlQVsI/AAAAAAAAbtU/8Wn-il4DAXwg0pAbs3U5P4K4iMm40z8EACEwYBhgL/s1600/Latest%2Bdesigner%2Bsarees%2Bimages%2B2017%2B%252811%2529.jpg"
                  className="card-img-top" alt="..." style={{ width: "100%", height: "31.5rem", overflow: "hidden" }} />
                <div className="card-body">
                  <h6 className="card-title text-center">Card title</h6>
                  {/* <p className="card-text"></p> */}
                </div>
                <div className="card-footer text-center" style={{ backgroundColor: "white", color: "black" }}>
                  <div className="text-center">Last updated 3 mins ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    )
  }
}

export default Home1
