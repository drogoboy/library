import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewStudent from './components/ViewStudent';
import AddStudent from './components/AddStudent';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewStudent/>}/>
        <Route path='/add' element={<AddStudent data={{id:'',name:'',grade:''}} 
        method="post"/>}/>
      </Routes>
    </div>
  );
}

export default App;
