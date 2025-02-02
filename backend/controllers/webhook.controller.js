import User from '../models/user.model.js'
import { Webhook } from 'svix'

export const clerkWebHook = async (req,res)=>{
    console.log("askldjfhHemanthKumarvaddipalliIamkingoftheWorld");
 
    const WEBHOOK_SECRET = process.env.CLERK;

    console.log(WEBHOOK_SECRET);
   

    if(!WEBHOOK_SECRET){
        throw new Error("There is no web hook secret");
    }

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);

    let evt;
    try{
        evt = wh.verify(payload,headers);

    }catch(err){
        res.status(400).json({
            message:"webhook verification falied",
        });
    }
   
    
     //console.log(evt.data);


    if(evt.type=="user.created"){
        const newUser = new User({
            clerkUserId:evt.data.id,
            username:evt.data.username,
            email:evt.data.email_addresses[0].email_address,
             img:evt.data.profile_img_url
        });
        await newUser.save()

        //console.log("userId : ",evt.data.id);
    }
    return res.status(200).json({
        message:"Webhook received",
    })

}
