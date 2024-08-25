import logo from './logo.svg';
import './App.css';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
     <Location name="Kashif Umar" location="Indore" />
     <Location name="Rishi Agarwal" location="Coimbatore" />
     <Location name="Rohit Sahu" location="Kochi" />
     <Location name="Dushyant" location="Chennai" />
    </div>
  );
}

export default App;
