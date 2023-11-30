import './App.css';
import Cart from './components/cart';
import myStore from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <h1>Cart</h1>
        <Cart />
    </div>
    </Provider>
  );
}

export default App;
