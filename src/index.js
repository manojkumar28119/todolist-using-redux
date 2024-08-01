import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

// Create the root DOM element where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React application inside the root element
root.render(
  <React.StrictMode>
    {/* The Provider component makes the Redux store available to any nested components */}
    <Provider store={store}>
      {/* The main App component that represents the entire application */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Measure and report the performance of the app (optional)
// This function can be used to log performance metrics or send them to an analytics endpoint
reportWebVitals();
