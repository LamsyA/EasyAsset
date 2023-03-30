import Hero from "./component/Hero"
import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./views/Home"


function App() {


  return (
    <div className='min-h-screen relative'>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
