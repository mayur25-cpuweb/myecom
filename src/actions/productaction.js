import axios from 'axios';

export function Productaction(pd){
    return (dispatch)=>{
        // alert("in check productaction");
        dispatch({type:"LOADING_TRUE"});

        axios.post("http://localhost:4000/product-detail",pd).then((res)=>{
            dispatch({type:"LOADING_FALSE"})
            // alert(JSON.stringify(res.data));
            // alert("in 11 line in action product")
            console.log(res.data)
            if(res.data.status=="ok")
            {
                dispatch({type:"LOAD", payload:res.data.data[0]})
            }
            else{

                alert("Could not fetch product");
            }
        })


    }
}