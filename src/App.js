import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <div className="App">




      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>



    </div>
  );
}

export default App;
