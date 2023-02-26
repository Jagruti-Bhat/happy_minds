import React from 'react'

const Navbar = () => {
  return (
    <nav class="flex justify-center space-x-4 bg-gradient-to-b from-sky-400	 ...">
      <a href="/" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
  <a href="/Journal" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">My Journal</a>
  <a href="/Session" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Book a session</a>
  <a href="/Resources" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Resources</a>
  <a href="/Login" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Logout</a>
</nav>
  )
}

export default Navbar
