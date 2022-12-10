import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
