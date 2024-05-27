import React from 'react'
import { Link } from 'react-router-dom'

const CategoryHeader = () => {
  return (
    <nav className='category-list' >
        <ul>
            <li>
                <Link>Lego</Link>
            </li>
            <li>
                <Link>Game</Link>
            </li>
            <li>
                <Link>Education</Link>
            </li>
        </ul>
    </nav>
  )
}

export default CategoryHeader