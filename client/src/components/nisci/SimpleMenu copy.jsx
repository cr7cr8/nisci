import React, { useState, useEffect } from 'react';
import { Spring, Transition, Trail, Keyframes, config } from 'react-spring/renderprops';



import { Button, useMediaQuery, CssBaseline, Paper, Menu, MenuItem } from '@material-ui/core';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    container: {

        display: "Grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto",


        borderRadius: 0,
        backgroundColor: "transparent",




        "&:hover": {

            zIndex: 1000,
            backgroundColor: "#c96f61"
        }

    },
    item: {

        alignSelf: "center",
        justifySelf: "start",
        display: "block",
        padding: "0",

        textTransform: "none",
        backgroundColor: "transparent",
        // backgroundColor: "purple",
        //  width: "100%",
        // "&:hover":{
        //     backgroundColor: "#c96f61" 

        // }
    },
    button: {
        color: "white",
        textTransform: "none",
        borderRadius: 0,
        //   backgroundColor: "purple",
        margin: "0",
        fontSize: "1.5em",
        width:"100%",
        "&:hover": {

            backgroundColor: "#a84740",
            // fontWeight:"bold",
        }

    }




}))


const SimpleMenu = ({ children, subtitle, ...props }) => {

    const theme = useTheme();
    const { container, item, button } = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

    const [hover, setHover] = useState(false)

    const [newStyle, setNewStyle] = useState({})
    const [shawdow, setShadow] = useState(0)

    let pannel;

    useEffect(function () {

        //   console.log(pannel)

        setNewStyle({
            position: "absolute",
            padding: 0,
            left: pannel.offsetLeft,
            top: 0
        })

    }, [])

    return (

        <Paper ref={function (e) { return pannel = e }}
            className={container}
            style={newStyle}
            elevation={shawdow}

         
            onMouseEnter={function (e) { setShadow(10); setHover(true) }}
            onMouseLeave={function (e) { setShadow(0); setHover(false) }}
        >

            <div className={item} style={{ justifySelf: "start", }}>
                <Button size="large" style={{ color: "white", fontSize: "1.5em"}} >
                    {children}
                </Button>
            </div>

            {hover && subtitle && subtitle.map((title, index) => {

                return (
                    <div className={item} key={index}>
                        <Button fullWidth={true} key={index} size="large" className={button}>
                            {title}
                        </Button>
                    </div>
                )
            })}





        </Paper>


    );
}

export default SimpleMenu;