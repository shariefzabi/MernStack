import './App.css';
import Header from "./containers/header.js"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import ProductListing from './containers/productListing';
import ProductComponent from './containers/productComponent';
import ProductDetail from './containers/productDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
   <Router>
    
    <Routes>
      <Route path ="/" exact element={<ProductListing></ProductListing>}></Route>
      <Route path ="/product/:productID" exact element={<ProductDetail/>}></Route>
      <Route >404 Not Found</Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
