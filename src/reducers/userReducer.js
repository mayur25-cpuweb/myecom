export function user (state=null,action){
    switch(action.type)
    {
        case "Login_user":
                return action.payload;
      
        case "LOGOUT_USER":
                  
           return null;
        default:               
           return state;
    }
}