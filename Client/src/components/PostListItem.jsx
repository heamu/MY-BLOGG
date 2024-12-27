import Image from "./Image"
import { Link } from "react-router-dom"
const PostLIstItem = ()=>{

    return(
        <div className="flex flex-col xl:flex-row gap-8">
            {/* IMage */}
            <div className="md:hidden xl:block xl:w-1/3">
                <Image src="postImg.jpeg" className="rounded-2xl object-cover"/>
            </div>
            {/* details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate similique perferendis praesentium obcaecati .
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>written by</span>
                    <Link className="text-blue-500 ">John doe</Link>
                    <span>on</span>
                     <Link className="text-blue-500 ">Web Design</Link>
                     <span>2 days ago</span>
                </div>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, facilis eaque placeat commodi hic nam cupiditate officiis fugiat optio consequuntur rem tenetur beatae iure aliquid, aliquam suscipit praesentium! Fugit, minus.
                </p>
                <Link to="/test" className="underline text-blue-800 text-sm">Read More</Link>
            </div>
        </div>
    )
}

export default PostLIstItem