import { useQuery } from "@tanstack/react-query"
import Image from "./Image"
import { Link } from "react-router-dom"
import {format} from 'timeago.js'



const PostLIstItem = ({post})=>{
   

    return(
        <div className="flex flex-col xl:flex-row gap-8 mb-8">
            {/* IMage */}
            {post.img&&<div className="md:hidden xl:block xl:w-1/3">
                <Image src={post.img} className="rounded-2xl object-cover"/>
            </div>}
            {/* details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to={`/${post.slug}`}>{post.title}
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>written by</span>
                    <Link className="text-blue-500 ">John doe</Link>
                    <span>on</span>
                     <Link className="text-blue-500 ">{post.category}</Link>
                     <span>{format(post.createdAt)}</span>
                </div>
                <p className="whitespace-normal  text-wrap">
                    {post.desc}
                </p>
                <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm">Read More</Link>
            </div>
        </div>
    )
}

export default PostLIstItem