import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter,RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { RagDescription } from './pages/RagDescription.tsx'
import { Layout } from './components/Layout.tsx'
import "./style.css"
const router=createHashRouter([
  {
   path:"/",
   element:<Layout/>,
   children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:"/rag",
      element:<RagDescription/>
    }
   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
