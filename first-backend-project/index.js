import dotenv from "dotenv"

dotenv.config({
  path: "./.env"
})

import connectDB from "./src/db/index.js";
import {app} from './app.js'

connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{ //express is in app.js
        console.log(`server is running at port : ${process.env.PORT}`)
    })

})
.catch((err)=>{
    console.log("MONGODB ERROR!!",err) //if you write diff password it will show MONGO DB ERROR!! -- u can debug
})

