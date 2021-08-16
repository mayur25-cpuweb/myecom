import axios from 'axios';

export function Productaction(){
    return (dispatch)=>{
        alert("in check productaction");
        dispatch({type:"LOADING_TRUE"});

        axios.post("http://localhost:4000/productlist").then((res)=>{
            dispatch({type:"LOADING_FALSE"})
            alert(JSON.stringify(res.data));
            console.log(res.data)
            if(res.data.status=="ok")
            {
                dispatch({type:"LOAD", payload:res.data.data})
            }
            else{
                alert("credential are not correct");
            }
        })


    }
}