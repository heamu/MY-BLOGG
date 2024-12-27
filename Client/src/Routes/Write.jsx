import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css'


const Write = ()=>{
     const {isLoaded,isSignedIn} = useUser();

     if(!isLoaded){
        return <div>Loading...</div>
     }
     if(isLoaded&&!isSignedIn){
        return <div>You Should sign in...</div>
     }

    return (
        <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
             <h1 className="text-xl font-light">Create a new post</h1>
             <form className="flex flex-col gap-6 flex-1 mb-6" >
                 <button className="w-max  p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white"> Add a cover image</button>
                 <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="My Awesome Story" />
                 <div className="flex items-center gap-4">
                    <label htmlFor="" className="text-sm">choose a category:</label>
                    <select className="p-2 rounded-xl bg-white shadow-md" name="cat" id="">
                        <option value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="databases">Databases</option>
                        <option value="seo">Search Engines</option>
                        <option value="marketing">Marketing</option>
                    </select>
                 </div>
                 <textarea className="p-4 rounded-xl bg-white shadow-md focus:outline-none" name="desc" id="" placeholder="A short Description"/>
                 <ReactQuill theme="snow" className="flex-1 rounded-xl  bg-white shadow-md" />
                <button className="bg-blue-800 text-white font-medium rounded-xl w-36 p-2">Send</button>
             </form>
        </div>
    );
}
export default Write