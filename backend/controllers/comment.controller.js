import Comment from "../models/comment.model.js"
import User from "../models/user.model.js"
import Post from "../models/post.model.js"

export const getPostComments = async(req,res)=>{
   // console.log("mu post id from : ",req.params.postId);
    const comments = await Comment.find({post:req.params.postId})
    .populate("user","username img")
    .sort({createdAt:-1});
    res.status(200).send(comments);
}
export const addComment = async(req,res)=>{

    //const clerkUserId ="user_2qmrZdzywTITlvlftNUB6qtRuV2"
    const clerkUserId = req.auth.userId
     const postId = req.params.poastId

     if(!clerkUserId){
        return res.status(401).json("Not authenticated")  
     }
     
     //console.log("/////////////////////////////////////////")
     //console.log(postId);

     const user = await User.findOne({clerkUserId})

     const newComment = new Comment({
        ...req.body,
        user:user._id,
        post:postId,
     })

     const savedComment = await newComment.save();

     res.status(201).json(savedComment);

}
export const deleteComment = async (req,res)=>{
    console.log("hello from delte")
    const clerkUserId = req.auth.userId
    const id = req.params.id

    if(!clerkUserId){
       return res.status(401).json("Not authenticated")  
    }
  
    const role = req.auth.sessionClaims?.metadata?.role || "user"
    
        if(role=='admin'){
            await Comment.findByIdAndDelete(req.params.id);
           return res.status(200).json("Comment has been delted");
    
        }



    const user = User.findOne({clerkUserId})
    const deleteComment = await Comment.findOneAndDelete({
        _id:id,
        user:user._id,
    })

    if(!deleteComment){
        return res.status(401).json("You can delete your comment")
    }

    res.status(200).json("Comment deleted")
}
