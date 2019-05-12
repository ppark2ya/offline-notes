import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "../../Routes/Notes";
import Note from "../../Routes/Note/Note";
import Add from "../../Routes/Add/Add";
import Edit from "../../Routes/Edit/Edit";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/note/:id" component={Note} />
        <Route path="/add" component={Add} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
