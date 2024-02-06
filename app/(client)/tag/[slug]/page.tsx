import Heading from '@/app/components/Heading'
import PostCard from '@/app/components/PostCard'
import { Post } from '@/app/utils/Interface'
import { client } from '@/sanity/lib/client'
import React from 'react'

interface Params {
  params: {
    slug: string
  }
}

const getPostsPerTag = async (tag: string) => {
  const query = `*[_type == 'post' && references(*[_type == 'tag' && slug.current == "${tag}"]._id)] {
    title,
    excerpt,
      slug,
      _id,
      body,
    tags[]-> {
      _id, name, slug
    } ,
    publishedAt,
  }`

  const posts = await client.fetch(query)
  return posts;
}

export const revalidate = 60;


const page = async ({params}: Params) => {
  const posts: Post[] = await getPostsPerTag(params.slug)
  console.log(posts, 'post per tag')

  return (
    
            <div>
              <Heading title={`#${params?.slug}`} tags />
              <div>
                {posts?.length > 0 && posts?.map((post) => (
                  <PostCard key={post?._id} post={post} />
                ))}
              </div>
            </div>
          )
}

export default page