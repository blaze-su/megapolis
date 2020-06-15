import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import { TaskEditPage } from "pages/Tasks/TaskEditPage";
import { TasksPage } from "pages/Tasks/TasksPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/edit/:taskId">
                        <TaskEditPage />
                    </Route>
                    <Route path="/">
                        <TasksPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
