import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import Main from './pages/Main';
import ErrorPage from './components/ErrorPage';
import PostDetail from './components/PostDetail';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Main/>
        },
        {
          path: 'old_index',
          element: <Navigate to='/'/>
        },
        {
          path: '/categorias/:categoria/post/:id',
          element: <PostDetail/>
        }
      ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
