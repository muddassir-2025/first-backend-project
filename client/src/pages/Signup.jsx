import { useState } from "react"
import api from "../api/axios"

function Signup(){

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [avatar,setAvatar] = useState(null)

  const handleSignup = async (e)=>{
    e.preventDefault()

    try{

      const formData = new FormData()

      formData.append("username",username)
      formData.append("email",email)
      formData.append("password",password)
      formData.append("avatar",avatar)

      const response = await api.post(
        "/users/register",
        formData,
        {
          headers:{
            "Content-Type":"multipart/form-data"
          }
        }
      )

      console.log(response.data)
      setMessage("signup successful 🎉");

    }catch(error){
      console.log(error.response?.data)
    }
  }

  return(

    <form onSubmit={handleSignup}>

      <input
        placeholder="username"
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        placeholder="email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <input
        type="file"
        onChange={(e)=>setAvatar(e.target.files[0])}
      />

      <button type="submit">
        Signup
      </button>

    </form>
  )
}

export default Signup