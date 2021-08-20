import axios from 'axios';
import {React,useEffect,useState} from 'react'
import MultiSelect from 'react-multi-select-component';



export default function AddProduct(props) {

    var logofile;
    const [producttitle, setproducttitle] = useState("");
    const [productid, setproductid] = useState("");
    const [price, setprice] = useState("");
    const [pd, setpd] = useState("");

    const [selected, setSelected] = useState([]);

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
        console.log("---31---");
        console.log(logofile);
      }

    function Productsubmit(){
        var formData= new FormData();
        formData.append("id",productid);
        formData.append("title",producttitle);
        formData.append("price",price);
        formData.append("pd",pd);
        console.log(JSON.stringify(selected));
        formData.append("Fruit",JSON.stringify(selected));
        console.log("----43----");
        console.log(logofile)
        formData.append("logo",logofile);

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

    const options = [
      { label: "Grapes", value: "grapes" },
      { label: "Mango", value: "mango" },
      { label: "Strawberry 🍓", value: "strawberry", disabled: true },
      { label: "Watermelon 🍉", value: "watermelon" },
      { label: "Pear 🍐", value: "pear" },
      { label: "Apple 🍎", value: "apple" },
      { label: "Tangerine 🍊", value: "tangerine" },
      { label: "Pineapple 🍍", value: "pineapple" },
      { label: "Peach 🍑", value: "peach" },
    ];
  

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
    <br/>
    <div>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        name="selected"
      />
    </div>
    </div>

  <button class="btn btn-primary" type="button" onClick={Productsubmit}>Submit form</button>
<br/>
{uploadPercentage}%
</form>
</div>
    )
}
