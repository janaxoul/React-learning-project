import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";


function App() {
  const movieNumber = 2;

  return (
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
