import express from "express"
import User from '../models/user.model.js'
const router = express.Router()
import { getUserSavedPosts,savePost } from "../controllers/user.controller.js"
router.get("/all",async (req,res)=>{
    const clerkUserId = "user_2qmrZdzywTITlvlftNUB6qtRuV2"
    let data = await User.find()  //One({clerkUserId})
    res.status(200).send(data)
})

router.get("/saved",getUserSavedPosts)
router.patch("/save",savePost)
export default router

