import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/Global.css';
import Create from './Components/Create';
import Delete from './Components/Delete';
import Home from './Components/Home';
import Read from './Components/Read';
import Update from './Components/Update';
import { UserProvider } from './Components/UserContext';

function App() {
    return (
        <UserProvider>
            <Router>
                <Switch>
                    <Route exaxt path="/update/:id" component={Update} />
                    <Route exact path="/create" component={Create} />
                    <Route exaxt path="/read/:id" component={Read} />
                    <Route exact path="/delete/:id" component={Delete} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </UserProvider>
    );
}

export default App;
