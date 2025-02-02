import express from "express"
import { addComment, deleteComment, getPostComments } from "../controllers/comment.controller.js"

const router = express.Router()

router.delete("/:id",deleteComment)
router.get("/:postId",getPostComments)
router.post("/:poastId",addComment
)



export default router