import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">company</Link>
        <Link to="/contatc">contatc</Link>
        <Link to="/newproject">newproject</Link>
      </div>
      
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contatc" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} /> 
        </Routes>   
      </Container>
      
      <footer>Footer</footer>
    </Router>
  );
}

export default App;
