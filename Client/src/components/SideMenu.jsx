import Search from "./Search";
import { Link, useSearchParams } from "react-router-dom";

function SideMenu() {
    const [searchParams,setSearchParams] = useSearchParams();
    const handleFilterChange = e=>{

        if(searchParams.get("sort") !==e.target.value)


        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
             sort : e.target.value
        })
    }
    const handleSpanClick = (category)=>{
        if(searchParams.get("category") !==category)
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
             category: category
        })
    }

    return ( 
        <div className="px-4 h-max sticky top-8 ">
            <h1 className="mb-4 text-sm font-medium">Search</h1>
            <Search />
            <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
            <div className="flex flex-col gap-2 text-sm">
                 <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                     <input 
                     className="appearance-none w-4 h-4  border-[1.5px] border-blue-800 rounded-sm checked:bg-blue-800"
                      type="radio"
                       name="sort"
                       onChange={handleFilterChange}
                       value="newest" />
                       Newest
                 </label>
                 <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                     <input 
                     className="appearance-none w-4 h-4  border-[1.5px] border-blue-800 rounded-sm checked:bg-blue-800"
                      type="radio"
                       name="sort"
                       onChange={handleFilterChange}
                       value="popular" />
                       Most Popular
                 </label>
                 <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                     <input 
                     className="appearance-none w-4 h-4  border-[1.5px] border-blue-800 rounded-sm checked:bg-blue-800"
                      type="radio"
                       name="sort"
                       onChange={handleFilterChange}
                       value="trending" />
                       Trending
                 </label>
                 <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                     <input 
                     className="appearance-none w-4 h-4  border-[1.5px] border-blue-800 rounded-sm checked:bg-blue-800"
                      type="radio"
                       name="sort"
                       onChange={handleFilterChange}
                       value="oldest" />
                       Oldest
                 </label>
            </div>
            <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
                 <span className="underline cursor-pointer"  onClick={()=>handleSpanClick("web-design")}  >Web Design</span>
                 <span className="underline cursor-pointer"  onClick={()=>handleSpanClick("development")}  >Development</span>
                 <span className="underline cursor-pointer"  onClick={()=>handleSpanClick("databases")}  >Databases</span>
                 <span className="underline cursor-pointer"  onClick={()=>handleSpanClick("seo")}  >Search Engines</span>
                 <span className="underline cursor-pointer"  onClick={()=>handleSpanClick("marketing")}  >Marketing</span>
                 <span className="underline cursor-pointer"  onClick={()=>handleSpanClick("")}  >All</span>
                 
            </div>
           
        </div>
     );
}

export default SideMenu;