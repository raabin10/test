import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from"./Pages/Create/Create";
import Home from './Pages/Home/home';
import Login from './Pages/Login/Login';
import AccountSetting from './Pages/AccountSetting/AccountSetting';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Create'element={<Create/>}/>
      <Route path='/AccountSetting'element={<AccountSetting/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
