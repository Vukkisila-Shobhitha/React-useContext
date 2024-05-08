import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import { DataProvider } from './context/DataContext'
import Navbar from "./Navbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  return (
    <>
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
        <ToastContainer />
      </DataProvider>
    </>
  )
}

export default App