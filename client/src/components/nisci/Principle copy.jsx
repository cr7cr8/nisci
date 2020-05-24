import React, { useState, useRef, useEffect, useCallback } from 'react';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core/';


import { InputBase, TextField, Paper, IconButton, Button, Divider, Typography, useMediaQuery } from '@material-ui/core';


const useStyles = makeStyles(theme => ({

    container: {
        display: "Grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto",

        [theme.breakpoints.up('xs')]: {

          
        },

        [theme.breakpoints.up('lg')]: {

        },


    }
}))

const Principle = () => {

    const theme = useTheme();
    const { container } = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <div className={container}>



        </div>
    );
}

export default Principle;