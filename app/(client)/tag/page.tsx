import Heading from '@/app/components/Heading'
import { Tag } from '@/app/utils/Interface'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import React from 'react'


const fetchAllTags = async () => {
  const query = 
  `*[_type == 'tag'] {
    name,
    slug,
    _id,
    "postCounter": count(*[_type == "post" && references("tags",^._id)])
  }`
  const tags = await client.fetch(query)
  return tags;
}




export const revalidate = 60;

const page = async () => {
  const tags: Tag[] = await fetchAllTags()
  console.log(tags, 'tags')
  return (
    <div>
      <Heading title="Tags" />
      <div>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
                #{tag.name} {tag.postCounter && `(${tag.postCounter})`}
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default page