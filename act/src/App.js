import React from 'react';
import { BrowserRouter, Routes,Route ,Link } from 'react-router-dom';

import About from './about';
import Home from './Home';
import Car from './Car';

export default function App(){
  return(
  
    <BrowserRouter>
      <nav>
        <h1>Benz Rental</h1>
        <div className=''>
          <Link className='link'to="/">Home</Link>

          <Link className='link'to="/about">About</Link>

          <Link className='link'to="/car">Car</Link>

        </div>
      </nav>
    <Routes>
   
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
       <Route path='/car' element={<Car/>}/>
    </Routes>
   
    </BrowserRouter>
   

  )
}