import { BrowserRouter, Link, Route } from 'react-router-dom'
import CategoryPage from './pages/Categories';
import HomeScreen from './pages/home/homeScreen';
import Shipping from './pages/Shipping';
import Login from './pages/Login'
import SignUp from './pages/Register';
import adminPage from './pages/adminPage';
import AdminSignIn from './pages/AdminSignin';
import VendorPage from './pages/VendorPage';
import VendorSignIn from './pages/VendorSignin';
import ProductPage from './pages/ProductPage';
import BlogPage from './pages/Blog';
import UserPage from './pages/UserPage';


function App() {
  
  return (
    <div>
      <BrowserRouter>
      
      <Route path="/blog" component={BlogPage}/>
      <Route path="/products/" component={ProductPage}/>
        <Route path="/adminLogin" component={AdminSignIn}/>
        <Route path="/vendorLogin" component={VendorSignIn}/>
        <Route path="/admin" component={adminPage}/>
        <Route path="/user" component={UserPage}/>
        <Route path="/vendor" component={VendorPage}/>
        <Route path="/register" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/shipping" component={Shipping}/>
        <Route path="/category" component={CategoryPage}/>
        <Route path="/" exact={true} component={HomeScreen}/>
  
      </BrowserRouter>
    </div>
  );
}

export default App;