import Post from '../models/post.model.js'

export const getPosts = async (req , res)=>{
 
    const posts = await Post.find();

    res.send(posts);
}


export const getPost = async (req,res)=>{
    const post = await Post.findOne({slug:req.params.slug});

    res.send(post);

}

export const createPost = async(req,res)=>{
    
    const newPost = new Post(req.body);
    const post = await newPost.save();
    res.status(200).send(post);

}
export const deletePost = async(req,res)=>{
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).send(post);
    
}
