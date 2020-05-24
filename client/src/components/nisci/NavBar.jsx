import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import { Button, useMediaQuery, CssBaseline, Paper } from '@material-ui/core';

import SarchBar from "./SearchBar";

import Logo from '../../images/logo7.png';
import LogoMob from '../../images/mob.png';

import SearchBar from "./SearchBar";

import MenuIcon from '@material-ui/icons/Menu';
import Tabs from "./Tabs";

import SimpleMenu from "./SimpleMenu";

const useStyles = makeStyles((theme) => ({

  container: {

    // background: "pink",

    display: "Grid",

    gridTemplateColumns: "auto",
    gridTemplateRows: "auto auto",

    borderRadius: "0",

  },

  banner: {


    [theme.breakpoints.up('xs')]: {

      display: "Grid",
      gridTemplateColumns: "auto auto",
      gridTemplateRows: "auto",
    },


    [theme.breakpoints.up('lg')]: {

      display: "Grid",
      gridTemplateColumns: "1fr 2fr 1fr",
      gridTemplateRows: "auto",
    }

  },





  logo: {

    justifySelf: "center",
    alignSelf: "center",


    background: "tan",

    [theme.breakpoints.up('xs')]: {

      justifySelf: "start",
      alignSelf: "center",

    },

    [theme.breakpoints.up('lg')]: {

      justifySelf: "center",
      alignSelf: "center",

    }
  },


  Serach: {

    //  justifySelf:"center",
    alignSelf: "center",


    [theme.breakpoints.up('xs')]: { justifySelf: "center", },

    [theme.breakpoints.up('lg')]: { justifySelf: "right", }
  },


  language: {
    // background: "tan",

    justifySelf: "center",
    alignSelf: "center",


    [theme.breakpoints.up('xs')]: {


    },

    [theme.breakpoints.up('lg')]: {


    }

  },

  navbar: {

    [theme.breakpoints.up('xs')]: {
      display: "Grid",
      gridTemplateColumns: "auto auto",
      gridTemplateRows: "auto",
      backgroundColor: "#a84740",
      padding: "8px"
    },
    [theme.breakpoints.up('lg')]: {
      display: "Grid",
      gridTemplateColumns: "auto",
      gridTemplateRows: "auto",
      padding: "0px"
    },





  },

}));

export default function NavBar() {
  const theme = useTheme();
  const classes = useStyles();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Paper elevation={0} className={classes.container}>



      <div className={classes.banner}>
        <div className={classes.logo}>
          <img src={Logo} style={{ display: "block", width: isLarge ? "100%" : "200%" }} />
        </div>


        {isLarge && <div className={classes.Serach}>

          <SarchBar />

        </div>}




        <div className={classes.language}>

          {isLarge && <Button href="#text-buttons" size="large" style={{ fontSize: "1.5em", color: "#a84740", fontWeight: "bold" }}>
            中文
          </Button>}
          {isLarge && <Button href="#text-buttons" size="large" style={{ fontSize: "1.5em", textTransform: "none" }}>
            English
         </Button>}
        </div>
      </div>





      <div className={classes.navbar} >


        {isLarge && <Tabs />}

    
        {!isLarge && <IconButton><MenuIcon style={{ fontSize: "3em" ,color:"white"}} /></IconButton>}
        {!isLarge && <SearchBar />}

      </div>





    </Paper>
  );
}
