import { Link } from "react-router-dom";
const MainCategories = ()=>{
    return (
        <div className="hidden md:flex text-gray-800 bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justidy-center gap-8">
          {/* Links */}
          <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to="/posts" className="bg-blue-800 text-white rounded-full px-4 py-2">
            All posts
            </Link>
            <Link to="/posts?cat-web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Web design
            </Link>
            <Link to="/posts?cat-development" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Development
            </Link>
            <Link to="/posts?cat-web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Data Base
            </Link>
            <Link to="/posts?cat-web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Search Engines
            </Link>
            <Link to="/posts?cat-web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Marketing
            </Link>
          </div>
          {/* search */}
          <span className="text-xl font-medium">|</span>
          <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
            <svg
            xmlnx="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="gray"
            >
                <circle  cx="10.5" cy="7.5" r="7.5" />
               <line  x1="16.5" y1="16.5" x2="22" y2="22" /> 

            </svg>
              <input type="text" placeholder="search a post.." className="bg-transparent focus:outline-none  "/>
          </div>
        </div>
    )
}
export default MainCategories;