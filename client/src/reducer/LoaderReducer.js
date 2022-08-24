export const INITIAL_STATE = 0;


const LoaderReducer = (state,{type,payload})=>{

    switch (type) {
        case "loader_start":
            return 100;

            case "loader_end" :
                return 0
    
        default:
            return state;
    }
}

export default LoaderReducer