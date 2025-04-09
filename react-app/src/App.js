import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'; // Your homepage component
import Checkout from './components/Checkout'; // Your checkout component

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} /> {/* Homepage */}
        <Route path="/checkout" component={Checkout} /> {/* Checkout page */}
      </Switch>
    </Router>
  );
}
export default App;