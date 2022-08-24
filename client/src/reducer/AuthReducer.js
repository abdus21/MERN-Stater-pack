
export const INITIAL_STATE = {
    isLogged : false,
    user :{}
}


const AuthReducer = (state,{type,payload})=>{


    switch (type) {
        case "sign_up":
            return {
                isLogged : true,
                user : payload

                
            };
            case "log_out" :
                return {
                    isLogged : false,
                    user : {}
                }
    
        default:
            return state;
    }
}

export default AuthReducer