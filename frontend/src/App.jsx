import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Createbooks from "./pages/Createbooks"
import Deletebooks from "./pages/Deletebooks"
import Editbooks from "./pages/Editbooks"
import Showbooks from "./pages/Showbooks"


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/books/create" element={<Createbooks></Createbooks>}></Route>
        <Route path="/books/delete/:id" element={<Deletebooks></Deletebooks>}></Route>
        <Route path="/books/edit/:id" element={<Editbooks></Editbooks>}></Route>
        <Route path="/books/show" element={<Showbooks></Showbooks>}></Route> 
      </Routes>
   
      
    )
}

export default App
