import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Auth from './pages/Auth';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user])


  const handleLogout = () => {
    alert('Logout Successfully')
  }
  return (
    <>
      <Routes>
        {!user && <Route exact path='/' element={<Auth auth={() => setUser(true)} />} />}

        {
          user && (
            <>
              <Route exact path='/profile' element={<Profile handleLogout={handleLogout} />} />
              <Route exact path='/dashboard' element={<Dashboard />} />
            </>
          )
        }

        {!user && <Route exact path='*' element={<h1>Page Not Found</h1>} />}

      </Routes>
    </>
  );
}

export default App;
