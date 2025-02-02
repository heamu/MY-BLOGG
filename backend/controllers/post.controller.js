import Post from '../models/post.model.js'
import User from '../models/user.model.js'
import ImageKit from 'imagekit';
export const getPosts = async (req , res)=>{

 const page = parseInt(req.query.page)||1
 const limit = parseInt(req.query.limit)||2

 const query = {};

 const cat = req.query.category;
 const author = req.query.author;
 const searchQuery = req.query.search;
 const sortQuery = req.query.sort;
 const featured  = req.query.featured;



 
//console.log(cat);

if(cat){
    query.category = cat;
}

//console.log(req.query)

if(searchQuery){
    query.title = {$regex:searchQuery , $options : "i"}
}

if(author){
    const user = await User.findOne({username:author}).select("_id")
    if(!user){
        return res.status(404).json("No post found")
    }

    query.user = user._id;
}
 
let sortObj = {createdAt : -1}
//console.log(sortQuery);
if(sortQuery){
    switch(sortQuery){
        case "newest":
            sortObj = {createdAt : -1}
        break;
        case "oldest":
            sortObj = {createdAt : 1}
        break;
        case "popular":
            sortObj = {visit : -1}
        break;
        case "trending":
        sortObj = { visit: -1 };
        query.createdAt = {
          $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
        };
        break;
      default:
        break;
    }
}   

   if(featured){
    query.isFeatured = true;
   }
   // console.log(query)
    const posts = await Post.find(query).populate("user","username").sort(sortObj).limit(limit).skip((page-1)*limit);
     // console.log(posts);

    const totalPosts = await Post.countDocuments();
    const hasMore = page*limit<totalPosts; 

    res.status(200).send({posts,hasMore});
}


export const getPost = async (req,res)=>{
    //console.log(req.auth.userId)
    const post = await Post.findOne({slug:req.params.slug}).populate("user","username img");

    res.send(post);

}

export const createPost = async (req, res) => {
    
    const clerkUserId = req.auth.userId;
   // console.log("faksf kasbf : " ,req.auth.userId)
    //console.log(req);
  
    if (!clerkUserId) {
      return res.status(401).json("Not authenticated!");
    }
    
    const user = await User.findOne({ clerkUserId:clerkUserId });//"user_2qmrZdzywTITlvlftNUB6qtRuV2"
    
    if (!user) {
      return res.status(409).json("User not found!");
    }
  
    let slug = req.body.title.replace(/ /g, "-").toLowerCase();
  
    let existingPost = await Post.findOne({ slug });
  
    let counter = 2;
  
    while (existingPost) {
      slug = `${slug}-${counter}`;
      existingPost = await Post.findOne({ slug });
      counter++;
    }
  
    const newPost = new Post({ user: user._id, slug, ...req.body });
  
    const post = await newPost.save();
    res.status(200).json(post);
}
// export const createPost = async(req,res)=>{
//     const clerkUserId = req.auth.userId;
//     console.log(clerkUserId)

//     if(!clerkUserId){
//         return res.status(401).json("Please Login");
//     }

//     const user = await User.findOne({clerkUserId:clerkUserId}) ;
//     if(!user){
//         console.log(user._id)
//         res.status(500).send("No user found!!!!!!!!")
//     }
     
//     let slug = req.body.title.replace(/ /g,"-").toLowerCase();

//     let existingPost = await Post.findOne({slug});
//     let counter = 2;
//     while(existingPost){
//         slug = `${slug}-${counter}`;
//         existingPost = await Post.findOne({slug});
//         counter++;
//     }
    
    

//     const newPost = new Post({
//         user:user._id ,slug, ...req.body
//     });

//     const post = await newPost.save();
//     res.status(200).send(post);

// }


export const deletePost = async(req,res)=>{
    const clerkUserId = req.auth.userId;
    // console.log("helahsdfkjbasdd")
    // console.log(clerkUserId)
    // console.log(req.headers)
    if(!clerkUserId){
        return res.status(401).json("Not authenticated");
    }

    const role = req.auth.sessionClaims?.metadata?.role || "user"

    if(role=='admin'){
        await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json("Post has been delted");

    }

    const user = await User.findOne({clerkUserId});

    const deletedPost = await Post.findOneAndDelete({
        _id:req.params.id,
        user:user._id,
    })

    if(!deletedPost){
        return res.status(403).json("You can delete only your posts!")
    }

    res.status(200).json("Post has been delted");

};

const imagekit = new ImageKit({
    urlEndpoint: process.env.IK_URL_ENDPOINT,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY,
  });
  
  export const uploadAuth = async (req, res) => {  
    //console.log('Public Key:', process.env.IK_PUBLIC_KEY);  // Log to check if the public key is available  

    try {  
        const result = imagekit.getAuthenticationParameters();  
        //console.log('Auth Result:', result);  // Log the result  
        res.send(result);  
    } catch (error) {  
        console.error('Error fetching authentication parameters:', error);  
        res.status(500).send({ message: 'Internal Server Error' });  
    }  
};





export const featurePost = async(req,res)=>{
    const clerkUserId = req.auth.userId;
    const postId = req.body.postId;
    // console.log("helahsdfkjbasdd")
    // console.log(clerkUserId)
    // console.log(req.headers)
    if(!clerkUserId){
        return res.status(401).json("Not authenticated");
    }

    const role = req.auth.sessionClaims?.metadata?.role || "user"

    if(role!='admin'){
        //await Post.findByIdAndDelete(req.params.id);
        return res.status(2403).json("you cannot feature post");

    }

    const post = await Post.findById(postId);

    if(!post){
        return res.status(404).json("post not foud")
    }

    const isFeatured = post.isFeatured;

    const updatedPost = await Post.findByIdAndUpdate(postId,{isFeatured:!isFeatured},{new:true});

    res.status(200).json(updatedPost);

};

