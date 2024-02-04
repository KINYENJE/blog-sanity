import { client } from "@/sanity/lib/client";
import Heading from "../components/Heading";
import { Post } from "../utils/Interface";
import PostCard from "../components/PostCard";



async function getPosts() {
  const query =`
  *[_type == 'post'] {
    title,
    slug,
    publishedAt,
  }
  `;

  const data = await client.fetch(query)
  return data;

}




export default async function Home() {
  const posts: Post[] = await getPosts()
  console.log(posts, 'posts')


  return (
   <div>
    <Heading title="KINYENJE BLOG" />
    {posts?.length > 0 && posts.map((post: Post) => {
      return (
        <PostCard post={post} key={post._id} />
        
      )
    })}
   </div>
  );
}
