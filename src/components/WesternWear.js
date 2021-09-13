import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for stylesimport { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';


function WesternWear() {
    const [Wwproduct, setWwproduct] = useState([]);
    // const type="CLOTHING"
    var category ="Western Wear"

    useEffect(() => {
        console.log(category);
    axios.post('http://localhost:4000/Wear-list',{category}).then(
        (res)=>{
            console.log(res.data.data);
            setWwproduct(res.data.data)
        }
    )
}, []);
 var productlist=Wwproduct.map((pl)=>{
    return <Link exact to={`/productdetail/${pl._id}`}>
        <div data-aos="zoom-in"><p>{pl.category}</p>
    {/* <Link exact to={`/productdetail/${pl._id}`}> */}
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
</div>
</Link>

 })
    return (
        <div>
             <div className="productcard container">
          

               <div className="row row-cols-1 row-cols-md-3 g-4">
               {productlist}
        </div>
        </div>
            </div>
        
    )

}
AOS.init();

export default WesternWear