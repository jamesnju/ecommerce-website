import Link from 'next/link'
import React from 'react'

const NaVBarTop = () => {
  return (
    <div className='hidden lg:block '>
        <div className="container flex">
            <div className="flex w-fit gap-9 mx-auto font-medium py-4 text-blackish">
                <Link className='navbar_links relative' href='#' >Home</Link>
                <Link className='navbar_links relative' href='#' >CATEGORIES</Link>
                <Link className='navbar_links relative' href='#' >MEN</Link>
                <Link className='navbar_links relative' href='#' >WOMEN</Link>
                <Link className='navbar_links relative' href='#' >PERFUME</Link>
                <Link className='navbar_links relative' href='#' >BLOGS</Link>
                <Link className='navbar_links relative' href='#' >CHILDREN</Link>
                <Link className='navbar_links relative' href='#' >GROCERIES</Link>
            </div>
            
            
        </div>
    </div>
  )
}

export default NaVBarTop