import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from "react-router-dom";
import  Productdetail from "./productdetail";
import { useDispatch, useSelector } from 'react-redux';
import  {Productaction}  from "../actions/productaction";
import axios from 'axios';

function Mainlistproducts() {
    const [product, setproduct] = useState([]);
useEffect(() => {
    axios.get('http://localhost:4000/productlist').then(
        (res)=>{
            console.log(res.data.data);
            setproduct(res.data.data)
        }
    )
}, []);
 var productlist=product.map((pl)=>{
    return  <Link exact to={`/productdetail/${pl._id}`}>
        <div className="col" key={pl._id}>
    <div className="card h-100 pcard" id={pl._id}>
        <span className="badge rounded-pill" style={{
            width: '15%',
            marginLeft: '2.5%',
            zIndex: '1',
            position: 'absolute',
            marginTop: '2.5%',
            backgroundColor: 'coral'
        }}>New</span>
        <img src={ pl.logo ?  `http://localhost:4000/${pl.logo}` : "http://pesmcopt.com/admin-media/images/dummy-product-image.jpg"}
            className="card-img-topproduct" alt="..." style={{ width: "100%", height: "31.5rem", overflow: "hidden" }} />
        <div className="card-body">
            <h6 className="card-title text-center">{pl.producttitle}</h6>
            {/* <p className="card-text"></p> */}
        </div>
        <div className="card-footer pfoot" style={{ backgroundColor: "white", color: "black" }}>
            <div className="text-center"><i class="fas fa-rupee-sign"></i>{pl.price}</div>
        </div>
    </div>
</div>
 </Link>
 })



//     const dispatch = useDispatch()

//     const product = useSelector(state => state.product.producttitle);
// function loadproduct() {
//     dispatch(Productaction());
// }
    return (
        <div>
            <div className="productcard container">
               
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {/* <div className="col">
                            <div className="card h-100 pcard">
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
                                    <h6 className="card-title text-center">{}</h6>
                                </div>
                                <div className="card-footer pfoot" style={{ backgroundColor: "white", color: "black" }}>
                                    <div className="text-center"><i class="fas fa-rupee-sign"></i> 5,420</div>
                                </div>
                            </div>
                        </div> */}
                        {productlist}
                        {/* <div className="col">
                            <div className="card h-100 pcard" >
                                <img src="https://i.pinimg.com/736x/e4/1f/15/e41f1545bf3e0f8b234482e4e53522b3--saari-embroidery-works.jpg" className="card-img-top" alt="..."
                                    style={{ width: "100%", height: "31.5rem", overflow: "hidden" }} />
                                <div className="card-body">
                                    <h6 className="card-title text-center">PINK TULIP TIE & DYE PURE CHIFFON SAREE</h6>
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
                                </div>
                                <div className="card-footer text-center" style={{ backgroundColor: "white", color: "black" }}>
                                    <div className="text-center">Last updated 3 mins ago</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
            </div>
        </div>

    )
}

export default Mainlistproducts
