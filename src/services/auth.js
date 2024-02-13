import authInstance from "./instance"


const loginuser=async(user)=>{
    const res = await authInstance.post('/user/signin',user)
    if(res.status!==200){
        throw new Error("Unable to login")
    }
    const data = await res.data
    return data
}

const checkAuth = async()=>{
    const res = await authInstance.get('/user/auth-status')
    if(res.status!==200){
        throw new Error("Token Expired!")
    }
    const data = await res.data
    return data
}

const sendChat = async(message)=>{
    const res = await authInstance.post('/chats/new',{message})
    if(res.status !== 200){
        throw new Error("Unable to send chat!!")
    }
    const data  = await res.data
    return data
}

export default {loginuser,checkAuth,sendChat}