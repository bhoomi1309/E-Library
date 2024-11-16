import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AuthorizationLayout from './pages/Authorization/AuthorizationLayout';
import Login from './pages/Authorization/Login';
import Register from './pages/Authorization/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';
import Resources from './pages/Resources/Resources';
import Layout from './pages/Layout/Layout';
import ResourceDetails from './pages/ResourceDetails/ResourceDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<AuthorizationLayout />}>
              <Route path='/auth/login' element={<Login />} />
              <Route path='/auth/register' element={<Register />} />
            </Route>
            <Route path='/library' element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path='/library/resources' element={<Resources />} />
              <Route path='/library/resources/:ISBN' element={<ResourceDetails />} />
              <Route path='/library/search' element={<Search />} />
              <Route path='/library/profile' element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
