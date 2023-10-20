import './App.css'
import AllRoutes from './Routes/AllRoutes'
import Footer from './components/Footer/Footer'

import Navbar from './components/Navbar/Navbar.jsx'

// import LoginAndSignUpPage from './pages/LoginAndSignUpPage'


function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
