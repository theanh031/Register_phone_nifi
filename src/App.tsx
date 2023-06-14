import { Provider } from 'react-redux'
import './App.css'
import { store } from './store'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Phone from './pages/Phone'
import About from './pages/About'
import Header from './components/Header'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  },
  {
    path: "/phone",
    element: <Phone />
  },
  {
    path: "/about",
    element: <About />
  }
])


function App() {

  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
      
    </>
  )
}

export default App
