import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './route/land/landing';
import Login from "./route/login/login";
import Signup from './route/signup/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
