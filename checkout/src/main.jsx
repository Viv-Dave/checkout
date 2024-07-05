import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
)
