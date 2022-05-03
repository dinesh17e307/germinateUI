import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'
import TypeWriterEffect from 'react-typewriter-effect';
import {Fade,
Flip,
Rotate,
Zoom,
Bounce,
Roll} from 'react-reveal'
import Homestyles from '../Components/Styles/HomeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
const custQuotes=[
  'Customer Interaction in your Absence',"Customer's compatability"
,'Ease of Getting More information','Reach of buisness Tremendously']
const DigiQuotes=[
  'Increased Engagement', 'Effective Targeting','Lower Cost ,mutable contents','Reaches each and every corners'
]
class Home extends Component{
    componentDidMount(){}
    render(){
      const {classes}=this.props;
        return(
            <Grid container lg={12} md={12} xs={12}>
                <Fade top>
             <Grid item lg={12} md={12} xs={12}>
                 
                 <Grid container lg={12} md={12} xs={12}>
                     <Grid item lg={6} md={6} xs={12} style={{width:'100%',}}>
                         
                         <p style={{fontSize:'30px',}}><TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#2196f3',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={100}
        cursorColor="#3f51b5"
        multiText={[
          'A journey towards Digital communication !!',
          'A small Buisness May needs, a Website to reach effieciently',
          'Lets try with us',
          'Get Static website,for Your Buisness',
          'Get Customized website as you like......',
          
        ]}
        multiTextDelay={1000}
        typeSpeed={150}
      /></p>
      <p className={classes.content}>Establish your website for branding your products , Let's connect via online globaly</p>
      <p className={classes.content}>Your Buisness will Reach Digitally ,get Customer better than ever</p>
                      </Grid>
               
               <Grid item lg={6} md={6} xs={12}>
               <img style={{borderRadius:'5px'}} src='/images/design8.gif'  width="100%"/>
               </Grid>
               </Grid>
               </Grid>
               </Fade>
                <Fade right>
                  <Hidden mdUp>
                <Grid item lg={12} md={12} xs={12}  >
                    <Grid container lg={12} md={12} xs={12}>
                    <Grid item lg={6} md={6} xs={12}>
             <p className={classes.heading}>Everything goes online , so try somethong else .... rather than normal</p>
                <p className={classes.content}>
                    Now a days ,Digital Marketing plays a vital role for buisness ,Website takes major role in that , share your sites
                    to others to get engaged with you
    
                </p>
                {
                  DigiQuotes.map(item=>{
                    return(
                  <div style={{display:'flex',justifyContent:'flex-start'}}>
                       <img src='/images/tick.png' width={'50px'} alt="logo"/>
                        <p className={classes.content}>{item}</p>
                 </div>
                    )
                  })
                }
               </Grid>
               <Grid item lg={6} md={6} xs={12}>
                <img style={{borderRadius:'5px'}} src='/images/design3.gif'  width="100%"/>
               </Grid>
               </Grid>
               </Grid>
               
               </Hidden>
               </Fade>
               <Fade right>
               <Hidden smDown>
                <Grid item lg={12} md={12} xs={12}>
                    <Grid container lg={12} md={12} xs={12}>
                    <Grid item lg={6} md={6} xs={12}>
             
                <img style={{borderRadius:'5px'}} src='/images/design3.gif' alt="logo" width="100%"/>
               </Grid>
               <Grid item lg={6} md={6} xs={12}>
                <p className={classes.heading}>Everything goes online , so try something else .... rather than normal</p>
                <p className={classes.content}>
                    Now a days ,Digital Marketing plays a vital role for buisness ,Website takes major role in that , share your sites
                    to others to get engaged with you
    
                </p>
                {
                  DigiQuotes.map(item=>{
                    return(
                  <div style={{display:'flex',justifyContent:'flex-start'}}>
                       <img src='/images/tick.png' width={'50px'}/>
                        <p className={classes.content}>{item}</p>
                 </div>
                    )
                  })
                }
               </Grid>
               </Grid>
               </Grid>
               </Hidden>
               </Fade>
               <Fade left>
               <Grid item lg={12} md={12} xs={12}>
                    <Grid container lg={12} md={12} xs={12}>
                    <Grid item lg={6} md={6} xs={12}>
             <p className={classes.heading}>Ease Interact with Customers!!</p>
                {
                  custQuotes.map(item=>{
                    return(
                  <div style={{display:'flex',justifyContent:'flex-start'}}>
                       <img src='/images/tick.png' width={'50px'} alt="logo"/>
                        <p className={classes.content}>{item}</p>
                 </div>
                    )
                  })
                }
               </Grid>
               <Grid item lg={6} md={6} xs={12}>
                <img style={{borderRadius:'5px'}} src='/images/design5.gif'alt="logo" width="100%"/>
               </Grid>
               </Grid>
               </Grid>
               </Fade>
               <Grid item lg={12} md={12} xs={12}>
                   <p className={classes.heading}>Our Clients !!</p>
               </Grid>
               
            </Grid>
        )
    }
}
export default withStyles(Homestyles)(Home)