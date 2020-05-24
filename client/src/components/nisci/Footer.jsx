import React, { useState, useRef, useEffect, useCallback } from 'react';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core/';


import { InputBase, TextField, Paper, IconButton, Button, Divider, Typography, useMediaQuery } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AppleIcon from '@material-ui/icons/Apple';
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

const Footer = () => {

    const theme = useTheme();
    const { container } = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <>


            <div
                style={{
                    backgroundColor: "white",
                    height:"20px",
                }}>

            </div>


            <div
                style={{
                    backgroundColor: "#eee",
                }}>

                <div>
                    <FacebookIcon style={{ fontSize: "10em", color: "#aaa" }} />
                    <TwitterIcon style={{ fontSize: "10em", color: "#aaa" }} />
                    <YouTubeIcon style={{ fontSize: "10em", color: "#aaa" }} />
                    <AppleIcon style={{ fontSize: "10em", color: "#aaa" }} />
                    
                </div>


                <Container>
                    <div className={container}
                        style={{
                            backgroundColor: "#eee",
                            borderBottomStyle: "solid",
                            borderBottomColor: "#a61111",
                            borderBottomWidth: "1px",
                            height: "2px",
                        }}
                    ></div>
                </Container>



                <div style={{ textAlign: "center", padding: "10px", color: "#a61111" }}>

                    <p>版权所有 宁波中国 创新学院</p>

                </div>



            </div>
        </>
    );
}

export default Footer;