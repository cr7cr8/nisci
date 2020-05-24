import React, { useState, useRef, useEffect,  } from 'react';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core/';


import { InputBase, TextField, Paper, IconButton, Button, Divider, Typography, useMediaQuery } from '@material-ui/core';


import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';

import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

const useStyles = makeStyles(theme => ({

    container: {
        display: "Grid",


        // textAlign: "center",
        justifyItems: "center",
        //        justifyContent:"end",


        [theme.breakpoints.up('xs')]: {

            gridTemplateColumns: "auto",
            gridTemplateRows: "auto",
        },

        [theme.breakpoints.up('lg')]: {

            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto",
        },


        "&>div:nth-of-type(1)": {
            //    backgroundColor: "pink",

        },
        "&>div:nth-of-type(2)": {
            //  backgroundColor: "tan",

        },
    },

    card2: {
        display: "Grid",
        //   width:"100%",

        alignItems: "center",

        overflow: "hidden",


        [theme.breakpoints.up('xs')]: {
            gridTemplateColumns: "auto ",
            gridTemplateRows: "auto auto",
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: "auto ",
            gridTemplateRows: "1fr 4fr",
        },



        "&>div:nth-of-type(1)": {

            gridRow: "1/2",
            //   padding: "10px",

            // backgroundColor: "#eee",
            zIndex: 20
        },
        "&>div:nth-of-type(2)": {
            position: "static",
            height: "auto",
            color: "white",
            gridRow: "2/3",
            backgroundColor: "tan",
            margin: "10px",
            padding: "10%",

            "&:hover": {
                position: "relative"

            }

        },
    }


}))


const Content2 = () => {


    const theme = useTheme();
    const { container } = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  



    return (
        <div className={container} >

            <div >

                <Card2 />

            </div>



            <div>  <Card2 /></div>


        </div>
    );
}

export default Content2;

function Card2() {

    const theme = useTheme();
    const { container, card2 } = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));


    const refCard = useRef()
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

   

    useEffect(function () {
        setWidth(refCard.current.offsetWidth);
        setHeight(refCard.current.offsetHeight);

        console.log(refCard.current.offsetWidth, refCard.current.offsetHeight)
    }, [])

    return (

        <div className={card2}>

            <div >

                <div style={{
                    width: isLarge ? "33%" : "100%",
                    //  heigth:"100%",
                    margin: "0px",
                    textAlign: "center",
                    position: "relative",
                    //  display: "inline-block",
                    backgroundColor: "#a61111",
                    color: "white",
                    padding: "10px",
                    paddingLeft: "2.5em",
                    paddingRight: "2em",
                    margin: "10px",
                    overflow: "hidden",
                    fontSize: isLarge ? "1em" : "3em",
                }}>

                    <div style={{
                        position: "absolute",
                        left: "0",
                        top: "0.3em",
                        width: "1em",
                        bottom: "0.3em",
                        backgroundColor: "white",
                        transform: "translate3d(-0.3em,0,0) skew(-10deg)",
                        //  zIndex:0

                    }}>

                    </div><b>学位课程</b></div>

            </div>
            <div //ref={function(e){return refCard =e}}
                ref={refCard}
                style={{
                    backgroundImage: `url(https://picsum.photos/${width}/${height + randomBetween(0, 3)})`
                }}
             
            >
                <p>MIT - 宁波供应链管理项目{width}..{height} {window.innerWidth}</p>
                <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Aliquam, omnis consequatur? Iure, exercitationem. Minima id cupiditate excepturi tenetur voluptatum obcaecati explicabo, ducimus tempore quidem porro libero beatae, quae asperiores adipisci!</p>

                <IconButton
                    style={{
                        color: "white",
                        position: "absolute",
                        right: "10px",
                        bottom: "10px",
                    }}
                >
                    <ExitToAppOutlinedIcon />
                </IconButton>

            </div>

        </div>
    )



}

function randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
