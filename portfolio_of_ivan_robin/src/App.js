import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
