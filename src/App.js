import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Page/Home/Home';
import Navbar from './Page/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
    </div>
  );
}

export default App;
