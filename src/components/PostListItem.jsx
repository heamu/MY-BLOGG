import Image from "./Image"
import { Link } from "react-router-dom"
const PostLIstItem = ()=>{

    return(
        <div className="flex flex-col xl:flex-row gap-8">
            {/* IMage */}
            <div className="md:hidden xl:block ">
                <Image src="postImg.jpeg" className="rounded-2xl object-cover"/>
            </div>
            {/* details */}
            <div className="">
                <Link to="/test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate similique perferendis praesentium obcaecati, ipsum ratione quia officiis </Link>
            </div>
        </div>
    )
}

export default PostLIstItem