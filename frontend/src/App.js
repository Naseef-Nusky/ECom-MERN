import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'
import { Store } from './Store';
import { useContext } from 'react';
import CartScreen from './screens/CartScreen';
function App() {
  const{state}= useContext(Store);
  const{cart}=state;

  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container' >
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
              <Navbar.Brand>ECom</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart 
                  {cart.cartItems.length> 0 &&(
                    <Badge pill bg="danger">
                       {/* {cart.cartItems.length} */}
                     {cart.cartItems.reduce((a,c)=>a+c.quantity,0)}
                    </Badge>
                  )}
                  </Link> 
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main className='mt-3'>
          <Container>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen/>}></Route>
            <Route path="/product/:id" element={<ProductScreen/>}></Route>
            <Route path="/cart" element={<CartScreen/>}></Route>
            <Route path="/signin" element={<SigninScreen/>}></Route>
            <Route path="/" element={<HomeScreen/>}></Route>
          </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">
            All right reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
