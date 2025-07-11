import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Context from './utils/Context.jsx'
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Context>
)
