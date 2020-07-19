import React from 'react';
import { BookDetails } from './components/BookDetails';
import { Cart } from './components/Cart';
import { Home } from './components/Home';
import { MyOrders } from './components/MyOrders';
import { Header } from './components/Header';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './styles/app.scss';
import { Book, Order, CartItem } from './types';
import { Footer } from './components/Footer';


function App() {

  const [books, setBooks] = React.useState(new Array<Book>());
  const [cartItems, setCartItems] = React.useState(new Array<CartItem>());
  const [orders, setOrders] = React.useState(new Array<Order>());

  React.useEffect(() => {
    getBooks();    
  }, []);

  async function getBooks() {
    var res = await (await fetch('http://localhost:9898/books.json').then((res) => res.json()))
    setBooks(res);
  } 

  function addToCart(newBook: Book) {
    let item: CartItem[] = cartItems.filter(({book}) => book.id === newBook.id);
    if(item.length > 0) {
      item[0].quantity++; 
    } else {
      setCartItems([...cartItems, {book: newBook, quantity: 1}]);
    }
  }

  function addToOrders(newOrders: Order[]) {
    setOrders([...newOrders, ...orders]);
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Route exact path="/" component={() => <Home books={books} addToCart={addToCart} />} />
          <Route exact path="/book/:id" component={() => <BookDetails books={books} addToCart={addToCart} />} />
          <Route exact path="/cart" component={() => <Cart items={cartItems} addToOrders={addToOrders} clearCart={clearCart} />} />
          <Route exact path="/orders" component={() => <MyOrders orders={orders} />} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
