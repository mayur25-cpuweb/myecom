import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CartAction } from '../actions/cartAction';


function ShoppingCart() {
        const {id} =useParams();
        const [qnty, setqnty] = useState("");

        const user = useSelector(state => state.user);

        function setvalue(e) {
      
          e.target.name == "qnty" && setqnty(e.target.value);
        }

        const dispatch = useDispatch();
        const Cartreducer = useSelector(state => state.Cartreducer);

        var email=user.email
        const [cart, setcart] = useState([]);
        useEffect(() => {
        //   axios.get('http://localhost:4000/cart-list').then(
        //       (res)=>{
        //           console.log(res.data.data);
                  dispatch(CartAction({email}));
        //         }
        //   )
      }, []);

// useEffect(() => {
//     dispatch({type:"LOADING_TRUE"});

//     axios.post("http://localhost:4000/cart-list").then((res)=>{
//         dispatch({type:"LOADING_FALSE"})
//         console.log(JSON.stringify(res.data));
//         if(res.data.status=="ok")
//         {
//                   setcart(res.data.data)
//                 }
//         else{
//             alert("credential are not correct");
//         }
//     })
// }, [])
    
    //     var cartlist=cart.map((pl)=>{
    //       return <div class="col">
    //         <div class="card cartcard">
    //           <div className="row g-0">
    //             <div className="col-md-4 cartimg">
    //               <img src="https://cdn.shopify.com/s/files/1/2542/7564/products/5_66252b1f-ee51-4d4f-9afe-18ece4e78588_1000x.png?v=1627301931"
    //                 className="img-fluid rounded-start" style={{ borderRadius: "6%" }} alt="..." />
    //             </div>
    //             <div className="col-md-8">
    //               <div className="card-body">
    //                 <h5 className="card-title">{pl.producttitlecart}</h5>
    //                 <span>Size: XL</span>
    //                 <div className="text-end" style={{ display: "flex", justifyContent: "" }}>
    //                   <div style={{ textDecoration: "line-through" }}><i class="fas fa-rupee-sign"></i>5962</div>
    //                   <span style={{ textDecoration: "none", color: "red" }}>&nbsp;10%off</span>
    //                 </div>
    //                 <div><i class="fas fa-rupee-sign"></i>5,420</div>

    //                 <hr style={{ width: "40%" }} />

    //                 <p className="card-text">
    //                   <small className="text-muted text-center">
    //                     <div className="" style={{ display: 'flex', border: "1px solid", width: "100px", justifyContent: "center", height: "30px" }}>
    //                       <button type="button" class="" data-btn="plus"
    //                         style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>+</button>
    //                       <input type="text" className="inputqnty text-center" id={`qnty`} name="qnty" value={qnty} onChange={(e) => { setvalue(e); }}
    //                         style={{ width: "50px", border: "none" }} value="1" />
    //                       <button type="button" className="" data-btn="minus"
    //                         style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>-</button>
    //                     </div>
    //                   </small></p>
    //                 <div className="text-end">Total:&nbsp;<i class="fas fa-rupee-sign"></i> 5,420</div>
    //               </div>
    //             </div>
    //             <div className="card-footer bg-dark" style={{ display: 'flex', justifyContent: 'center', textDecoration: "none", color: 'white' }}>
    //               <Nav.Link className="" style={{ lineHeight: "10px", color: 'white' }}>Remove Item</Nav.Link>|
    //               <Nav.Link className="" style={{ lineHeight: "10px", color: 'white' }}>View Item</Nav.Link>
    //             </div>
    //           </div>

    //         </div>
    //       </div>





                   
    //    });

    return (
      <div>
          {Cartreducer.useremailcart}

<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
    <div className="container maincart">
        <div class="row row-cols-1 row-cols-md-1 g-4">
          <div class="col">
            <div class="card cartcard">
              <div className="row g-0">
                <div className="col-md-4 cartimg">
                  <img src="https://cdn.shopify.com/s/files/1/2542/7564/products/5_66252b1f-ee51-4d4f-9afe-18ece4e78588_1000x.png?v=1627301931"
                    className="img-fluid rounded-start" style={{ borderRadius: "6%" }} alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">PINK TULIP TIE & DYE PURE CHIFFON SAREE</h5>
                    <span>Size: XL</span>
                    <div className="text-end" style={{ display: "flex", justifyContent: "" }}>
                      <div style={{ textDecoration: "line-through" }}><i class="fas fa-rupee-sign"></i>5962</div>
                      <span style={{ textDecoration: "none", color: "red" }}>&nbsp;10%off</span>
                    </div>
                    <div><i class="fas fa-rupee-sign"></i>5,420</div>

                    <hr style={{ width: "40%" }} />

                    <p className="card-text">
                      <small className="text-muted text-center">
                        <div className="" style={{ display: 'flex', border: "1px solid", width: "100px", justifyContent: "center", height: "30px" }}>
                          <button type="button" class="" data-btn="plus"
                            style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>+</button>
                          <input type="text" className="inputqnty text-center" id={`qnty`} name="qnty" value={qnty} onChange={(e) => { setvalue(e); }}
                            style={{ width: "50px", border: "none" }} value="1" />
                          <button type="button" className="" data-btn="minus"
                            style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>-</button>
                        </div>
                      </small></p>
                    <div className="text-end">Total:&nbsp;<i class="fas fa-rupee-sign"></i> 5,420</div>
                  </div>
                </div>
                <div className="card-footer bg-dark" style={{ display: 'flex', justifyContent: 'center', textDecoration: "none", color: 'white' }}>
                  <Nav.Link className="" style={{ lineHeight: "10px", color: 'white' }}>Remove Item</Nav.Link>|
                  <Nav.Link className="" style={{ lineHeight: "10px", color: 'white' }}>View Item</Nav.Link>
                </div>
              </div>

            </div>
          </div>


          <div class="col">
          <div class="card cartcard">
              <div className="row g-0">
                <div className="col-md-4 cartimg">
                  <img src="https://cdn.shopify.com/s/files/1/2542/7564/products/5_66252b1f-ee51-4d4f-9afe-18ece4e78588_1000x.png?v=1627301931"
                    className="img-fluid rounded-start" style={{ borderRadius: "6%" }} alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">PINK TULIP TIE & DYE PURE CHIFFON SAREE</h5>
                    <span>Size: XL</span>
                    <div className="text-end" style={{ display: "flex", justifyContent: "" }}>
                      <div style={{ textDecoration: "line-through" }}><i class="fas fa-rupee-sign"></i>5962</div>
                      <span style={{ textDecoration: "none", color: "red" }}>&nbsp;10%off</span>
                    </div>
                    <div><i class="fas fa-rupee-sign"></i>5,420</div>

                    <hr style={{ width: "40%" }} />

                    <p className="card-text">
                      <small className="text-muted text-center">
                        <div className="" style={{ display: 'flex', border: "1px solid", width: "100px", justifyContent: "center", height: "30px" }}>
                          <button type="button" class="" data-btn="plus"
                            style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>+</button>
                          <input type="text" className="inputqnty text-center" id={`qnty`} name="qnty" value={qnty} onChange={(e) => { setvalue(e); }}
                            style={{ width: "50px", border: "none" }} value="1" />
                          <button type="button" className="" data-btn="minus"
                            style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>-</button>
                        </div>
                      </small></p>
                    <div className="text-end">Total:&nbsp;<i class="fas fa-rupee-sign"></i> 5,420</div>
                  </div>
                </div>
                <div className="card-footer bg-dark" style={{ display: 'flex', justifyContent: 'center', textDecoration: "none", color: 'white' }}>
                  <Nav.Link className="" style={{ lineHeight: "10px", color: 'white' }}>Remove Item</Nav.Link>|
                  <Nav.Link className="" style={{ lineHeight: "10px", color: 'white' }}>View Item</Nav.Link>
                </div>
              </div>

          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">

    <div class="card text-center" style={{marginTop:'1%'}}>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>



    </div>
  </div>
</div>
        </div>
    )
}

export default ShoppingCart
