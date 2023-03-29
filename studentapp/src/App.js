import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components.jsx/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path='/Addbooks'element={Addbook data}={(
            genre:'',published: '',author:'',title:'',publishedby:''}}
            method=''
          )}
        </Routes>
      </Navbar>

      </BrowserRouter>
    </div>
  );
}

export default App;
