import axios from "axios";

const baseurl = "http://localhost:3000/api"


const authInstance = axios.create({
    baseURL:baseurl,
    timeout:5000,
    headers:{
        "Content-Type":"application/json"
    },
    withCredentials:true
})



export default authInstance