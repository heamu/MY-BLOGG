
import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchParams } from "react-router-dom";

const fetchPosts = async (pageParam,searchParams)=>{
   const searchParamsObj = Object.fromEntries([...searchParams]);

      //console.log(searchParamsObj)
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`,{
        params:{page:pageParam,limit:2,...searchParamsObj},
    });
     return res.data
}

function PostList() {
       
   const [searchParams,setSearchParams] = useSearchParams();

    // const{isPending,error,data} = useQuery({
    //     queryKey:['postlist'],
    //     queryFn:()=>fetchPosts(),
    // })

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
      } = useInfiniteQuery({
        queryKey: ['posts',searchParams?.toString()],
        queryFn: ({pageParam = 1})=>fetchPosts(pageParam,searchParams),
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length +1:undefined,
      });
      //console.log(data);

      

    if(status === "pending") return "Loading...";

    if(status === "error") return "An error has occured : "+error.message;

    //console.log(data);

    const allPosts = data?.pages?.flatMap((page)=>page.posts)||[];

    return ( 
        <InfiniteScroll
        dataLength={allPosts.length} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<h4>Loading more posts...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>all posts loaded!</b>
          </p>
        }
        // below props only if you need pull down functionality
      >
        {allPosts.map(post=>(
        <PostListItem key={post._id} post={post}/>
        ))}
      </InfiniteScroll>
        
       
   

     );
}

export default PostList;