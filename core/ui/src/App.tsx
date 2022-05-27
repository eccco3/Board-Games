import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { MenuRoute } from './routes/menu/menu';
import { TicTacToeRoute } from './routes/tic-tac-toe/tic-tac-toe';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<MenuRoute />} />
          <Route path='/tictactoe' element={<TicTacToeRoute />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
