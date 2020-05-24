import React, { useState, useEffect, useRef } from 'react';
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
        backgroundColor: "#a84740",

        fontSize: "1.5em",
        width: "100%",

        justifyContent: "left",


        "&:hover": {

            backgroundColor: "#c96f61"
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

    const pannel = useRef();
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)
    const [width, setWidth] = useState(0)
    useEffect(function () {

        //  console.log(pannel.current.offsetHeight)
        setTop(pannel.current.offsetHeight)
        setLeft(pannel.current.offsetLeft)
        setWidth(pannel.current.offsetWidth)
        setNewStyle({
            position: "absolute",
            padding: 0,
            left: pannel.current.offsetLeft,
            top: 0
        })

    }, [])

    return (
        <>
            <Paper ref={pannel}
                className={container}
                style={newStyle}
                elevation={shawdow}



                onMouseEnter={function (e) { setShadow(0); setHover(true) }}
                onMouseLeave={function (e) { setShadow(0); setHover(false) }}
            >

                <div className={item} style={{ justifySelf: "start", }}



                >
                    <Button size="large" style={{ color: "white", fontSize: "1.5em" }} >
                        {children}
                    </Button>
                </div>
            </Paper>

            {hover && <Paper

                onMouseEnter={function (e) { setHover(true) }}
                onMouseLeave={function (e) {  setHover(false) }}
                style={{ position: "absolute", left: left, top: top, zIndex: 999, borderRadius: 0 ,minWidth:width}} elevation={20}>

                {subtitle && subtitle.map((title, index) => {

                    return (
                        <div key={index}>
                            <Button
                                fullWidth={true} key={index} size="large"
                                className={button}
                            >
                                {title}
                            </Button>
                        </div>
                    )
                })}

            </Paper>}

        </>


        /* {hover && subtitle && subtitle.map((title, index) => {
    
                    return (
                        <div className={item} key={index}>
                            <Button fullWidth={true} key={index} size="large" className={button}>
                                {title}
                            </Button>
                        </div>
                    )
                })} */



    );
}

export default SimpleMenu;