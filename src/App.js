// CSS
import './css-reset.css'
import './App.css';

// PAGES
import Home from './home/home';
import Questionnaire from "./questionnaire/questionnaire";
import Results from './results/results';

// PAGE RELATED STUFF
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
      <>
          <div className="App">
              <div id="stripes">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
              <div className="content">
              <Router exact path="/">
                  <div>
                      <Switch>
                          <Route path="/questionnaire">
                              <Questionnaire />
                          </Route>
                          <Route exact path="/">
                              <Home />
                          </Route>
                          <Route path="/results/:topic/:level">
                              <Results />
                          </Route>
                      </Switch>
                  </div>
              </Router>
              </div>
          </div>
    </>
  );
}

export default App;
