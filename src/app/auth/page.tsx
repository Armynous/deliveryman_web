import React from 'react'
import CreateForm from './CreateForm'
import './style.css'

export default function page() {
  return (
    <main className='w-9/12 mx-4'>
      <h2 className="text-primarytext text-center">
        <span className='text-white'>Sign Up</span>
      </h2>
      <CreateForm />
    </main>
  )
}
