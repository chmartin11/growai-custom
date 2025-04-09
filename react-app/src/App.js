import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'; // Example existing component
import Checkout from './components/Checkout'; // Add this import

function App() {
  return (
    <Router>
      <Route path="/" component={Home} /> {/* Existing route */}
      <Route path="/checkout" component={Checkout} /> {/* Add this route */}
    </Router>
  );
}

export default App;