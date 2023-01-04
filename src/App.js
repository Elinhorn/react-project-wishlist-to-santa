import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import WishForm from './pages/WishForm';
import AllWishes from './pages/AllWishes';


function App() {

  return (
    <BrowserRouter>
      <header><h1>WISHLIST TO SANTA</h1>
      <div>
      <Link to='/'>MAKE A WISH</Link>
      <Link to='wishes'>VIEW ALL WISHES</Link>
      </div>
      </header>
    <Routes>
      <Route path='/' element={ <WishForm/> }></Route>
      <Route path='wishes' element={ <AllWishes/> }></Route>
    </Routes>  
    </BrowserRouter>

    
  );
}

export default App;
