import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (

        <nav className='flex justify-end p-3 text-[20px] gap-8 font-semibold bg-slate-600 text-white pe-6'>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signup'}>SignUp</Link>
        </nav>

  )
}

export default NavBar