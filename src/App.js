// CSS
import './css-reset.css'
import './App.css';

// PAGES
import Home from './home/home';
import Questionnaire from "./questionnaire/questionnaire";

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
              <Router>
                  <div>
                      {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                      <Switch>
                          <Route path="/questionnaire">
                              <Questionnaire />
                          </Route>
                          <Route path="/">
                              <Home />
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
