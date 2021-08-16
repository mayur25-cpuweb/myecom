import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function Productdetail(props) {

  const [qnty, setqnty] = useState("");
  function setvalue(e) {
    e.target.name == "qnty" && setqnty(e.target.value);
  }
  const{id}=useParams();

  // const [product, setproduct] = useState([]);

  // useEffect(() => {
  //     axios.get(`http://localhost:4000/productlist`).then(
  //         (res)=>{
  //             console.log(res.data.data);
  //             setproduct(res.data.data)
  //         }
  //     )
  // });
    return (
        <React.Fragment>
            <div className="card pdcard" >
              <h1>{id}hello</h1>
  <div class="row no-gutter" >
    <div class="col-md-4">

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{backgroundColor:'black'}}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/2542/7564/products/5_66252b1f-ee51-4d4f-9afe-18ece4e78588_1000x.png?v=1627301931" class="d-block w-100" alt="..." style={{backgroundColor:'black'}}/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br/>
<div class="d-grid gap-4 col-md-12 mx-auto">
  <button class="btn" className="btncart" type="button">Add To Cart</button>
  <button class="btn" className="btncart" type="button">Buy Now</button>
</div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">New Era 9Forty LA Dodgers adjustable cap in black</h2>
        <p class="card-text">American label New Era manufacturing baseball hats for teams since the 1930s.</p>
        SIZE:
        <form>
<select class="form-select dropdown" aria-label="Default select example" style={{width:'80px'}}>
<option value = "S" selected>S</option>
<option value = "M">M</option>
<option value = "L" required>L</option>
<option value = "XL">XL</option>
<option value = "XXL">XXL</option>
<option value = "XXXL">XXXL</option>
</select>
</form>
<br/>
        <p><small class="text-muted">Total Price</small></p>
        <h5 class="card-title"><i class="fas fa-rupee-sign"></i>5,420</h5>
        
        <p className="card-text" >
                      <small className="text-muted text-center" >
                        <div className="" style={{ display: 'flex', border: "1px solid", width: "100px", justifyContent: "center", height: "30px"}}>
                          <button type="button" class="" data-btn="plus"
                            style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>+</button>
                          <input type="text" className="inputqnty text-center" id={`qnty`} name="qnty" value={qnty} onChange={(e) => { setvalue(e); }}
                            style={{ width: "50px", border: "none" }}  />
                          <button type="button" className="" data-btn="minus"
                            style={{ width: "40px", backgroundColor: "transparent", border: "none", position: "relative" }}>-</button>
                        </div>
                      </small></p>
                      <hr/>
{/* 
                      <div class="d-grid gap-2 col-md-6 mx-auto">
  <button class="btn" className="btncart" type="button">Add To Cart</button>
  <button class="btn" className="btncart" type="button">Buy Now</button>
</div> */}
<br/>
                      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <i class="fas fa-truck-moving"></i>&nbsp;&nbsp;Free Shipping

      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <i class="fas fa-boxes"></i>&nbsp;&nbsp;30 Days Return
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
</div>
<hr/>
<br/>
<div className="description" >
  <div>
   This three piece set includes kurta, sharara, dupatta & Indian Gota Potli.

Kurti Description – Baby Pink flared Gota kurti embellished with gota jaal .
Sharara Description – Baby Pink Sharara embellished with Gota Jaal.
Dupatta Description – Baby Pink Organza Gotapatti Dupatta .
</div>
<br/>
<div>
Indian Gota Potli Bag - Baby Pink Gota Potli Bag
Colour: Baby Pink
Suit Set Fabric: Cotton
Dupatta Fabric: Organza
Neckline: Sweetheart
Sleeve: 3/4th sleeves
Care: Dry Clean Only
Model Size: Model is wearing S size
Model Height: 5'5"
  </div>
  <br/>
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
