//import React from 'react'
//import Dashboard from './pages/Dasboard'
// const App = () => {
  // return (
    // <div>

    // <Dashboard />


    // </div>
  // )
 //}
 
 //export default App


// we are recreating if any bug hit then we fix it later 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
 import Dashboard from "./pages/Dasboard";
 import ProtectedRoute from "./components/routes/ProtectRoutes";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element= {<ProtectedRoute> <Dashboard />  </ProtectedRoute>}  />

      </Routes>

    </BrowserRouter>
  );
}

export default App;