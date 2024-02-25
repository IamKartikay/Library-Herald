import React,  { useState } from 'react';
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Archive from './pages/Archive';
import Layout from './Layout';
import JournalTile from './Components/JournalTile';
import Journal from './Components/Journal';
import { StateContext } from './context/StateContext';
import AuthorGuidelines from './pages/AuthorGuidelines';
import CopyrightForm from './pages/CopyrightForm';


function App() {
  
  return (
    <StateContext>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={'/archieve'} element={<Archive/>}/>
          <Route path={"/articles"} element={<JournalTile/>} />
          <Route path={'/article'} element={<Journal/>} />
          <Route path={'/authorGuidelines'} element={<AuthorGuidelines/>} />
          <Route path={'/copyright-assignment-form'} element={<CopyrightForm/>} />
        </Route>        
      </Routes>
    </StateContext>
  )
}

export default App
