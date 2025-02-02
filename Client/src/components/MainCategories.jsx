import { Link } from "react-router-dom";
import Search from "./Search";
const MainCategories = ()=>{
    return (
        <div className="hidden md:flex text-gray-800 bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justidy-center gap-8">
          {/* Links */}
          <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to="/posts" className="bg-blue-800 text-white rounded-full px-4 py-2">
            All posts
            </Link>
            <Link to="/posts?category=web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Web design
            </Link>
            <Link to="/posts?category=development" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Development
            </Link>
            <Link to="/posts?category=database" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Data Base
            </Link>
            <Link to="/posts?category=seo" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Search Engines
            </Link>
            <Link to="/posts?category=marketing" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Marketing
            </Link>
          </div>
          {/* search */}
          <span className="text-xl font-medium">|</span>
          <Search/>
        </div>
    )
}
export default MainCategories;