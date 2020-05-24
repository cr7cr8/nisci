import React, { useEffect, useState, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button, useMediaQuery, CssBaseline, Paper, Container } from '@material-ui/core';


import SimpleMenu from "./SimpleMenu";




const useStyles = makeStyles((theme) => ({

    container: {

        display: "Grid",
        gridTemplateColumns: "auto auto auto auto auto",
        gridTemplateRows: "auto",

        background: "#a84740",
        justifyContent:"center",
        //justifyItems: "center",
        //justifyContent: "space-evenly",
        justifyContent: "space-around",
        position: "relative",


    },

    tabs: {
        width:"20%",
        background: "skyblue",
        color: "#eee"
    }


}))

const Tabs = () => {

    const theme = useTheme();
    const classes = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

    const [height, setHeight] = useState({ minHeight: 0 })

    //  let pannel;

    const pannel = useRef()

    useEffect(function () {

        // console.log(pannel.offsetHeight)

        // if (pannel.offsetHeight > 0) {
        //     setHeight({ minHeight: pannel.offsetHeight })

        // }

        if (pannel.current.offsetHeight > 0) {
            setHeight({ minHeight: pannel.current.offsetHeight })
        }

    }, [])

    return (

        //  <div className={classes.container} style={{ ...height }} ref={function (e) { return pannel = e }}>

        <Container>
        <div className={classes.container} style={{ ...height }} ref={pannel}>




            <SimpleMenu>首 页</SimpleMenu>
            <SimpleMenu
                subtitle={["学位课程", "MIT-宁波供应链管理 (MNSCM) 项目 ", "高管教育中心", "定制课", "公开课",
                    "环球课堂", "微硕士课程"]}>
                教学项目
            </SimpleMenu>
            <SimpleMenu>企业合作</SimpleMenu>
            <SimpleMenu subtitle={["新闻", "活动"]}>新闻活动</SimpleMenu>
            <SimpleMenu subtitle={["学院介绍", "院长致辞", "联合管理委员会", "加入我们", "里程碑"]}>关于我们</SimpleMenu>


        </div >
         </Container>
    );
}

export default Tabs;