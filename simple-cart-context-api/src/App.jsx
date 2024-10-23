import './App.css'
import Header from './components/Header'
import CartApp from './components/CartApp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {


  return (
    <>
     
     <BrowserRouter >
     <Header />
     <div>
      <Routes>
      <Route path='/' Component={Home} exact />
      <Route path='/cartapp' Component={CartApp}  />
      </Routes>
      </div>
     </BrowserRouter>
     <Footer />
    </>
  )
}

export default App
