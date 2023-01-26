import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Add from './AddPages/Add'
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
   <Footer />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Add" element={<Add />}/>

    </Routes>
    
  </BrowserRouter>
  )
}


export default App;
