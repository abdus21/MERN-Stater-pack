import axios from 'axios'

export const create = async (name,email,username,password)=>{

    return await axios.post('http://localhost:5050/api/user/register',{
        name,
        email,
        username,
        password
    })
    .then(res=>{
        if(res.status == 200){
            return res
        }else{
            return false
        }
    })
    .catch(error=>{
        return false
    })
}

export const login = async (email,password)=>{

    return await axios.post('http://localhost:5050/api/user/login',{email,password})
    .then(res=>{

        return res
    })
    .catch(error=>{
        return error
    })
}