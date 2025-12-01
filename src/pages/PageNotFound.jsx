import React from 'react'
import { Link } from 'react-router-dom'
import pageNotFound from '../assets/pageNotFound.png'
import useTitle from '../hooks/useTitle'

export default function PageNotFound() {
    useTitle("PageNotFound");
  return (
    <main>
        <section className='flex flex-col justify-center px-2'>
            <div className='flex flex-col items-center my-4'>
                <p className='text-4xl text-gray-700 font-bold my-10 dark:text-white text-center'>404 Page Not Found!</p>
                <div className='max-w-xs'>
                    <img src={pageNotFound} alt='404'/>
                </div>
            </div>
            <div className='flex justify-center my-4'>
                <Link to="/">
                    <button type='button' className='w-48 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2'>
                        Back to Home
                    </button>
                </Link>
            </div>
        </section>
    </main>
  )
}
