import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppwriteContext ,client } from './Appwrite/AppwriteContext.js'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <AppwriteContext.Provider value={client}>
      <App/>
    </AppwriteContext.Provider>
  </React.StrictMode>,
)
