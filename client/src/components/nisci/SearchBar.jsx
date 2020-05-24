import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button, useMediaQuery, CssBaseline } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({


    search: {
    
        display: "Grid",
        gridTemplateColumns: "auto auto",
        gridTemplateRows: "1fr",

        background:"white",

        borderRadius: "100px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#aaa",

        [theme.breakpoints.up('xs')]: {

        },

        [theme.breakpoints.up('lg')]: {
         
        }

    }
}))

const SearchBar = () => {

    const theme = useTheme();
    const classes = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));


    return (
        <div className={classes.search}>



            <InputBase


                placeholder="Search…"
                // inputProps={{ 'aria-label': 'search' }}
                style={{

                    borderTopLeftRadius: "100px",
                    borderBottomLeftRadius: "100px",
                    
                    background: "white",
                    paddingLeft:isLarge ? "0.8em" : "0.8em",
                    fontSize: isLarge ? "1.2em" : "3.6em"

                }}
            />
            <IconButton style={{
                display: "block",
                justifySelf: "center",
                alignSelf: "center",
                background: "#a84740",
                padding: "1px",
            }}
            
         
            >
                <SearchIcon

                    style={{


                        color: "white",
                        fontSize: isLarge ? "1.2em" : "3.6em"
                    }}
                />
            </IconButton>



        </div>




    );
}

export default SearchBar;