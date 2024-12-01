import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { Layouts } from './components/Layouts/Layout';
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/Login/ProtectedRoute";

function App() {
  return (
     <Router>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Layouts />
            </ProtectedRoute>
          }
        /> 
               <Route path="*" element={<Navigate to="/" />} />
     </Routes>
   </Router>
  );
}

export default App;
