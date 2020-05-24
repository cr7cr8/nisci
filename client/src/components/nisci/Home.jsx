import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core/';


import { InputBase, TextField, Paper, IconButton, Button, Divider, Typography, useMediaQuery } from '@material-ui/core';

import NavBar from "./NavBar"
import PicShow from "./PicShow"
import Content1 from "./Content1"
import Content2 from "./Content2"
import Principle from "./Principle"
import News from "./News"
import Active from "./Active"
import Footer from "./Footer"

import SearchBar from "./SearchBar"

const useStyles = makeStyles(theme => ({

    container: {
        display: "Grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto auto auto auto auto auto auto auto",
        //    background: "pink"

        "&>div:nth-of-type(1)": {
            gridColumn: "1/2",
            gridRow: "1/2",

        },
        "&>div:nth-of-type(2)": {
            gridColumn: "1/2",
            gridRow: "2/3",
        },
        "&>div:nth-of-type(3)": {
            gridColumn: "1/2",
            gridRow: "3/4",
        },
        "&>div:nth-of-type(4)": {
            gridColumn: "1/2",
            gridRow: "4/5",
        },
        "&>div:nth-of-type(5)": {
            gridColumn: "1/2",
            gridRow: "5/6",
        },
        "&>div:nth-of-type(6)": {
            gridColumn: "1/2",
            gridRow: "6/7",
        },
        "&>div:nth-of-type(7)": {
            gridColumn: "1/2",
            gridRow: "7/8",
        },
        "&>div:nth-of-type(8)": {
            gridColumn: "1/2",
            gridRow: "8/9",
        },
    },
    header: {
        background: "#ccc",
    },
    navbar: {
        background: "tan"
    },

}))


const Home = (props) => {

    const classes = useStyles(props)
    const theme = useTheme();

    const [height, setHeight] = useState(0)
    const [showButton, setShowButton] = useState(true)
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));


    const InnerFunction = useCallback(() => {
        return (

            isLarge
                ? <Container><Content2 /></Container>
                : <Content2 />
        )

    });

    // useEffect(function(){

    // },[InnerFunction])


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />


            <div className={classes.container}>

                <div>
                    <NavBar />

                </div>


                <div style={{ height: height, overflow: "hidden", position: "static" }}

                    onMouseEnter={function (e) { setShowButton(true) }}
                    onMouseLeave={function (e) { setShowButton(false) }}
                >


                    <PicShow height={height} setHeight={setHeight} showButton={showButton} />


                </div>




                {isLarge && <div style={{ marginTop: "20px" }}>

                    {isLarge ? <Container><Content1 /></Container> : <Content1 />}


                </div>}

                <div style={{ marginTop: "20px" }}>

                    {isLarge ? <Container><Content2 /></Container> : <Content2 />}

                    {/* <InnerFunction /> */}
                </div>

                <div style={{ marginTop: "30px", marginBottom: "0px" }}>
                    {isLarge ? <Container><Principle /></Container> : <Principle />}
                </div>

                <div style={{ marginTop: "30px", marginBottom: "0px" }}>
                    {isLarge ? <Container><News /></Container> : <News />}
                </div>

                <div style={{ marginTop: "30px", marginBottom: "0px" }}>


                    {isLarge ? <Container><Active /></Container> : <Active />}
                </div>

                <div style={{ marginTop: "0px", marginBottom: "300px" }}>


                    {isLarge ? <Container><Footer /></Container> : <Footer />}
                </div>



            </div>

        </ThemeProvider>
    );
}

export default Home;