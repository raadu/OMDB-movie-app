import './App.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import ErrorPage from './ErrorPage/ErrorPage';
import Header from './Header/Header';
import MovieContextProvider from './contexts/MovieContext';
import {
  BrowserRouter, 
  Route, 
  Switch
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={Login}
        />
        <MovieContextProvider>
        <Route
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <Route exact path="/header" component={Header}/>
        </MovieContextProvider>
        <Route
          path="/"
          component={ErrorPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
