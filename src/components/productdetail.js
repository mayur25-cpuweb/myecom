import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Productaction } from '../actions/productaction';
import { Productreducer } from '../reducers/productreducer';
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from "react-router-dom";


function Productdetail(props) {
  const dispatch = useDispatch();
  const [qnty, setqnty] = useState(1);
  const [size, setsize] = useState("None");
  function setvalue(e) {
    e.target.name == "qnty" && setqnty(e.target.value);
    e.target.name === "size" && setsize(e.target.value);
  }
  const { id } = useParams();
  const user = useSelector(state => state.user);
  const productdetail = useSelector(state => state.Productreducer);
  useEffect(() => {
    dispatch(Productaction({ id }));
  },[id,dispatch]);

  function increment(){
    if (qnty>=10) {
      alert("Maximun product orders reached");
      setqnty(10);
    }else{
      setqnty(qnty+1);
      }
  };
  function decrement(){
    if (qnty<=1) {
      alert("quantity cant be zero");
      setqnty(1);

    }else{
    setqnty(qnty-1);
    }
  };
  function notfocus() {
    if (qnty>=10) {
      alert("Maximun product orders reached");
      setqnty(10);
    }else if(qnty<=1){
      alert("quantity cant be zero");
      setqnty(1);
      }
  }


  function sendtocart() {
    var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
    var idcart=productdetail._id;
    var producttitlecart=productdetail.producttitle;
    var productqntycart=qnty;
    var productsizecart=size;

    var pricecart=productdetail.price;
    var statuscart="pending";
    if (!user) {
      alert("login to add product in cart")
    }else{
      var useremailcart=user.email;
      if (productsizecart=="None") {
        alert("choose size")
      }else{
    alert(productsizecart);
    // alert(idcart);
    // alert(producttitlecart);
    // alert(productqntycart);
    // alert(pricecart);
    // alert(useremailcart);
    // alert(statuscart);
    var s={idcart,producttitlecart,productqntycart,useremailcart,pricecart,productsizecart,statuscart}
    axios.post('http://localhost:4000/Cart',s).then((res)=>{
      console.log(res.data);
      alert( `Product Added successfully`);
      // btn1.disabled=true;
      btn1.style.display="none";
      btn2.style.display="block";
    });
    

  }
}
  };
function hidebtn2() {
  var btn2=document.getElementById('btn2');
  btn2.style.display="none";
}
  return (
    <React.Fragment>
      <div className="card pdcard" onLoad={hidebtn2} >
        <h1>{productdetail && productdetail._id}hello</h1>
        <h1>{!productdetail && "not availaible"}</h1>
        <div className="row no-gutter" >
          <div className="col-md-4">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ backgroundColor: 'black' }}>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={(productdetail && productdetail.logo) ? `http://localhost:4000/${productdetail.logo}` : "http://pesmcopt.com/admin-media/images/dummy-product-image.jpg"}
                    className="card-img-topproduct" alt="..." style={{ width: "100%", height: "31.5rem", overflow: "hidden" }} />
                </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
              <button className="btn" id="btn1" className="btncart" type="button" onClick={sendtocart}>Add To Cart</button>
              <Link to={`/ShoppingCart`} className="btncart"><button className="btn text-center" id="btn2" className="btncart" type="button" >Go to Cart</button></Link>
              <button className="btn" className="btncart" type="button">Buy Now</button>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{productdetail && productdetail.producttitle}
                {!productdetail && "title not availaible"}</h2>
              <p className="card-text">American label New Era manufacturing baseball hats for teams since the 1930s.</p>
              <p><small className="text-muted">Price</small></p>
              <h5 className="card-title"><i className="fas fa-rupee-sign">
                {productdetail && productdetail.price}
                {!productdetail && "price not availaible"}</i></h5>
              SIZE:
                <select className="form-select dropdown" value={size} name="size" onChange={(e)=>{setvalue(e)}}
                 aria-label="Default select example" style={{ width: '100px' }}>
                  <option value="None" >None</option>
                  <option value="S" >S</option>
                  <option value="M" >M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XXXL">XXXL</option>
                </select>
              <br />
             

              <p className="card-text" >
                <small className="text-muted text-center" >
                  <div className="" style={{ display: 'flex', border: "1px solid", width: "100px", justifyContent: "center", height: "30px" }}>
                    <button type="button" className="" data-btn="plus" onClick={increment}
                      style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>+</button>
                    <input type="text" className="inputqnty text-center" id={`qnty`} name="qnty" value={qnty} onChange={(e) => { setvalue(e); }}
                      style={{ width: "50px", border: "none" }} onBlur={notfocus} />
                    <button type="button" className="" data-btn="minus" onClick={decrement}
                      style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>-</button>
                  </div>
                </small></p>
              <hr />
              {/* 
                      <div className="d-grid gap-2 col-md-6 mx-auto">
  <button className="btn" className="btncart" type="button">Add To Cart</button>
  <button className="btn" className="btncart" type="button">Buy Now</button>
</div> */}
              <br />
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <i className="fas fa-truck-moving"></i>&nbsp;&nbsp;Free Shipping

                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <i className="fas fa-boxes"></i>&nbsp;&nbsp;30 Days Return
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                  </div>
                </div>
              </div>
              <br />
              <div className="description" >
                <div>
                  {productdetail && productdetail.pd}
                  {!productdetail && "not availaible"}

                </div>
                <br />
                DISCLAIMER: Slight colour variations may occur due to different screen resolutions.
              </div>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Productdetail
