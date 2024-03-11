import axios from './axios'

export const Login=(user)=>axios.post(`/adminlogin`, user)

export const Verify=()=>axios.get(`/adminverify`)