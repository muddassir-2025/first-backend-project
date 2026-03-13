import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"
import multer from "multer"

const app=express()

//express comfigurations :

//app.use(cors({}))

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(cookieparser())

app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(express.static("public"))

//import all routes here  : (there export to use here)
import userRoute from './src/routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRoute)

//IMPORTANT: Error handling for Multer/Busboy (Optional but helpful)
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: err.message });
    }
    next(err);
});

export { app }