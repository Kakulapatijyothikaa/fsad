import React from 'react';
import { RouterProvider, createBrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from "./pages/Profile";
import Login from "./Login";

const router = createBrowserRouter([
  {path: '/',element: <Login />},
    
  { path: '/profile', element: <Profile /> } 
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;