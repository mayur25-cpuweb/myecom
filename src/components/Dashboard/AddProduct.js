import axios from 'axios';
import {React,useEffect,useState} from 'react'




export default function AddProduct(props) {

    var logofile;
    const [producttitle, setproducttitle] = useState("");
    const [productid, setproductid] = useState("");
    const [price, setprice] = useState("");
    const [pd, setpd] = useState("");

    // const [address, setaddress] = useState("");
    const [uploadPercentage, setuploadPercentage] = useState("")
  
  
    function setvalue(e) {
      e.target.name=="producttitle" && setproducttitle(e.target.value);
      e.target.name=="productid" && setproductid(e.target.value);
      e.target.name=="price" && setprice(e.target.value);
      e.target.name=="pd" && setpd(e.target.value);

    }  

    function setlogoimage(e){
        logofile=e.target.files[0];
        console.log(logofile);
      }
    function Productsubmit(){
        var formData= new FormData();
        formData.append("id",productid);
        formData.append("title",producttitle);
        formData.append("price",price);
        formData.append("logo",logofile);
        formData.append("pd",pd);

        // useEffect(() => {
        //    axios.post("http://localhost:4000/Addproduct",formData).then((res) => {
        //        console.log(res.data.data);
        //    })
           
        // }, [])

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

    return (
        <div className="" style={{display: 'flex', justifyContent: 'center'}}>
        <form method="post">
  <div class="form">
    <div class="col-md-12 mb-3">
      <label for="validationDefault01">product title</label>
      <input name="producttitle" value={producttitle} onChange={(e)=>{setvalue(e);}} type="text" class="form-control" id="ptitle"/>
    </div>
    <div class="col-md-12 mb-3">
      <label for="validationDefault02">product id</label>
      <input name="productid" value={productid} onChange={(e)=>{setvalue(e);}} type="text" class="form-control" id="pid"/>
    </div>
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
      <input name="pd" value={pd} onChange={(e)=>{setvalue(e);}} type="text" class="form-control" id="validationDefault03"/>
    </div>
    </div>
  <div class="input">
    <div class="custom-file">
      <input type="file" onChange={(e)=>{setlogoimage(e)}} name="logo" value={logofile} className="logo" id="logo"/>
    </div>
    </div>

  <button class="btn btn-primary" type="button" onClick={Productsubmit}>Submit form</button>
<br/>
{uploadPercentage}%
</form>
</div>
    )
}
