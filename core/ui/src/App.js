import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' component={MenuRoute} />
        <Route exact path='/tictactoe' component={TicTacToeRoute} />
      </Routes>
    </Router>

  )

}

export default App;
