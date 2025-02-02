import User from '../models/user.model.js'




export const getUserSavedPosts = async (req,res)=>{
       //console.log("jfaksdfklashdf")
    //    console.log(req.auth);
    //    console.log("/////////////////////////////////")
    //    console.log(req.headers)
    const clerkUserId = req.auth.userId ;
    if(!clerkUserId){
        return res.status(401).json("Not authenticated!")
    }
    
    const user = await User.findOne({clerkUserId});
    // console.log(user.savedPosts);
    res.status(200).json(user.savedPosts);
}


export const savePost = async (req,res)=>{
    const clerkId = req.auth.userId ;
    const postId = req.body.postId;
    if(!clerkId){
        return res.status(401).json("Not authenticated!")
    }
    
    const user = await User.findOne({clerkUserId:clerkId});
    
    const isSaved = user.savedPosts.some((p)=>p===postId);
    //console.log(isSaved);
    if(!isSaved){
        await User.findByIdAndUpdate(user._id,{
            $push: {savedPosts : postId},
        })
    }
    else{
        await User.findByIdAndUpdate(user._id,{
            $pull: {savedPosts : postId},
        })
    }
    res.status(200).json(isSaved? "Post unsaved":"Post saved");

}