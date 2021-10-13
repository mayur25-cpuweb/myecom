import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function ListProduct() {
    const [productlist, setproductlist] = useState([]);
    const user = useSelector(state => state.user);
    var email = user.email
// alert(uemail)
    useEffect(() => {
        axios.post('http://localhost:4000/productlist',{email}).then(
            (res)=>{
                console.log(res.data.data);
                setproductlist(res.data.data)
            }
        )
    }, []);
    var productlistvendor=productlist.map((pl)=>{
        return(
            <tr key={pl._id}>
            <th scope="row">{pl._id}</th>
            
            <td scope="row">
            <div className="Container " >
                <img src={ pl.logo ?  `http://localhost:4000/${pl.logo}` : "http://pesmcopt.com/admin-media/images/dummy-product-image.jpg"}
            className="container"alt={pl.logo}/>
            </div>
            
            </td>
            <td>{pl.producttitle}</td>
            <td>{pl.price}</td>
            <td >{pl.pd}</td>
            <td>{pl.category}</td>
            <td>{pl.subcat}</td>
            <td>
                <button ClassName="btn btn-primary">Update</button>
                <button ClassName="btn btn-danger">Delete</button>

            </td>
          </tr>
        )

    });
    return (
        <div class="table-responsive">
            <h1>List Product</h1>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">image</th>
      <th scope="col">Name</th>
      <th scope="col">product price</th>
      <th scope="col">product description</th>
      <th scope="col">product Category</th>
      <th scope="col">product Type</th>
      <th scope="col">Action</th>


    </tr>
  </thead>
  <tbody>
   {productlistvendor}
  </tbody>
</table>
        </div>
    )
}

export default ListProduct
