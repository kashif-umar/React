import logo from './logo.svg';
import './App.css';
import { Route,Routes,Link, useNavigate } from 'react-router-dom';
import Heading from './components/Heading';
import List from './components/List';
import MyForm from './components/MyForm';

function App() {
  const navigate=useNavigate();
  return (
    <div className='App'>
    <h1>Routes</h1>
      <Routes>
        <Route path='/Heading' element={<Heading/>} />
        <Route path='/List' element={<List/>} />
        <Route path='/form' element={<MyForm/>} />
      </Routes>
      
     <ul>
     <li><Link to="/Heading">Heading</Link></li>
     <li><Link to="List">List</Link></li>
     <li><Link to="form">MyForm</Link></li>
     </ul>

     <button onClick={()=> navigate('List')}>Take me to List</button>
     
      </div>
  );
}

export default App;
