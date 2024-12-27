import Image from "../components/Image";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Comments from "../components/Comments";
import PostMenuActions from "../components/PostMenuActions";
const SinglePostPage = ()=>{

    return (
        <div className="flex flex-col gap-8">
               
               {/* Detail */}
               <div className="flex gap-8">
                  <div className="lg:w-3/5 flex flex-col gap-8">
                     <h1 className="text-xl md:text:3xl xl:text-4xl 2xl:text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates perferendis molestiae eligendi. 
                     </h1>
                     <div className="flex items-center gap-2 text-gray-400 text-sm">
                     <span>Written by</span>
                     <Link className="text-blue-500 ">John doe</Link>
                     <span>on</span>
                     <Link className="text-blue-500 ">Web design</Link>
                     <span>2 days ago</span>
                     </div>
                      <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla velit nihil incidunt enim sit officia porro ipsam ratione officiis provident, dicta dolor repellendus laborum ipsa pariatur, quam explicabo beatae.
                      </p>
                  </div>
                  <div className="hidden  lg:block w-2/5">
                    <Image src="postImg.jpeg" className="rounded-2xl" />
                  </div>
               </div>
               {/* content */}
               <div className="flex flex-col md:flex-row gap-8">
                {/* text */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quisquam, ratione sed quibusdam voluptatibus temporibus aliquid voluptates earum. Doloribus harum mollitia obcaecati velit, perferendis eveniet iusto repellat accusamus dignissimos ducimus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quae recusandae inventore ipsa necessitatibus molestias quis optio, maiores quo consectetur debitis ea tenetur velit repellendus? Nisi officiis voluptates dolor inventore?
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae laudantium, blanditiis labore eum consequatur tempore ea sit itaque natus voluptatibus fuga magnam aut delectus doloribus fugit inventore. Magnam, officiis ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore non quam a. Blanditiis, accusantium alias quibusdam accusamus tempora vel! Voluptatum vitae magnam iusto culpa reprehenderit esse deserunt, architecto corporis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae laudantium, blanditiis labore eum consequatur tempore ea sit itaque natus voluptatibus fuga magnam aut delectus doloribus fugit inventore. Magnam, officiis ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore non quam a. Blanditiis, accusantium alias quibusdam accusamus tempora vel! Voluptatum vitae magnam iusto culpa reprehenderit esse deserunt, architecto corporis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae laudantium, blanditiis labore eum consequatur tempore ea sit itaque natus voluptatibus fuga magnam aut delectus doloribus fugit inventore. Magnam, officiis ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore non quam a. Blanditiis, accusantium alias quibusdam accusamus tempora vel! Voluptatum vitae magnam iusto culpa reprehenderit esse deserunt, architecto corporis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae laudantium, blanditiis labore eum consequatur tempore ea sit itaque natus voluptatibus fuga magnam aut delectus doloribus fugit inventore. Magnam, officiis ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore non quam a. Blanditiis, accusantium alias quibusdam accusamus tempora vel! Voluptatum vitae magnam iusto culpa reprehenderit esse deserunt, architecto corporis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae laudantium, blanditiis labore eum consequatur tempore ea sit itaque natus voluptatibus fuga magnam aut delectus doloribus fugit inventore. Magnam, officiis ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore non quam a. Blanditiis, accusantium alias quibusdam accusamus tempora vel! Voluptatum vitae magnam iusto culpa reprehenderit esse deserunt, architecto corporis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae laudantium, blanditiis labore eum consequatur tempore ea sit itaque natus voluptatibus fuga magnam aut delectus doloribus fugit inventore. Magnam, officiis ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore non quam a. Blanditiis, accusantium alias quibusdam accusamus tempora vel! Voluptatum vitae magnam iusto culpa reprehenderit esse deserunt, architecto corporis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae laudantium, blanditiis labore eum consequatur tempore ea sit itaque natus voluptatibus fuga magnam aut delectus doloribus fugit inventore. Magnam, officiis ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore non quam a. Blanditiis, accusantium alias quibusdam accusamus tempora vel! Voluptatum vitae magnam iusto culpa reprehenderit esse deserunt, architecto corporis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae laudantium, blanditiis labore eum consequatur tempore ea sit itaque natus voluptatibus fuga magnam aut delectus doloribus fugit inventore. Magnam, officiis ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore non quam a. Blanditiis, accusantium alias quibusdam accusamus tempora vel! Voluptatum vitae magnam iusto culpa reprehenderit esse deserunt, architecto corporis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae laudantium, blanditiis labore eum consequatur tempore ea sit itaque natus voluptatibus fuga magnam aut delectus doloribus fugit inventore. Magnam, officiis ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore non quam a. Blanditiis, accusantium alias quibusdam accusamus tempora vel! Voluptatum vitae magnam iusto culpa reprehenderit esse deserunt, architecto corporis!
                    </p>
                </div>
                {/* menu */}
                 <div className="px-4 h-max sticky top-8">
                    <h1 className=" mb-4 text-sm font-medium">Author</h1>

                    <div className="flex flex-col gap-4">
                    <div className="flex items-center ">
                        <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover"
                         w='48'
                         h='48'
                        />
                        <Link>John doe</Link>
                    </div>
                        <p className="text-sm text-gray-500 ">Lorem ipsum Lorem ipsum dolor sit amet </p>
                        <div className="flex gap-2">
                            <Link>
                            <Image src="facebook.svg"/>
                            </Link>
                            <Link>
                              <Image src="instagram.svg"/>
                            </Link>
                        </div>
                        </div>
                    <PostMenuActions />
                    <h1>Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                    <Link className="underline"></Link>
                    <Link className="underline" to="/">
                    Web Design
                    </Link>
                    <Link className="underline" to="/">
                    Development
                    </Link>
                    <Link className="underline" to="/">
                    Databases
                    </Link>
                    <Link className="underline" to="/">
                    Search Engines
                    </Link>
                    <Link className="underline" to="/">
                    Marketing
                    </Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
                    <Search />
                 </div>
               </div>
            <Comments />
        </div>
    );
}
export default SinglePostPage