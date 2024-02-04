import React from 'react'

interface HeadingProps {
  title: string,

}

const Heading = ({title = ''}) => {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b dark:border-purple-900">
      
        <h1 className='uppercase text-2xl mx-auto max-w-2xl font-bold'>{title}</h1>
      
    </header>
  )
}

export default Heading