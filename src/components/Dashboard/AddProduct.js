import axios from 'axios';
import {React,useEffect,useState} from 'react'
import MultiSelect from 'react-multi-select-component';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink,Route,Switch,Link} from "react-router-dom";


export default function AddProduct(props) {
 
  const user = useSelector(state => state.user);

  var vendorEmail=user.email;
    var logofile;
    const [producttitle, setproducttitle] = useState("");
    const [productid, setproductid] = useState("");
    const [price, setprice] = useState("");
    const [pd, setpd] = useState("");
    const [category, setcategory] = useState("");
    const [subcat, setsubcat] = useState("");


    var options1;
    const [selected, setSelected] = useState([]);

    // const [address, setaddress] = useState("");
    const [uploadPercentage, setuploadPercentage] = useState("")
  if (category==="Ethnic Wear") {
    options1 = [
      { label: "None", value: "None" },
      { label: "Suits Set", value: "Suits Set" },
      { label: "Saharara Set", value: "Saharara Set" },
      { label: "Lehenga", value: "Lehenga" },
    ];
  } else if (category==="Western Wear"){
    options1 = [
      { label: "None", value: "None" },
      { label: "dresses", value: "dresses" },
      { label: "Jump-Suit", value: "Jump-Suit" },
      { label: "Coord Set", value: "Coordset" },
    ];
  } else if (category==="Sarees"){
    options1 = [
      { label: "None", value: "None" },
      { label: "Tie And Die Saree", value: "Tie&DieSaree" },
      { label: "Handpainted Saree", value: "Handpainted Saree" },
      { label: "Kota zariya", value: "Kota zariya" },

    ];
  }
  
    function setvalue(e) {
      e.target.name=="producttitle" && setproducttitle(e.target.value);
      e.target.name=="productid" && setproductid(e.target.value);
      e.target.name=="price" && setprice(e.target.value);
      e.target.name=="pd" && setpd(e.target.value);
      e.target.name === "category" && setcategory(e.target.value);
      e.target.name === "subcat" && setsubcat(e.target.value);

      // e.target.name === "typev" && settypev(e.target.value);
    }  

    function setlogoimage(e){
        logofile=e.target.files[0];
        console.log("---31---");
        console.log(logofile);
      }

    function Productsubmit(){
      if (category=="") {
        alert("Please select a category");
      }else{
        var formData= new FormData();
        formData.append("vendorEmail",vendorEmail)
        formData.append("category",category);
        formData.append("subcat",subcat);
        formData.append("id",productid);
        formData.append("title",producttitle);
        formData.append("price",price);
        formData.append("pd",pd);
        console.log(JSON.stringify(selected));
        formData.append("Fruit",JSON.stringify(selected));
        console.log("----43----");
        console.log(logofile)
        formData.append("logo",logofile);

        axios.post("http://localhost:4000/Addproduct",formData,{
            headers:{
                'Content-type': 'multipart/form-data'
            },
            onUploadProgress:function (progressEvent) {
                console.log("file upload progress: " + progressEvent);
                setuploadPercentage(parseInt(Math.round((progressEvent.loaded/progressEvent.total)*100)));
            }
        }).then((res)=>{
            alert("Upload formData success");
            
        }).catch((err)=>{
            alert("Upload formData error");
        })
    }
  }

    const options = [
      { label: "S", value: "S" },
      { label: "M", value: "M" },
      { label: "L", value: "L"},
      { label: "XL", value: "XL" },
      { label: "XXL", value: "XXL" },
      { label: "XXXL", value: "XXXL" },
      { label: "XXXXL", value: "XXXXL" },
      { label: "5XL", value: "5XL" },
    ];
    // var progress=document.getElementById("#progress");
    // progress.style.display="block"
  
    return (
      <>
      <div class="card text-dark bg-light mb-3 ">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title text-center">Add A Product</h5>
<div className="Container-fluid" style={{display: 'flex', justifyContent: 'center'}}>
    <form method="post" class="col-md-6 row gy-2 gx-3"> 
  <div class="col-auto">
    {/* <label class="visually-hidden" for="autoSizingInput">Name</label> */}
    {/* <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe"/> */}
  </div>
 

  <div class="col-auto">
  <label for="inputGroupSelect04" >Category</label>
  <div class="input-group">
  <select class="form-select" id="category" value={category} name="category" onChange={(e)=>{setvalue(e)}}>
  <option Selected>Choose...</option>
    <option value="Ethnic Wear">Ethnic Wear</option>
    <option value="Western Wear">Western Wear </option>
    <option value="Sarees">Sarees</option>
    <option value="Night Wear">Night Wear</option>
    <option value="Jewellery">Jewellery</option>
  </select>
  </div>
  </div>
  {/* sub category */}
  {/* {productdetail && JSON.parse(productdetail.selected).map((option) => (
              <option value={option.value}>{option.label}</option>
            ))} */}
   <div class="col-auto">
  <label for="inputGroupSelect04" >Type</label>
  <div class="input-group">
  <select class="form-select" id="inputGroupSelect04"  value={subcat} name="subcat" onChange={(e)=>{setvalue(e)}}>
    {options1 && (options1).map((option)=>(
      <>
      <option value={option.value}>{option.label}</option></>
    ))}

  </select>
  </div>
  </div>

    <div class="col-md-12 mb-3">
      <label for="validationDefault01">product title</label>
      <input name="producttitle" value={producttitle} onChange={(e)=>{setvalue(e);}} type="text" class="form-control" id="ptitle"/>
    </div>
    <div class="col-md-12 mb-3">
      <label for="validationDefault02">product id</label>
      <input name="productid" value={productid} onChange={(e)=>{setvalue(e);}} type="text" class="form-control" id="pid"/>
    </div>
  <div class="form">
    <div class="col-md-12 mb-3">
      <label for="validationDefault03">Price</label>
      <input name="price" value={price} onChange={(e)=>{setvalue(e);}} type="text" class="form-control" id="validationDefault03"/>
    </div>
    </div>
    <div class="form">
    <div class="col-md-12 mb-3">
      <label for="validationDefault03">Product Description</label>
      <textarea name="pd" value={pd} onChange={(e)=>{setvalue(e);}} type="text" class="form-control" id="validationDefault03"/>
    </div>
    </div>
    <div>

      <h3>Select Size</h3>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        name="selected"
      />
    </div>
    <br/>
  <div class="input">
    <div class="custom-file">
      <input type="file" onChange={(e)=>{setlogoimage(e)}} name="logo" value={logofile} className="logo" id="logo" Multiple/>
    </div>
    <br/>
    
    </div>
    </form>
    </div>

    <Link to="/dashboard"><button class="btn btn-primary" type="button" onClick={Productsubmit}>Submit form</button></Link>
<br/>
{/* <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;"
   aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div> */}
<br/>
<div className="progress container" style={{width:"50%"}} id="progress">
  <div className="progress-bar progress-bar-striped progress-bar-animated text-center" role="progressbar" 
  aria-valuenow={`${uploadPercentage}%`} aria-valuemin="0" aria-valuemax="100" 
  style={{width:`${uploadPercentage}%`}}>
   <span style={{fontSize:"20px"}}> {uploadPercentage}%</span>
  </div>
</div>
  </div>
  </div>
</>
    )
}
