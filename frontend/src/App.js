import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Layouts/Home';
import Welcome from './Layouts/Welcome';
import { Login, Signup } from './pages';
import { Toaster } from 'react-hot-toast';
import { useContext, useEffect } from 'react';
import { Context } from './Context/Context';
import axios from 'axios';

const ProtectedRoute = ({ Comps }) => {
  const { isAuthenticated } = useContext(Context);
  return (
    isAuthenticated ? <Comps /> : <Navigate to={"/login"} />
  )
}

const App = () => {

  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    if (!isAuthenticated) {
      const GetUser = async () => {
        try {
          const { data } = await axios.get('http://localhost:4000/api/v1/users/profile', {
            withCredentials: true,
          });

          if (data) {
            setIsAuthenticated(true);
            setUser(data.user);
            console.log(data.user)
          }
        } catch (error) {
          setUser({});
          console.log(error);
          setIsAuthenticated(false);
        }
      };

      GetUser();
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<ProtectedRoute Comps={Home} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App