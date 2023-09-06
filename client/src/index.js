import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import {UserProvider} from "./contexts/UserContext"
import { RecipeBookProvider } from './contexts/RecipeBookContext';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <RecipeBookProvider>
        <App />
      </RecipeBookProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
