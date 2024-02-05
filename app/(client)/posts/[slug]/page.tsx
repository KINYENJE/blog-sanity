import Heading from '@/app/components/Heading'
import { Post } from '@/app/utils/Interface'
import { client } from '@/sanity/lib/client'
import { VT323 } from 'next/font/google'
import Link from 'next/link'
import React from 'react'


const dateFont = VT323({weight: "400", subsets: ['latin']})

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
      <Heading title= {post[0]?.title} />

      
      {/** POST CONTENT */}
      {post?.length > 0 && post.map((p: Post) => {
        return (
          <div key={p._id} className='text-center'>
            <p>{p.excerpt}</p>
            <span className= {`${dateFont?.className} text-purple-500`}>
              {new Date(p.publishedAt).toDateString()}
            </span>

            <div className="mt-5">
          {p?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                #{tag.name}
              </span>
            </Link>
          ))}
        </div>
          </div>
        )
      })}
    </div>
  )
}

export default page