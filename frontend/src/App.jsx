

import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (

    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>

  )
}

export default App
