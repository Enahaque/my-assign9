import './App.css';
import { Routes, Route } from "react-router-dom";
//Routes
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import DashBoard from './Components/DashBoard/DashBoard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/OrderReview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/Dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;

