import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-h-screen max-w-screen-lg mx-5'>
   <App />
   </div>
  </React.StrictMode>,
)
