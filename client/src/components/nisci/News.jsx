import React, { useState, useRef, useEffect, useCallback } from 'react';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core/';


import { InputBase, TextField, Paper, IconButton, Button, Divider, Typography, useMediaQuery } from '@material-ui/core';


const useStyles = makeStyles(theme => ({

    container: {
        display: "Grid",

        gridGap: "1em",
        backgroundColor: "#eee",










        [theme.breakpoints.up('xs')]: {
            gridTemplateColumns: "auto ",
            gridTemplateRows: "auto auto",

        },

        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: "auto auto auto",
            gridTemplateRows: "auto auto",
            "&>div:nth-of-type(1)": {

                gridColumn: "1/4",
                gridRow: "1/2",
            },
            "&>div:nth-of-type(2)": {
                marginLeft: "10px",
                gridColumn: "1/2",
                gridRow: "2/3",
                //     backgroundColor: "tan",
            },
            "&>div:nth-of-type(3)": {
                gridColumn: "2/3",
                gridRow: "2/3",
                //      backgroundColor: "tan",
            },
            "&>div:nth-of-type(4)": {
                marginRight: "10px",
                gridColumn: "3/4",
                gridRow: "2/3",
                //      backgroundColor: "tan",
            },
        },


    },
    newsCard: {
        display: "Grid",
        gridTemplateColumns: "1fr 5fr ",
        gridTemplateRows: "3fr 1fr",


        "&>div:nth-of-type(1)": {
            gridColumn: "1/3",
            gridRow: "1/2",
            //   backgroundColor: "pink",

        },
        "&>div:nth-of-type(2)": {
            backgroundColor: "#45536b",
            color: "white",
            textAlign: "center",
            gridColumn: "1/2",
            gridRow: "2/3",
            margin: "10px",
            width: "3em",
            height: "3em",
            fontSize: "1em"


        },
        "&>div:nth-of-type(3)": {
            gridColumn: "2/3",
            gridRow: "2/3",
            margin: "10px",
        },

    },
}))

const News = () => {

    const theme = useTheme();
    const { container } = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <div className={container}>

            <div>

                <div style={{
                    width: isLarge ? "20%" : "100%",
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

                    </div><b>新闻</b></div>





            </div>

            <NewsCard />
            <NewsCard />
            <NewsCard />




        </div>
    );
}

function NewsCard() {

    const theme = useTheme();
    const { container, newsCard } = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const cardRef = useRef();

    useEffect(function () {

        setWidth(cardRef.current.offsetWidth);
        setHeight(cardRef.current.offsetHeight);

    }, [])

    return (
        <div className={newsCard}>

            <div ref={cardRef}
                style={{
                    backgroundImage: `url(https://picsum.photos/${width}/${height + randomBetween(0, 10)})`
                }}

            >


            </div>
            <div style={{}}>

                三月<br />
                13

            </div>
            <div>
                {isLarge
                    ? <>宁波中国供应链创新学院{width} {height}</>
                    : <h1>宁波中国供应链创新学院</h1>

                }

            </div>


        </div>
    );


}


export default News;


function randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}