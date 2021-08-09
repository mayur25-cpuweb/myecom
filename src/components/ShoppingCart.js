import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'

function ShoppingCart() {

  const [qnty, setqnty] = useState("");

  function setvalue(e) {
  
    e.target.name=="qnty" && setqnty(e.target.value);
  }
    return (
        <React.Fragment>
        <div className="container maincart">
           <div className="card cartcard">
  <div className="row g-0">
    <div className="col-md-4 cartimg">
      <img src="https://cdn.shopify.com/s/files/1/2542/7564/products/5_66252b1f-ee51-4d4f-9afe-18ece4e78588_1000x.png?v=1627301931" 
      className="img-fluid rounded-start" style={{borderRadius:"6%"}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">PINK TULIP TIE & DYE PURE CHIFFON SAREE</h5>
        <span>Size: XL</span>
        {/* <p className="card-text">Size: XXL</p> */}
        <div className="text-end" style={{display:"flex",justifyContent:""}}>
        <div style={{textDecoration:"line-through"}}><i class="fas fa-rupee-sign"></i>5962</div>
        <span style={{textDecoration:"none",color:"red"}}>&nbsp;10%off</span>
        </div>
        <div><i class="fas fa-rupee-sign"></i>5,420</div>

        <hr style={{width:"40%"}}/>

        <p className="card-text">
          <small className="text-muted text-center">
        <div className="" style={{display: 'flex',border:"1px solid",width:"100px",justifyContent:"center",height:"30px"}}>
        <button type="button" class="" data-btn="plus" 
        style={{width:"40px",backgroundColor:"transparent",border:"none" ,position:"relative"}}>+</button>
        <input type="text" className="inputqnty text-center" id={`qnty`}  name="qnty" value={qnty} onChange={(e)=>{setvalue(e);}} 
        style={{width:"50px",border:"none"}} value="1"  />
            <button type="button" className="" data-btn="minus"
             style={{width:"40px",backgroundColor:"transparent",border:"none",position:"relative"}}>-</button>
        </div>
        </small></p>
        <div className="text-end">Total:&nbsp;<i class="fas fa-rupee-sign"></i> 5,420</div>
      </div>
    </div>
    <div className="card-footer bg-dark" style={{display: 'flex',justifyContent: 'center',textDecoration:"none",color: 'white'}}>
      <Nav.Link className="" style={{lineHeight:"10px",color: 'white'}}>Remove Item</Nav.Link>|
      <Nav.Link className=""style={{lineHeight:"10px",color: 'white'}}>View Item</Nav.Link>
      </div>
  </div>
</div>
</div>
        </React.Fragment>
    )
}

export default ShoppingCart
