import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/axios"

function Login(){

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try {

      const response = await api.post("/users/login", {
        email,
        password
      })

      console.log(response.data)
      setMessage("Login successful 🎉");

      localStorage.setItem("token", response.data.data.accessToken)

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
  

    } catch (error) {
      console.log(error.response?.data)
    }
  }

  return (

    <div>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          placeholder="email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  )

}

export default Login