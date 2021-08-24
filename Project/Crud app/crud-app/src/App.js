import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Delete from './Components/Delete';
import Home from './Components/Home';
import { UserProvider } from './Components/UserContext';

function App() {
    return (
        <UserProvider>
            <Router>
                <Switch>
                    <Route exact path="/delete/:id" component={Delete} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </UserProvider>
    );
}

export default App;
