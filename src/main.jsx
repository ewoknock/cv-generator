import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Root from './routes/Root.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Form from './routes/Form.jsx'
import View from './routes/View.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/cv-generator/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <View /> },
      {
        path: "form",
        element: <Form />,
      },
    ],
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
