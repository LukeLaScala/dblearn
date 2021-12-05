import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import KWayMerge from './KWayMerge';
import Mother from './Mom';
import Bitmap from './Bitmap';

function App() {
  return (
    <Router>
      <div className="h-100">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">DBlearn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="p-2">
                <Link to="/kwaymerge">K-Way Merge</Link>
              </div>
              <div className="p-2">
                <Link to="/bitmap">Bitmap Encoding</Link>
              </div>
              <div className="p-2">
                <Link to="/">Home</Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/kwaymerge">
            <KWayMerge />
          </Route>
          <Route path="/mother">
            <Mother />
          </Route>
          <Route path="/">
            <Bitmap />
          </Route>
        </Switch>
      </Container>
      </div>
    </Router>
  );
}

export default App;
