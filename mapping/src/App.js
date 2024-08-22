import logo from './logo.svg';
import employees from './employees';
import './App.css';

import Details from './components/details';

function showDetails(employees){
    return(
      
      <Details
       key={employees.id} 
       name={employees.name}
       position={employees.position}
       salary={employees.salary}
      />
      
    );
}


function App() {
  return (
    <div className="App">
      <h2>Employee Details</h2>
      
      {employees.map(showDetails)}
    </div>
  );
}




export default App;
