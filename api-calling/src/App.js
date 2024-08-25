import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Fact from './components/fact';


function App() {
  const nav=useNavigate();
  return (
    <div className="App">
        <Routes>
          <Route path='/fact' element={<Fact/>}/>
          
        </Routes>
        

        <button onClick={()=>nav('fact')}>Load Cat Fact</button> 
        
    </div>
  );
}

export default App;
