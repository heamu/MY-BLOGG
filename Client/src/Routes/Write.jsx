import { useAuth, useUser } from "@clerk/clerk-react";  
import ReactQuill from "react-quill-new";  
import 'react-quill-new/dist/quill.snow.css';  
import { useMutation } from "@tanstack/react-query";  
import axios from "axios";  
import { useEffect, useState } from "react";  
import { useNavigate } from "react-router-dom";  
import { toast } from "react-toastify";  
import { IKContext, IKUpload } from "imagekitio-react";  
import Upload from "../components/Upload";  

const Write = () => {  
    const [value, setValue] = useState('');  
    const [cover, setCover] = useState('');  
    const [img, setImg] = useState('');  
    const [video, setVideo] = useState('');  
    const [progress, setProgress] = useState(0);  
    const { isLoaded, isSignedIn } = useUser();  
    const { getToken } = useAuth();  
    const navigate = useNavigate();  

    useEffect(() => {  
        if (img) {  
            setValue(prev => prev + `<p><image className="w-30 h-30" src="${img.url}"></p>`);  
        }  
    }, [img]);  

    useEffect(() => {  
        if (video) {  
            setValue(prev => prev + `<p><iframe class="ql-video" src="${video.url}"></iframe></p>`);  
        }  
    }, [video]);  

    const mutation = useMutation({  
        mutationFn: async (newPost) => {  
            const token = await getToken();  
            return axios.post(`${import.meta.env.VITE_API_URL}/posts/`, newPost, {  
                headers: {  
                    Authorization: `Bearer ${token}`  
                }  
            });  
        },  
        onSuccess: (res) => {  
            toast.success("Post has been created");  
            navigate(`/${res.data.slug}`);  
        },  
        onError: (error) => {  
            toast.error(`Error: ${error.message}`); // Display error message  
        }  
    });  

    if (!isLoaded) {  
        return <div>Loading...</div>;  
    }  
    if (isLoaded && !isSignedIn) {  
        return <div>You should sign in...</div>;  
    }  

    function handleSubmit(event) {  
        event.preventDefault();  
        const formData = new FormData(event.target);  

        const data = {  
            img: cover.filePath || "", // Ensure cover image is set correctly  
            title: formData.get("title"),  
            category: formData.get("category"),  
            desc: formData.get("desc"), // Use 'desc' instead of 'decs'  
            content: value  
        };  

        console.log("Submitting data:", data); // Log the data to check structure  
        mutation.mutate(data);  
    }  

    return (  
        <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">  
            <h1 className="text-xl font-light">Create a new post</h1>  
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">  

                <Upload type="image" setProgress={setProgress} setData={setCover}>  
                    <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">Add a cover image</button>  
                </Upload>  

                <input name="title" required className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="My Awesome Story" />  
                <div className="flex items-center gap-4">  
                    <label htmlFor="" className="text-sm">Choose a category:</label>  
                    <select name="category" className="p-2 rounded-xl bg-white shadow-md">  
                        <option value="general">General</option>  
                        <option value="web-design">Web Design</option>  
                        <option value="development">Development</option>  
                        <option value="databases">Databases</option>  
                        <option value="seo">Search Engines</option>  
                        <option value="marketing">Marketing</option>  
                    </select>  
                </div>  
                <textarea name="desc" className="p-4 rounded-xl bg-white shadow-md focus:outline-none" placeholder="A short description" />  

                <div className="flex">  
                    <div className="flex flex-col gap-2 mr-2 cursor-pointer">  
                        <Upload type="image" setProgress={setProgress} setData={setImg}>📷</Upload>  
                        <Upload type="video" setProgress={setProgress} setData={setVideo}>🎥</Upload>  
                    </div>  
                    <ReactQuill value={value} onChange={setValue} readOnly={(0 < progress && progress < 100)} theme="snow" className="flex-1 rounded-xl bg-white shadow-md" />  
                </div>  
                <button  
                    type="submit"  
                    disabled={mutation.isPending || (0 < progress && progress < 100)}  
                    className="bg-blue-800 text-white font-medium rounded-xl w-36 p-2">  
                    {mutation.isPending ? "Loading" : "Send"}  
                </button>  
                {progress > 0 && <span>Progress: {progress}%</span>}  
                {mutation.isError && <span className="text-red-500">{mutation.error.message}</span>}  
            </form>  
        </div>  
    );  
}  

export default Write;



// import { useAuth, useUser } from "@clerk/clerk-react";
// import ReactQuill from "react-quill-new";
// import 'react-quill-new/dist/quill.snow.css'
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import {  useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import {IKContext,IKUpload} from "imagekitio-react"
// import Upload from "../components/Upload";

// const Write = ()=>{
//     const [value,setValue] = useState('');
//     const [cover,setCover] = useState('');
//     const [img,setImg] = useState('');
//     const [video,setVideo] = useState('');
//     const [progress,setProgress] = useState(0);
//      const {isLoaded,isSignedIn} = useUser();
//       const {getToken} = useAuth();
//       const navigate = useNavigate();

//      useEffect(()=>{
//         img&&setImg(prev=>prev+`<p><image src="${img.url}"></p>`)
//      },[img])
//      useEffect(()=>{
//         video&&setVideo(prev=>prev+`<p><iframe class="ql-video" src="${img.url}"></p>`)
//      },[video])

//      const mutation = useMutation({
//       mutationFn :async (newPost)=>{
//          const token = await getToken();
//          return  axios.post(`${import.meta.env.VITE_API_URL}/posts/`,newPost,{
//             headers:{
//                Authorization:`Bearer ${token}`
//             }
//          })
//       },
//       onSuccess:(res)=>{
//          toast.success("post has been created");
//          navigate(`/${res.data.slug}`);
//       }
//       })

//      if(!isLoaded){
//         return <div>Loading...</div>
//      }
//      if(isLoaded&&!isSignedIn){
//         return <div>You Should sign in...</div>
//      }
     
//      function handleSubmit(event){
//       event.preventDefault();
//       const formData = new FormData(event.target)

//       const data = {
//          img:cover.path||"",
//          title:formData.get("title"),
//          category:formData.get("category"),
//          decs:formData.get("decs"),
//          content:value
//       }
      
//       mutation.mutate(data)


//      }

     
//     return (
//         <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
//              <h1 className="text-xl font-light">Create a new post</h1>
//              <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6" >

//                <Upload type="image" setProgress={setProgress} setData={setCover}>
//                <button className="w-max  p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white"> Add a cover image</button>
//                </Upload>
                 

                 
                 
//                  <input name="title" required className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="My Awesome Story" />
//                  <div className="flex items-center gap-4">
//                     <label htmlFor="" className="text-sm">choose a category:</label>
//                     <select name="category" className="p-2 rounded-xl bg-white shadow-md"  id="">
//                         <option value="general">General</option>
//                         <option value="web-design">Web Design</option>
//                         <option value="development">Development</option>
//                         <option value="databases">Databases</option>
//                         <option value="seo">Search Engines</option>
//                         <option value="marketing">Marketing</option>
//                     </select>
//                  </div>
//                  <textarea name="desc" className="p-4 rounded-xl bg-white shadow-md focus:outline-none"  id="" placeholder="A short Description"/>
//                  <div className="flex ">
//                      <div className="flex flex-col gap-2 mr-2 cursor-pointer">
                     
//                      <Upload type="image" setProgress={setProgress} setData={setImg}>📷</Upload>
//                      <Upload type="video" setProgress={setProgress} setData={setVideo}>🎥</Upload>
                     
//                      </div>
//                  <ReactQuill value={value} onChange={setValue} readOnly={(0<progress&&progress<100)} theme="snow" className="flex-1 rounded-xl  bg-white shadow-md" />    
//                   </div>
//                 <button 
//                 type="submit"
//                 disabled={mutation.isPending || (0<progress&&progress<100)}
//                 className="bg-blue-800 text-white font-medium rounded-xl w-36 p-2">

//                   {mutation.isPending?"Loading":"Send"}
//                   </button>
//                   {("Progress:"+progress)}
//                   {mutation.isError&&<span>{mutation.error.message}</span>}
//              </form>
//         </div>
//     );
// }
// export default Write





