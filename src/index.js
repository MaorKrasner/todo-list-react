import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { TasksProvider } from './contexts/tasksContext';
import { SearchProvider } from './contexts/searchContext';

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
