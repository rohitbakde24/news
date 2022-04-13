import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Business from './Business'
import Entertainment from './Entertainment'
import Head from './Head'
import Health from './Health'
import Home from './Home'
import Science from './Science'
import Sport from './Sport'
import Technology from './Technology'


const Layout = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Head/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/business' element={<Business/>}/>
                    <Route path='/entertainment' element={<Entertainment/>}/>
                    <Route path='/sport' element={<Sport/>}/>
                    <Route path='/technology' element={<Technology/>}/>
                    <Route path='/health' element={<Health/>}/>
                    <Route path='/science' element={<Science/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Layout