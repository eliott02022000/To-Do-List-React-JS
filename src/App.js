import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header'
import todo from './Components/todo'



function App() {
  return (
    <Router>
      <div>
        <Route path={`/`} component = {Header}/>
        <Route path={`/todo`} component = {todo}/>
      </div>
    </Router>
  );
}

export default App;
