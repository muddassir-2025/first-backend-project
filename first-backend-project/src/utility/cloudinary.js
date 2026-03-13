import {v2 as cloudinary }from "cloudinary"

import fs from "fs" //file system in node.js

 cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,

 }) //this configuration gives u permision to do file upload...

const uploadOnCloudinary=async (localFilePath)=>{
  try {
    if(!localFilePath) return null;
    //upload file on cloudinary
    const response= await cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto"}) //it identifies image/video/pdf

      //console.log("file uploaded on cloudi",response.url); file has been uploaded successfully

      if(fs.existsSync(localFilePath)){
         fs.unlinkSync(localFilePath) // Commented out to keep file in temp folder
      }
      return response;
  } 
  catch (error) {
    if(fs.existsSync(localFilePath)){
     fs.unlinkSync(localFilePath) //remove the locally saved temporary file 
    }
    return null;
  }

}

export {uploadOnCloudinary}
