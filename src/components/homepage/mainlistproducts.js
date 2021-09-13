import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from "react-router-dom";
import  Productdetail from "../productdetail";
import { useDispatch, useSelector } from 'react-redux';
import  {Productaction}  from "../../actions/productaction";
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for stylesimport { Link } from 'react-router-dom';
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
        <div data-aos="zoom-in-down" className="col" key={pl._id}>
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
var myplist=productlist.slice(0,6)
    return (
        <div>
            <div className="productcard container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {myplist}
                    </div>
                    <br/>
                    <br/>
                    <div class="d-grid col-md-2 mx-auto " >
                   <button className="btn btnshow"
                    style={{backgroundColor:'lightcoral',color:'white'}}
                     type="button">Show More
                     </button>
</div>
            </div>
        </div>

    )
}

export default Mainlistproducts
