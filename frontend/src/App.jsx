import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'

function App() {
  const isUserSignedIn = !!localStorage.getItem("token"); //!! -> to boolean

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        {isUserSignedIn && <Route path='/account' element={<Account/>}/>}
      </Routes>
    </div>
  )
}

export default App
