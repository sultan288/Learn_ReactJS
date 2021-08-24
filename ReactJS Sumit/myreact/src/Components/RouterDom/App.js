import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Dashboard from './Dashboard';
import Error from './Error';
import Home from './Home';
import Navbar from './Navbar';
import Posts from './Posts';
import Services from './Services';

export default function App() {
    const isLoggedIn = true;
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                {/* <Route exact path="/Services" render={() => <Services number="5" />} /> */}
                <Route exaxt path="/Services">
                    <Services number="5" />
                </Route>
                <Route exact path="/Posts/:category/:topic" component={Posts} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/login">
                    {isLoggedIn ? <Redirect to="/dashboard" /> : <Home />}
                </Route>

                <Route component={Error} />
            </Switch>
        </Router>
    );
}
