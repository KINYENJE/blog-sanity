import { tag } from '@/sanity/schemas/tag'
import Link from 'next/link'
import React from 'react'

// interface HeadingProps {
//   title: string,
//   tags?: boolean,
// }

const Heading = ({title = '', tags = false}) => {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b dark:border-purple-900">
      
        <h1 className='uppercase text-2xl mx-auto max-w-2xl font-bold'>{title}</h1>

        {tags && (
          
                <Link href={`/tag`}>
                  <div className="mb-2 p-2 text-sm lowercase  text-purple-500">
                    #tags 
                  </div>
                </Link>
        )}
      
    </header>
  )
}

export default Heading