import express from "express"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import connectDB from "./lib/connectDB.js"
import webHookRouter from "./routes/webhook.route.js"
import { clerkMiddleware, requireAuth } from "@clerk/express";
import cors from "cors"
const app = express();

app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());

app.use("/webhooks",webHookRouter);
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// app.get("/test",(req,res)=>{
//     res.status(200).send("it works!")
// })

// app.use("/",(req,res)=>{
//     res.status(200).send("My name is hemanth kumar vaddipalli");
// })
app.use("/users",userRouter);
app.use("/posts",postRouter);
app.use("/comments",commentRouter);



app.listen(3000,()=>{
    connectDB();
    console.log("server is running!!! on port 3000");
})

