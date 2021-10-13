import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CartAction } from '../actions/cartAction';


function ShoppingCart() {
    const { id } = useParams();
    const [qnty, setqnty] = useState(1);
    const [plus, setplus] = useState();
    const [minus, setminus] = useState();

    const user = useSelector(state => state.user);
   
    function setvalue(e) {

        e.target.name == "qnty" && setqnty(e.target.value);
        e.target.name == "plus" && setplus(e.target.value);
        e.target.name == "minus" && setminus(e.target.value);
    }
    // const dispatch = useDispatch()

    // const cartdetail = useSelector(state => state.Cartreducer);
    var uemail = user.email

    const [cart, setcart] = useState([]);
    useEffect(() => {
        // dispatch(CartAction({uemail}));
        axios.get('http://localhost:4000/cart-list', { uemail }).then(
            (res) => {
                alert(uemail);
                setcart(res.data.data); 
                //   console.log(res.data.data.length);
                  console.log(res.data.data);
                  console.log(res.data.data[0].productlogocart);                
            }
        )
    }, []);
    
    var pricesum=cart.map((e)=>{ return Number(e.pricecart)});
    // console.log(gg);
    function sum(a,b) {
        return a+b;
    }
    var sumo=pricesum.reduce(sum,0)
    console.log(sumo);
    // alert(sumo+"sumo");

    function increment(e){
var p_id=e.target.dataset.idp;
var qty=Number(document.getElementById("qntyinput"+p_id).value);
qty=qty+1;
var setqty=document.getElementById("qntyinput"+p_id).value =Number(qty);
setqnty(setqty);
alert(qnty)
    }
      
      function decrement(){
        if (qnty<=1) {
          alert("quantity cant be zero");
          setqnty(1);
    
        }else{
        setqnty(qnty-1);
        }
      };
      function notfocus() {
        // if (qnty>=10) {
        //   alert("Maximun product orders reached");
        //   setqnty(10);
        // }else if(qnty<=1){
        //   alert("quantity cant be zero");
        //   setqnty(1);
        //   }
      }
    

    return (
        <div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <div className="container maincart">
                            <div class="row row-cols-1 row-cols-md-1 g-4">
                                
                                {cart.filter(cartp => cartp.useremailcart == user.email).map(filteredcartp => (
                                    <div class="col" key={filteredcartp.idcart} >
                                        <div class="card cartcard">
                                            <div className="row g-0">
                                                <div className="col-md-4 cartimg">
                                                <img src={(filteredcartp && filteredcartp.productlogocart) ? `http://localhost:4000/${filteredcartp.productlogocart}` : "http://pesmcopt.com/admin-media/images/dummy-product-image.jpg"}
                    className="img-fluid rounded-start" alt="..." style={{borderRadius: "6%" ,height: "20rem"}} />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{filteredcartp.producttitlecart}</h5>
                                                        <span>Size: {filteredcartp.productsizecart}</span>
                                                        <div className="text-end" style={{ display: "flex", justifyContent: "" }}>
                                                            <div style={{ textDecoration: "line-through" }}><i class="fas fa-rupee-sign"></i>{filteredcartp.pricecart}</div>
                                                            <span style={{ textDecoration: "none", color: "red" }}>&nbsp;10%off</span>
                                                        </div>
                                                        <div><i class="fas fa-rupee-sign"></i>{filteredcartp.pricecart}</div>

                                                        <hr style={{ width: "40%" }} />

                                                        <p className="card-text">
                                                            <small className="text-muted text-center">
                                                                <div className=""  id={`qntydiv${filteredcartp.idcart}`} style={{ display: 'flex', border: "1px solid", width: "100px", justifyContent: "center", height: "30px" }}>
                                                                    <button type="button" class="" name="plus" onClick={(e)=>{increment(e)}} data-idp={filteredcartp.idcart} 
                                                                        style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>+</button>

                                                                    <input type="text" id={`qntyinput${filteredcartp.idcart}`} className="inputqnty text-center" name="qnty" value={filteredcartp.productqntycart} onChange={(e) => { setvalue(e); }}
                                                                        style={{ width: "50px", border: "none" }}  onBlur={notfocus}  />

                                                                    <button type="button" className="" name="minus"  onClick={decrement} data-idp={filteredcartp.idcart} 
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
                                )
                                )
                                }

                                {/* {filteredcartp.producttitlecart} */}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="totalcard">
                <div class="card  "style={{width:"50vh"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"></li>
    <li class="list-group-item">A second item</li>
    <li className="list-group-item d-flex justify-content-between">Total AMOUNT:<span>{sumo}</span></li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
            </div>
        </div></div>

    )

    // { cartlist }
    //         <div>
    // <div class="row row-cols-1 row-cols-md-2 g-4">
    //   <div class="col">
    //     <div class="card">
    //     <div className="container maincart">
    //         <div class="row row-cols-1 row-cols-md-1 g-4">

    //           <div class="col">
    //             <div class="card cartcard">
    //               <div className="row g-0">
    //                 <div className="col-md-4 cartimg">
    //                   <img src="https://cdn.shopify.com/s/files/1/2542/7564/products/5_66252b1f-ee51-4d4f-9afe-18ece4e78588_1000x.png?v=1627301931"
    //                     className="img-fluid rounded-start" style={{ borderRadius: "6%" }} alt="..." />
    //                 </div>
    //                 <div className="col-md-8">
    //                   <div className="card-body">
    //                     <h5 className="card-title">PINK TULIP TIE & DYE PURE CHIFFON SAREE</h5>
    //                     <span>Size: XL</span>
    //                     <div className="text-end" style={{ display: "flex", justifyContent: "" }}>
    //                       <div style={{ textDecoration: "line-through" }}><i class="fas fa-rupee-sign"></i>5962</div>
    //                       <span style={{ textDecoration: "none", color: "red" }}>&nbsp;10%off</span>
    //                     </div>
    //                     <div><i class="fas fa-rupee-sign"></i>5,420</div>

    //                     <hr style={{ width: "40%" }} />

    //                     <p className="card-text">
    //                       <small className="text-muted text-center">
    //                         <div className="" style={{ display: 'flex', border: "1px solid", width: "100px", justifyContent: "center", height: "30px" }}>
    //                           <button type="button" class="" data-btn="plus"
    //                             style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>+</button>
    //                           <input type="text" className="inputqnty text-center" id={`qnty`} name="qnty" value={qnty} onChange={(e) => { setvalue(e); }}
    //                             style={{ width: "50px", border: "none" }} value="1" />
    //                           <button type="button" className="" data-btn="minus"
    //                             style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>-</button>
    //                         </div>
    //                       </small></p>
    //                     <div className="text-end">Total:&nbsp;<i class="fas fa-rupee-sign"></i> 5,420</div>
    //                   </div>
    //                 </div>
    //                 <div className="card-footer bg-dark" style={{ display: 'flex', justifyContent: 'center', textDecoration: "none", color: 'white' }}>
    //                   <Nav.Link className="" style={{ lineHeight: "10px", color: 'white' }}>Remove Item</Nav.Link>|
    //                   <Nav.Link className="" style={{ lineHeight: "10px", color: 'white' }}>View Item</Nav.Link>
    //                 </div>
    //               </div>

    //             </div>
    //           </div>

    //           <div class="col">
    //           <div class="card cartcard">
    //               <div className="row g-0">
    //                 <div className="col-md-4 cartimg">
    //                   <img src="https://cdn.shopify.com/s/files/1/2542/7564/products/5_66252b1f-ee51-4d4f-9afe-18ece4e78588_1000x.png?v=1627301931"
    //                     className="img-fluid rounded-start" style={{ borderRadius: "6%" }} alt="..." />
    //                 </div>
    //                 <div className="col-md-8">
    //                   <div className="card-body">
    //                     <h5 className="card-title">PINK TULIP TIE & DYE PURE CHIFFON SAREE</h5>
    //                     <span>Size: XL</span>
    //                     <div className="text-end" style={{ display: "flex", justifyContent: "" }}>
    //                       <div style={{ textDecoration: "line-through" }}><i class="fas fa-rupee-sign"></i>5962</div>
    //                       <span style={{ textDecoration: "none", color: "red" }}>&nbsp;10%off</span>
    //                     </div>
    //                     <div><i class="fas fa-rupee-sign"></i>5,420</div>

    //                     <hr style={{ width: "40%" }} />

    //                     <p className="card-text">
    //                       <small className="text-muted text-center">
    //                         <div className="" style={{ display: 'flex', border: "1px solid", width: "100px", justifyContent: "center", height: "30px" }}>
    //                           <button type="button" class="" data-btn="plus"
    //                             style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>+</button>
    //                           <input type="text" className="inputqnty text-center" id={`qnty`} name="qnty" value={qnty} onChange={(e) => { setvalue(e); }}
    //                             style={{ width: "50px", border: "none" }} value="1" />
    //                           <button type="button" className="" data-btn="minus"
    //                             style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>-</button>
    //                         </div>
    //                       </small></p>
    //                     <div className="text-end">Total:&nbsp;<i class="fas fa-rupee-sign"></i> 5,420</div>
    //                   </div>
    //                 </div>
    //                 <div className="card-footer bg-dark" style={{ display: 'flex', justifyContent: 'center', textDecoration: "none", color: 'white' }}>
    //                   <Nav.Link className="" style={{ lineHeight: "10px", color: 'white' }}>Remove Item</Nav.Link>|
    //                   <Nav.Link className="" style={{ lineHeight: "10px", color: 'white' }}>View Item</Nav.Link>
    //                 </div>
    //               </div>

    //           </div>
    //           <div class="col">
    //             <div class="card">
    //               <img src="..." class="card-img-top" alt="..." />
    //               <div class="card-body">
    //                 <h5 class="card-title">Card title</h5>
    //                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="col">
    //             <div class="card">
    //               <img src="..." class="card-img-top" alt="..." />
    //               <div class="card-body">
    //                 <h5 class="card-title">Card title</h5>
    //                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="col">
    //     <div class="card">

    //     <div class="card text-center" style={{marginTop:'1%'}}>
    //   <div class="card-body">
    //     <h5 class="card-title">Special title treatment</h5>
    //     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //     <a href="#" class="btn btn-primary">Go somewhere</a>
    //   </div>
    // </div>



    //     </div>
    //   </div>
    // </div>
    //         </div>
    //     )
}

export default ShoppingCart
