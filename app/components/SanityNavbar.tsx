import React from 'react'
import Link from 'next/link'
import { BackIcon } from './Icons'
import { Lilita_One } from 'next/font/google'

const font = Lilita_One({ weight: '400', subsets: ['latin'] })

const SanityNavbar = () => {
  return (
    <div className='flex justify-between items-center py-1 px-5'>
      <Link href='/' >
        <BackIcon />
      </Link>

      <div className={`${font.className} text-3xl dark:text-amber-50`}>
            Dev
            <span className="text-purple-500">Blook</span>
      </div>

    </div>
  )
}

export default SanityNavbar