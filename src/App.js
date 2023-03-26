import logo from './logo.svg';
import './App.css';
import Payment from './Payment';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cancel from './Cancel';
import Store from './Store';
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Car Store</h1>
        <Routes>
          <Route path="/" element={<Payment />}></Route>
          <Route path="/cancel" element={<Cancel/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
