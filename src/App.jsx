import './App.css'
import Home from './Pages/Home'
import Trending from './Pages/Trending'
import Saved from './Pages/Saved'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextProvider } from './Components/CryptoContext'
import CreateTrendContext, { TrendingContext } from './Components/TrendingContext'
function App() {
 
  return (
    <div className=''>
        <ContextProvider>
         <CreateTrendContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/saved' element={<Saved />} />
        </Routes>
      </BrowserRouter>
      </CreateTrendContext>
      </ContextProvider>
    </div>
  )
}

export default App
