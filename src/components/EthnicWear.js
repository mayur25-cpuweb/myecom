import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for stylesimport { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NightWear from './NightWear';

function EthnicWear() {
    const [ewproduct, setewproduct] = useState([]);
    // const type="CLOTHING"
    var category ="Ethnic Wear"

    useEffect(() => {
        console.log(category);
    axios.post('http://localhost:4000/Wear-list',{category}).then(
        (res)=>{
            console.log(res.data.data);
            setewproduct(res.data.data)
        }
    )
}, []);

 var productlistsw=ewproduct.map((pl)=>{
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
         
            {/* <p>{productdetail.category}</p> */}
            <div className="productcard container">
            <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist" style={{justifyContent:'center'}}>
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
    <button class="nav-link" id="nav-td-tab" data-bs-toggle="tab" data-bs-target="#nav-td" type="button" role="tab" aria-controls="nav-td" aria-selected="false">Suits Set</button>
    <button class="nav-link" id="nav-hs-tab" data-bs-toggle="tab" data-bs-target="#nav-hs" type="button" role="tab" aria-controls="nav-hs" aria-selected="false">Saharara Set</button>
    <button class="nav-link" id="nav-kz-tab" data-bs-toggle="tab" data-bs-target="#nav-kz" type="button" role="tab" aria-controls="nav-kz" aria-selected="false">Lehenga</button>

  </div>
</nav>
<div class="tab-content" id="nav-tabContent">

  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  <br/>
  <div className="row row-cols-1 row-cols-md-3 g-4">

      {productlistsw}
      </div>
      </div>
  <div class="tab-pane fade" id="nav-td" role="tabpanel" aria-labelledby="nav-td-tab">
  <div className="row row-cols-1 row-cols-md-3 g-4">

  {ewproduct.filter(plist => plist.subcat == "Suits Set").map(pl => (
    <Link exact to={`/productdetail/${pl._id}`}>
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
  )
  )
  }
  </div>
  </div>
  <div class="tab-pane fade" id="nav-hs" role="tabpanel" aria-labelledby="nav-hs-tab">
  <div className="row row-cols-1 row-cols-md-3 g-4">

{ewproduct.filter(plist => plist.subcat == "Saharara Set").map(pl => (
  <Link exact to={`/productdetail/${pl._id}`}>
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
)
)
}
</div>

  </div>
  <div class="tab-pane fade" id="nav-kz" role="tabpanel" aria-labelledby="nav-kz-tab">
  <div className="row row-cols-1 row-cols-md-3 g-4">

{ewproduct.filter(plist => plist.subcat =="Lehenga").map(pl => (
  <Link exact to={`/productdetail/${pl._id}`}>
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
)
)
}
</div>
  </div>

</div>
                
                
                       
                    </div>
            </div>

    )
}

export default EthnicWear
