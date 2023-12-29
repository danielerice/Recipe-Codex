import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import {UserProvider} from "./contexts/UserContext"
import { RecipeBookProvider } from './contexts/RecipeBookContext';


// Importing the Bootstrap CSS
import './styles.css';
import 'bootstrap/dist/js/bootstrap.min.js'


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
