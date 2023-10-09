import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
// import Matchup from './pages/Matchup';
// import Vote from './pages/Vote';
// import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    //errorElement: <NotFound />,
    children: [
     
      //   path: '/matchup',
      //   element: <Matchup />
      // }, {
      //   path: '/matchup/:id',
      //   element: <Vote />
      // },
    ],
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
