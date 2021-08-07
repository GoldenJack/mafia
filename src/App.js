import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { routes } from '@routes';
import { Wrapper } from './ui';
import './App.scss';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%'
  },
});

function App() {
  const classes = useStyles();

  return (
    <Wrapper className={classes.root}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ path, Component, exact }) => (
            <Route
              key={path}
              exact={exact}
              path={path}
              component={Component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
