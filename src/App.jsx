import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import CodeSnippets from './components/CodeSnippets'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header/>
        <Hero/>
        <Projects/> 
        <CodeSnippets/>
        <About/>
        <Contact/>
        <Footer/>
      </>
    )
  }
])

const App = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <RouterProvider router={router}/>
    </div>  
  )
}

export default App