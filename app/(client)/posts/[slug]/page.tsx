import Heading from '@/app/components/Heading'
import { Post } from '@/app/utils/Interface'
import { client } from '@/sanity/lib/client'
import React from 'react'

interface Params {
  params: {
    slug: string
  }

}
export const fetchPost = async (slug:string) => {
  const query = `*[_type == 'post' && slug.current == "${slug}"] {
    title,
    excerpt,
      slug,
      _id,
    tags[]-> {
      _id, name, slug
    } ,
    publishedAt,
   }`

   const post = await client.fetch(query)
   return post;
}

export const revalidate = 60;

const page = async({ params }: Params) => {
  const post: Post[] = await fetchPost(params.slug)
  console.log(post, 'post')

  return (
    <div>
      <Heading title= "Article" />

      <h1>Article</h1>
      {/** POST CONTENT */}
      {post?.length > 0 && post.map((p: Post) => {
        return (
          <div key={p._id}>
            <h2>{p.title}</h2>
            <p>{p.excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}

export default page