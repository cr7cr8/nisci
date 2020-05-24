import React, { useState, useRef, useEffect, useCallback } from 'react';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core/';


import { InputBase, TextField, Paper, IconButton, Button, Divider, Typography, useMediaQuery } from '@material-ui/core';


import Avatar from '@material-ui/core/Avatar';

import principle from '../../images/principle.jpg';

const useStyles = makeStyles(theme => ({

    container: {
        display: "Grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto auto",
        backgroundColor: "#a61111",

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

            <div style={{
                width: isLarge ? "20%" : "100%",
                //  heigth:"100%",
                margin: "0px",
                textAlign: "center",
                position: "relative",
                //  display: "inline-block",

                backgroundColor: "white",
                color: "#a61111",
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
                    backgroundColor: "#a61111",
                    transform: "translate3d(-0.3em,0,0) skew(-10deg)",
                    //  zIndex:0

                }}></div>

                <strong>院长致辞</strong>
            </div>

            <div style={{position:"relative"}}>
                <div style={{width:"66%",color:"white"}}>
                    <p style={{textAlign:"center"}}><strong>郭杰群 博导</strong></p>
                    <p style={{paddingLeft:"5em",paddingBottom:"5em",fontSize:"1em"}}>
                        中国首家供应链创新国际商学院--宁波 （中国） 供应链创新学院与美国麻省理工学院合作，提供全日制和非全日制的工商管理学硕士(MBA)和
                        高管教育课程，为您的公司培养供应链领袖
    
                    </p>

                </div>
               
               <IconButton style={{
                   position:"absolute",right:"3%",top:"-3.6em",borderStyle:"solid",borderWidth:"1px",
                   height:"12em",width:"12em",zIndex:9}} >
                <Avatar 
                src={principle}
                style={{height:"13em",width:"13em"}}>R</Avatar>

                </IconButton>




            </div>


        </div>
    );
}

export default Principle;