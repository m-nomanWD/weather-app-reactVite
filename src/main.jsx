import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Toaster position='top-center' reverseOrder={false} />
    <App />
  </Provider>
)
