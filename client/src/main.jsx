import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
// import Resume from './pages/Resume';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/Home',
        element: <Home/>,
      },
      {
        path: '/Profile',
        element: <Profile />,
      },
      {
        path: '/Signup',
        element: <SignUp />,
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
