import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from '../components/PostList'
const Homepage = ()=>{
  console.log("Hello world i am in home page");
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
  console.log(PUBLISHABLE_KEY);
    return (
        <div className= "mt-4 flex flex-col gap-4">
             {/* BREAD CRUMB */}
             <div className="flex gap-4">
               <Link to="/">Home</Link>
               <span>*</span>
               <span className="text-blue-800" >Blogs and Articles</span>
             </div>
       {/* INTRODUCTION */}
       <div className="flex items-center justify-between">
          {/* titles */}
          <div className="">
            <h1 className="text-blue-500 text-2xl md:text-5xl lg:text-6xl font-bold">
              Welcome to Blogg!!!!
              
            </h1>
             <p className="mt-8 text-md md:text-xl">“Capture the Moments That Matter: Transform Your Thoughts into Engaging Stories That Resonate.”</p>
          </div>
           {/* animated button */}
           <Link to="/write" className="  hidden md:block relative" >
             <svg
              viewBox="0 0 200 200"
              width="200"
              height='200'
              className="text-lg tracking-widest animate-spin animatedButton"
             >
              <path 
              id="circlePath"
              fill="none"
               d="M 100,100 m -75 , 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
              <text>
                <textPath href="#circlePath " startOffset="0%"> Write your story</textPath>
                <textPath href="#circlePath" startOffset="50%"> Share your idea</textPath>
                
              </text>

             </svg>
             <button className=" absolute top-0 left-0 right-0 bottom-0 m-auto bg-blue-800 w-20 h-20 rounded-full flex items-center justify-center">
              <svg

               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               width="50"
               height="50"
               fill="none"
               stroke="white"
               strokeWidth="2"
              
              >
                <line x1="6" x2="18" y1="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
             </button>
           </Link>

       </div>
       {/* MAIN CATEGORIES*/}
       <MainCategories/>
       {/* FEATURED POSTS*/}
       <FeaturedPosts />
       {/* POSTS LIST */}
      <div className="">
        <h1 className="mb-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
        </div>
    );
}
export default Homepage