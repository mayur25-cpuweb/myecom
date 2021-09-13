import axios from 'axios';

export function CartAction(u){
    return (dispatch)=>{
        alert("in cartaction");
        dispatch({type:"LOADING_TRUE"});

        axios.post("http://localhost:4000/Cart-list",u).then((res)=>{
            dispatch({type:"LOADING_FALSE"})
            console.log(JSON.stringify(res.data));
            if(res.data.status=="ok")
            {
                alert("dispatched");
                dispatch({type:"CARTLOAD", payload:res.data.data})
            }
            else{
                alert("credential are not correct");
            }
        })


    }
}