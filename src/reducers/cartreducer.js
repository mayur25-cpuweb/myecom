export function Cartreducer (state=null,action){
    switch(action.type)
    {
        case "CARTLOAD":
                return action.payload;
      
        case "NOTCARTLOAD":
           return null;
        default:               
           return state;
    }
}