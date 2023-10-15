import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
// import Resume from './pages/Resume';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/home',
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />,
      }
      {
        path: '/Profile',
        element: <Profile />,
      },
      // {
      //   path: '/Resume',
      //   element: <Resume />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
