import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import AllUsers from './components/AllUsers';
import Profile from './components/Profile';
import AddVoiture from './components/AddVoiture';
import AllVoiture from './components/AllVoiture';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users/:name" element={<Profile/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/allUsers' element={<AllUsers/>} />
        <Route path='/cars/addcars' element={<AddVoiture/>} />
        <Route path='/cars/' element={<AllVoiture />} />
        <Route path='/cars/' />

        <Route path='/*' element={<NotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
