import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';

import {Home} from './components/nisci';

import SearchBar from "./components/nisci/NavBar"

const useStyles = makeStyles(function (theme) {

  return {




  }

})


function App(props) {

  const classes = useStyles(props)
  const theme = useTheme()

  return (

    <ThemeProvider theme={theme}>
      
      {/* <SearchBar/> */}
      <Home/>

    </ThemeProvider>


  );
}

export default App;
