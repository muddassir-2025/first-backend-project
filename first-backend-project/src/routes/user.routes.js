import {Router} from "express";

import {loginUser, logOutUser, newrefreshToken, registerUser} from "../controllers/user.controllers.js"

import {upload} from "../middleware/multer.middleware.js"
import { verifyJwt } from "../middleware/auth.middleware.js";

const router=Router() //router()-error

router.route("/register").post(
    
    upload.fields([{
        name:"avatar", //we use this name to access it in db also
        maxCount:1
    },{
        name:"coverImage", //use this name ()
        maxCount:1
    }]),registerUser //then calling our function

)

router.route("/login").post(loginUser)

//secured routes -> inject middleware,middleware2,...method of page

router.route("/logout").post(verifyJwt , logOutUser)
router.route("/refresh-token").post(newrefreshToken)

export default router


