import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home />}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/collection' element={<Collection />}/>
         <Route path='/about' element={<About />}/>

         <Route path='/contact' element={<Contact />}/>
        {/* // <Route path='/product/:productId' element={<Product/>}/>
        // <Route path='/cart' element={<Cart />}/>
        // <Route path='/login' element={<Login />}/>
        // <Route path='/place-order' element={<PlaceOrder />}/>
        // <Route path='/orders' element={<Orders />}/>
        // <Route path='/verify' element={<Verify />}/>   */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
