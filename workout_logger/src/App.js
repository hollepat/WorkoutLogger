import logo from './logo.svg';
import './App.css';

// Components for different pages
import LoginPage from './components/LoginPage';
import LogResultsPage from './components/LogResultsPage';
import MaxWeightGraphPage from './components/MaxWeightGraphPage';
import WorkoutRoutinesPage from './components/WorkoutRoutinesPage';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (

    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!loggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {loggedIn && (
              <React.Fragment>
                <li>
                  <Link to="/log-results">Log Results</Link>
                </li>
                <li>
                  <Link to="/max-weight-graph">Max Weight Graph</Link>
                </li>
                <li>
                  <Link to="/workout-routines">Workout Routines</Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>Welcome to the Workout Logger App!</h1>
          </Route>
          <Route path="/login">
            <LoginPage setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/log-results">
            <LogResultsPage />
          </Route>
          <Route path="/max-weight-graph">
            <MaxWeightGraphPage />
          </Route>
          <Route path="/workout-routines">
            <WorkoutRoutinesPage />
          </Route>
        </Switch>
      </div>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


  );
}

export default App;
