import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import Counter from "./components/counter";
function App() {
  return (
    <div className="m-2">
      <Counter title="Counter 1" value={1} image="/images/profile.png"/>
      <Counter title="Counter 2" value={2} image="/images/profile.png"/>

    </div>

  );
}

export default App;
