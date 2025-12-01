import React from 'react'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'

export default function HomePage() {
  return (
    <main className='bg-white dark:bg-gray-900'>
      <Hero/>
      <Featured/>
      <Testimonial/>
      <Faq/>
    </main>
  )
}
