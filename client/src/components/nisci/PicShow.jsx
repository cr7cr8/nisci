import React, { useState, useEffect, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button, useMediaQuery, CssBaseline, Container } from '@material-ui/core';
import { Spring, Transition, Trail, Keyframes, config } from 'react-spring/renderprops';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import pic1 from '../../images/1.png';
import pic2 from '../../images/2.png';
import pic3 from '../../images/3.png';
import pic4 from '../../images/4.png';
import pic5 from '../../images/5.png';
import pic6 from '../../images/6.png';




const useStyles = makeStyles((theme) => ({


    container: {

        display: "Grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto",

        justifyContent: "center",
        alignItems: "center",

    }

}))

function randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


const PicShow = ({ showButton, ...param }) => {

    const theme = useTheme();
    const { container } = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));


    const randomNum = randomBetween(0, 6);


    const arrPic = [pic1, pic2, pic3, pic4, pic5, pic6];
    const [pic, setPic] = useState([{
        letter: arrPic[randomNum],
        key: Math.random().toString(),
        pos: 0,
        width: 0,
        height: 0,
    }])

    const refDiv = useRef()
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(0)


    useEffect(function () {
        // setWidth(refDiv.current.offsetWidth);
        // setHeight(refDiv.current.offsetHeight);
        if (refDiv.current) {
            setWidth(refDiv.current.offsetWidth);
            setHeight(refDiv.current.offsetHeight);
            console.log(refDiv.current.offsetWidth)
        }
      
    }, [pic])



    const num = useRef(randomNum)



    useEffect(function () {



        const interval = setInterval(function () {

            num.current++;

            setPic(pre => {

                return [{ letter: arrPic[num.current % 6], key: Math.random().toString() }]

            })
        }, 200000)

        return function () {
            clearInterval(interval)
        }

    }, [])




    return (

        <Transition

            from={function () { return { opacity: 0, transform: `scale(0.8) rotateY(0deg)` } }}
            enter={function () { return { opacity: 1, transform: `scale(1) rotateY(0deg)` } }}
            //update={function () { return { opacity: 1, fontSize:"8em", transform: `rotate(720deg)` } }}
            leave={function () { return { opacity: 0, transform: `scale(1.2) rotateY(0deg)` } }}


            config={{ duration: 1000 }}
            items={pic} keys={function (item) { return item.key }}

        >

            {function (item, state, index) {



                return function (props) {


                    return (

                        <div
                            ref={refDiv}
                            style={{ backgroundColor: "pink", position: "relative", }} width="auto"
                        >


                            <img style={{ position: "absolute", left: item.pos, top: 0, ...props }}

                                src={item.letter}

                                width={

                                    isLarge ? "auto" : "100%"

                                }

                                // onClick={function (e) {
                                //     e.persist()
                                // }}
                                onLoad={function (e) {
                                    e.persist()


                                    param.setHeight(e.currentTarget.height > 0 ? e.currentTarget.height : 500)

                                    if (e.currentTarget.width > width) {
                                    // if(width){
                                    //     e.currentTarget.width = width
                                    // }
                                       
                                    
                                        setPic(pre => {
                                            return [{ ...item, pos: 0, width: e.currentTarget.width, height: e.currentTarget.height }]
                                        })

                                    }
                                    else {
                                   
                                        setPic(pre => {
                                     //       return [{ ...item, pos: (window.innerWidth - e.currentTarget.width) / 2, width: e.currentTarget.width, height: e.currentTarget.height }]

                                     return [{ ...item, pos: (width - e.currentTarget.width) / 2, width: e.currentTarget.width, height: e.currentTarget.height }]

                                        })
                                    }
                                }}

                            />



                            <IconButton


                                style={{
                                    zIndex: 9,
                                    position: "absolute",
                                    left: "5vw",
                                    top: "100px",
                                    display: showButton ? "block" : "none"
                                }}
                                onClick={
                                    function (e) {

                                        num.current--;
                                        if (num.current < 0) { num.current = 5 }
                                        setPic(pre => {
                                            return [{ letter: arrPic[num.current % 6], key: Math.random().toString() }]
                                        })

                                    }
                                }
                            >
                                <ArrowBackIcon style={{ fontSize: "5em" }} />
                            </IconButton>


                            <IconButton

                                style={{
                                    zIndex: 99,
                                    position: "absolute",
                                    right: "5vw",
                                    top: "100px",
                                    display: showButton ? "block" : "none"
                                }}
                                onClick={
                                    function (e) {
                                        num.current++;
                                        setPic(pre => {
                                            return [{ letter: arrPic[num.current % 6], key: Math.random().toString() }]
                                        })

                                    }
                                }
                            >
                                <ArrowForwardIcon style={{ fontSize: "5em" }} />
                            </IconButton>



                            <Button variant="outlined" color="primary"

                                style={{
                                    ...props,
                                    zIndex: 99,
                                    position: "absolute",
                                    left: width/ 2 - 210,
                                    top: Boolean(item.height) ? item.height - 30 : 0,
                                    backgroundColor: num.current % 6 === 0 ? "#a84740" : "white",
                                    //  display: showButton ? "block" : "none"
                                }}
                                onClick={
                                    function (e) {
                                        num.current = 0
                                        setPic(pre => {
                                            return [{ letter: arrPic[0], key: Math.random().toString() }]
                                        })

                                    }
                                }

                            > </Button>





                            <Button variant="outlined" color="primary"

                                style={{
                                    ...props,
                                    zIndex: 9,
                                    position: "absolute",
                                    left:width / 2 - 140,
                                    top: Boolean(item.height) ? item.height - 30 : 0,
                                    backgroundColor: num.current % 6 === 1 ? "#a84740" : "white",
                                    //  display: showButton ? "block" : "none"
                                }}
                                onClick={
                                    function (e) {
                                        num.current = 1
                                        setPic(pre => {
                                            return [{ letter: arrPic[1], key: Math.random().toString() }]
                                        })

                                    }
                                }

                            > </Button>

                            <Button variant="outlined" color="primary"

                                style={{
                                    ...props,
                                    zIndex: 9,
                                    position: "absolute",
                                    left: width/ 2 - 70,
                                    top: Boolean(item.height) ? item.height - 30 : 0,
                                    backgroundColor: num.current % 6 === 2 ? "#a84740" : "white",
                                    //  display: showButton ? "block" : "none"
                                }}
                                onClick={
                                    function (e) {
                                        num.current = 2
                                        setPic(pre => {
                                            return [{ letter: arrPic[2], key: Math.random().toString() }]
                                        })

                                    }
                                }

                            > </Button>

                            <Button variant="outlined" color="primary"

                                style={{
                                    ...props,
                                    zIndex: 9,
                                    position: "absolute",
                                    left: width / 2,
                                    top: Boolean(item.height) ? item.height - 30 : 0,
                                    backgroundColor: num.current % 6 === 3 ? "#a84740" : "white",
                                    //  display: showButton ? "block" : "none"
                                }}
                                onClick={
                                    function (e) {
                                        num.current = 3
                                        setPic(pre => {
                                            return [{ letter: arrPic[3], key: Math.random().toString() }]
                                        })

                                    }
                                }

                            > </Button>

                            <Button variant="outlined" color="primary"

                                style={{
                                    ...props,
                                    zIndex: 9,
                                    position: "absolute",
                                    left: width/ 2 + 70,
                                    top: Boolean(item.height) ? item.height - 30 : 0,
                                    backgroundColor: num.current % 6 === 4 ? "#a84740" : "white",
                                    //  display: showButton ? "block" : "none"
                                }}
                                onClick={
                                    function (e) {
                                        num.current = 4
                                        setPic(pre => {
                                            return [{ letter: arrPic[4], key: Math.random().toString() }]
                                        })

                                    }
                                }

                            > </Button>

                            <Button variant="outlined" color="primary"

                                style={{
                                    ...props,
                                    zIndex: 9,
                                    position: "absolute",
                                    left: width / 2 + 140,
                                    top: Boolean(item.height) ? item.height - 30 : 0,
                                    backgroundColor: num.current % 6 === 5 ? "#a84740" : "white",
                                    //  display: showButton ? "block" : "none"
                                }}
                                onClick={
                                    function (e) {
                                        num.current = 5
                                        setPic(pre => {
                                            return [{ letter: arrPic[5], key: Math.random().toString() }]
                                        })

                                    }
                                }

                            > </Button>



                        </div>

                    )


                }


            }}






        </Transition>



    );
}

export default PicShow;