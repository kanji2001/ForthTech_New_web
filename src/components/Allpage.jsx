import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Service from './Service'
import Product from './Product'
import Contact from './Contact'
import Blog from './pages/Blog'
import Services from './Services'
import Content from './pages/Content'

function Allpage() {
  return (
    <>
        <div>
            <Home/>
            <About/>
            <Service/>
            <Product/>
            <Content/>
          <Services/>

            {/* <Contact/> */}
            {/* <Blog/> */}
        </div>
    </>
  )
}

export default Allpage