import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import Image from "./Image";
import { format } from "timeago.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";


function Comment({comment,postId}) {

    const {user}=useUser();
    const {getToken} = useAuth();
    
    const role = user?.publicMetadata?.role;



    const queryClient = useQueryClient();

    // const mutation = useMutation({
    //     mutationFn: async()=>{
    //       const token = await getToken();
    //       return  axios.delete(`${import.meta.env.VITE_API_URL}/comments`,{
    //         headers: {  
    //           Authorization: `Bearer ${token}`  
    //       } } )
          
    //     },
    //     onSuccess:()=>{
    //       queryClient.invalidateQueries({queryKey:["comments",postId]});
    //       toast.success("Comment has been deleted")
    //     },
    
    //     onError:(error)=>{
    //       toast.error(error?.response?.data);
    //     }
    //    });

    //console.log(`${import.meta.env.VITE_API_URL}/comments/${comment._id}`);
    const mutation = useMutation({  
        mutationFn: async () => {  
            const token = await getToken();  
            console.log("Token:", token); // Debugging  
            return axios.delete(`${import.meta.env.VITE_API_URL}/comments/${comment._id}`, {  
                headers: { Authorization: `Bearer ${token}` }  
                // Removed data if not required  
            });  
        },  
        onSuccess: () => {  
            queryClient.invalidateQueries({ queryKey: ["comments", postId] });  
            toast.success("Comment has been deleted");  
        },  
        onError: (error) => {  
            console.error("Delete comment error:", error); // More detailed error logging  
            toast.error(error?.response?.data?.message || "An error occurred");  
        }  
    });
    const handelDelete = () => {  
        console.log("Delete button clicked");  
        console.log("Before mutation");  
        mutation.mutate();  
        console.log("After mutation");  
    };

  

//   const mutation = useMutation({
//     mutationFn: async () => {
//       const token = await getToken();
//       return axios.delete(
//         `${import.meta.env.VITE_API_URL}/comments/${comment._id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["comments", postId] });
//       toast.success("Comment has been deleted")
//     },
//     onError: (error) => {
//       toast.error(error.response.data);
//     },
//   });

    return (  
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
            <div className="flex items-center gap-4">
                <Image src={`${comment.user.img}`} className="w-10 h-10 rounded-full object-cover" w="40" />
                <span font-medium>{comment.user.username}</span>
                <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
                {user&& (comment.user.username===user.username||role=='admin')
                && (<span className="text-xs text-red-300 hover:text-red-500 cursor-pointer" onClick={handelDelete}>
                    delete
                     {mutation.isPending=='true'&&
                     <span>
                        (in progress)
                     </span>
                  
                     }
                    </span>)}
            </div>
            <div className="mt-4">
                <p>{comment.desc}</p>
            </div>
        </div>
    );
}

export default Comment;