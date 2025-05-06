import { StrictMode } from 'react'
import  reactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/globalStyles.js'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'


reactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}/>
  </StrictMode>,
)
