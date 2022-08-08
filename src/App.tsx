import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import User from './pages/user/User';
import UserList from './pages/userList/UserList';
import './styles/app.scss'

function App() {
  return (
    <Router>
      <Topbar/>
        <div className="containerApp">
          <Sidebar/>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* users */}
            <Route path='/users' element={<UserList />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/newUser' element={<NewUser />} />
            {/* end-users */}

            {/* products */}

            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newProduct' element={<NewUser />} />

            {/* end-products */}
          </Routes>
        </div>
    </Router>
  );
}

export default App;
