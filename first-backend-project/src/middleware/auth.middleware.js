//creating our middleware ~ it has next -> we use middleware majorly in routes

import { ApiError } from "../utility/Apierror.js";
import asyncHandler from "../utility/asyncHandler.js";
import jwt from "jsonwebtoken"
import {User} from "../models/user.models.js"

export const verifyJwt= asyncHandler(async(req,_,next)=>{
   
try {
        const token=req.cookies?.accessToken||req.header("Authorization")?.replace("Bearer ","")
    
        if(!token){
            throw new ApiError(400,"Unauthorized request")
        }
    
        const decodeToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET) //decode
    
        //in model for jwt boiler there for id we kept name ._id
        const user = await User.findById(decodeToken?._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(404,"invalid access token")
        }
        req.user=user;
        next();

} catch (error) {
    throw new ApiError(404,error?.message||"invalid access")
}

})
