import React, { useState } from 'react';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core/';


import { InputBase, TextField, Paper, IconButton, Button, Divider, Typography, useMediaQuery } from '@material-ui/core';


import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';

const useStyles = makeStyles(theme => {

   

    return {

        container: {

            display: "Grid",
          

          

            [theme.breakpoints.up('xs')]: {
                gridTemplateColumns: "auto auto",
                gridTemplateRows: "auto", 
                fontSize: "5em",
            },
    
    
            [theme.breakpoints.up('lg')]: {
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gridTemplateRows: "1fr 1fr", 
                 fontSize: "3em",
            }


        },

        redCard: {

            width: "100%",
            height: "100%",

            display: "Grid",
            gridTemplateColumns: "auto",
            gridTemplateRows: "auto auto auto auto ",

        
            backgroundColor: "#a61111",
            color: "white",

            [theme.breakpoints.up('xs')]: {
              
                fontSize: "1em",
            },

            [theme.breakpoints.up('lg')]: {
             
                fontSize: "0.7em",
            },


            "&>div:nth-of-type(1)": {

                display: "Grid",
                width: "100%",
                height: "100%",

                padding: "8%",

                fontSize: "0.8em",
                //    textAlign: "center",
                alignItems: "center",

            },
            "&>div:nth-of-type(2)": {

                display: "Grid",
                width: "100%",
                height: "100%",

                fontSize: "0.5em",
                paddingLeft: "8%",
                paddingRight: "8%",
                //   textAlign: "center",
                alignItems: "center",


            },
            "&>div:nth-of-type(3)": {
                display: "Grid",
                width: "100%",
                height: "100%",

                fontSize: "1em",
                paddingRight: "10%",
                justifyContent: "end",
                alignItems: "center",



            },
            "&>div:nth-of-type(4)": {
                display: "Grid",
                width: "100%",
                height: "100%",

                fontSize: "1em",

                //  justifyContent: "center",
                //  alignItems: "center",

                "&:hover": {
                    backgroundColor: "#45536b",
                    color: "white"
                }
            }

        },


        whiteCard: {

            width: "100%",
            height: "100%",

            display: "Grid",
            gridTemplateColumns: "auto",
            gridTemplateRows: "auto auto auto auto ",

            fontSize: "0.7em",

            backgroundColor: "#eee",
            color: "black",
            [theme.breakpoints.up('xs')]: {
              
                fontSize: "1em",
            },

            [theme.breakpoints.up('lg')]: {
             
                fontSize: "0.7em",
            },

            "&>div:nth-of-type(1)": {

                display: "Grid",
                width: "100%",
                height: "100%",

                padding: "8%",

                fontSize: "0.8em",
                //   textAlign: "center",
                alignItems: "center",

            },
            "&>div:nth-of-type(2)": {

                display: "Grid",
                width: "100%",
                height: "100%",

                fontSize: "0.5em",
                paddingLeft: "8%",
                paddingRight: "8%",
                //    textAlign: "center",
                alignItems: "center",


            },
            "&>div:nth-of-type(3)": {
                display: "Grid",
                width: "100%",
                height: "100%",

                fontSize: "1em",
                paddingRight: "10%",
                justifyContent: "end",
                alignItems: "center",



            },
            "&>div:nth-of-type(4)": {
                display: "Grid",
                width: "100%",
                height: "100%",

                fontSize: "1em",

                //  justifyContent: "center",
                //  alignItems: "center",

                "&:hover": {
                    backgroundColor: "#45536b",
                    color: "white"
                }
            }

        }

    }
})


const Content1 = () => {


    const theme = useTheme();
    const { container } = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

    const [height, setHeight] = useState(0)
    const [showButton, setShowButton] = useState(true)


    return (
        <div className={container} >

            <div style={isLarge?{ gridColumn: "1/2", gridRow: "1/2" }:{ gridColumn: "1/2" }}>


                <Card />

            </div>

            <div style={isLarge?{ gridColumn: "2/3", gridRow: "1/2" }:{ gridColumn: "2/3" }}>
                <Card
                    type="whiteCard"
                    title="供应链数字化转型战略"
                    description="数字化实现 “物流”，信息流和“资金流” 的高效协同"

                />
            </div>

            <div style={isLarge?{ gridColumn: "3/4", gridRow: "1/2" }:{ gridColumn: "1/2" }}>
                <Card
                   type={isLarge?"redCard":"whiteCard"}
                    title="供应链数字化转型:运营与组织挑战"
                    description="供应链数字化转型:运营与组织挑战"

                />
            </div>
            <div style={isLarge?{ gridColumn: "1/2", gridRow: "2/3" }:{ gridColumn: "2/3" }}>
                <Card
                    type={!isLarge?"redCard":"whiteCard"}
                    title="中国私营企业的传承与超越"
                    description="挖掘企业家族强盛不衰的秘密"

                />
            </div>
            <div style={isLarge?{ gridColumn: "2/3", gridRow: "2/3" }:{ gridColumn: "1/2" }}>
                <Card
                    type="redCard"
                    title="供应链战略和卓越采购"
                    description="学习如何设计合适的供应链战略以创造和获得长期价值"

                />
            </div>
            <div style={isLarge?{ gridColumn: "3/4", gridRow: "2/3" }:{ gridColumn: "2/3" }}>
                <Card
                    type="whiteCard"
                    title="大数据时代的跨境电商运营和创新"
                    description="借力数字经济，迭代战略营销，助推企业升级"

                />
            </div>

            <div style={isLarge?{ gridColumn: "4/5", gridRow: "1/3", backgroundColor: "pink" }:{ gridColumn: "1/2" }}>

            </div>



            {/* <Paper>d</Paper>

            <Paper>e</Paper>
            <Paper>f</Paper>
            <Paper>g</Paper>
            <Paper>h</Paper> */}



        </div>
    );
}

export default Content1;


function Card({ type = "redCard", title = "供应链金融与区块链", description = "掌握供应链金融需求分析，交易架构与规划能力", detail = "查看详情 >", download = "招生手册下载", ...props }) {

    const theme = useTheme();
    const { container, redCard, whiteCard } = useStyles();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <div className={type === "redCard" ? (function () { return redCard }()) : (function () { return whiteCard }())}
        
        
           
        >

            <div>
                <div>{title}</div>


            </div>
            <div >
                {isLarge&&<div>{description}</div>}

            </div>
            <div >

            {isLarge&&       <Button style={{ color: "#eba834",fontSize:isLarge?"0.5em":"0.8em" }}>
                    {detail}
                </Button>}

            </div>


            <div>
            {isLarge&&   <Button fullWidth
                    style={{ height: "100%", fontSize:isLarge?"0.5em":"0.8em",color: type === "redCard" ? "white" : "#45536b" }}

                    onMouseOver={function (e) { if (type === "whiteCard") { e.currentTarget.style.color = "white" } }}
                    onMouseOut={function (e) { if (type === "whiteCard") { e.currentTarget.style.color = "#45536b" } }}
                >
                    {download} <GetAppOutlinedIcon style={{ fontSize:isLarge?"0.8em":"1.2em", }} />
                </Button>}
            </div>

        </div>

    )

}