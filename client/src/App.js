import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Paint from './pages/Paint/Paint'
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/paint" component={Paint} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
