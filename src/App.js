import './App.css';
import { BrowserRouter, Routes, Route} from   'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CheckProduct from './pages/CheckProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import { Checkout } from './pages/Checkout';

function App() {
  return (
    <>

      <BrowserRouter>

      <Routes>

        <Route path='/' element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Signup />} />
          <Route path='Home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='Product' element={<OurStore />} />
          <Route path='Product/:id' element={<SingleProduct />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='Checkout' element={<Checkout />} />
          <Route path='Blogs' element={<Blog />} />
          <Route path='SingleBlog' element={<SingleBlog />} />
          <Route path='Check-product' element={<CheckProduct />} />
          <Route path='Wishlist' element={<Wishlist />} />
          <Route path='Login' element={<Login />} />
          <Route path='Forgot-password' element={<ForgotPassword />} />
          <Route path='Signup' element={<Signup />} />
          <Route path='Reset-password' element={<ResetPassword />} />
          <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='RefundPolicy' element={<RefundPolicy />} />
          <Route path='ShippingPolicy' element={<ShippingPolicy />} />
          <Route path='TermAndCondition' element={<TermAndCondition />} />
        </Route>

      </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
