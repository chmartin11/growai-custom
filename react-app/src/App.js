import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import ContentGenerator from './ContentGenerator';
import PaymentPage from './PaymentPage';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <Route exact path="/" component={() => window.location.href = '[invalid url, do not cite] />
      <Route path="/home" component={Home} />
      <Route path="/content-generator" component={ContentGenerator} />
      <Route path="/payment" component={PaymentPage} />
      <Route path="/blog" component={Blog} />
    </Router>
  );
}

export default App;