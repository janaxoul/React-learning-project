import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Details from "./components/Details"
import Create from "./components/Create"

function App() {
  return (
    <div className='h-screen w-screen flex'>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>

      
    </div>
  )
}

export default App