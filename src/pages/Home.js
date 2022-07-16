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
import Counter from '../Components/Counter';
const custQuotes=[
  'Customer Interaction in your Absence',"Customer's compatability"
,'Ease of Getting More information','Reach of business Tremendously']
const DigiQuotes=[
  'Increased Engagement', 'Effective Targeting','Lower Cost ,mutable contents','Reaches each and every corners'
]
class Home extends Component{
    componentDidMount(){}
    render(){
      const {classes}=this.props;
        return(
            <Grid container lg={12} md={12} xs={12} >
                <Fade top>
             <Grid item lg={12} md={12} xs={12} style={{marginBottom:'15px'}}>
                 
                 <Grid container lg={12} md={12} xs={12}>
                     <Grid item lg={6} md={6} xs={12} style={{width:'100%',}}>
                         
                         <p style={{fontSize:'20px',}}><TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#2196f3',
          fontWeight: 500,
          fontSize: '1em',
        }}
        startDelay={100}
        cursorColor="#3f51b5"
        multiText={[
          'A journey towards Digital communication',
          'A small Business May needs ',
          'Lets try with us',
          'Get Static website,for Your Business',
          'Get Customized website as you like......',
          
        ]}
        multiTextDelay={1000}
        typeSpeed={150}
      /></p>
      <p className={classes.content}>Establish your website for branding your products , Let's connect via online globaly</p>
      <p className={classes.content}>Your Business will Reach Digitally ,get Customer better than ever</p>
                      </Grid>
               
               <Grid item lg={6} md={6} xs={12} style={{marginBottom:'15px'}}>
               <img style={{borderRadius:'5px'}} src='/images/design8.gif'  width="100%"/>
               </Grid>
               </Grid>
               </Grid>
               </Fade>
               <Grid container lg={11} xs={12} style={{justifyContent:'space-between',marginBottom:'15px'}} >
                 <Counter maxCount={97} sty={{fontSize:'xxx-large',margin:'auto',fontFamily:'Times New Roamn',fontWeight:700,color:'blue',width:'100px',textAlign:'center'}} 
                 content={"Clear description of who you are. From the moment a client or customer visits your website, Increases in leads to customer percent"}
                 bg={'/images/dg6.png'}
                 prefix={""}
                 suffix={"%"}
                 duration={8}
                 />
                 <Counter minCount={-875.039} maxCount={160527.012} sty={{width:'150px',fontSize:'large',margin:'auto',fontFamily:'Times New Roamn',fontWeight:700,color:'blue',textAlign:'center'}} 
                 content={" More engages with customer than ever before.Happy customer , results in more Revenue ever before"}
                 bg={'https://c8.alamy.com/comp/2F749ET/flat-illustration-businessman-supporting-growth-in-economy-on-chart-graph-business-and-finance-concept-2F749ET.jpg'}
                 prefix={"INR "}
                 suffix={""}
                 duration={10}
                 decimal={4}
                 />
               </Grid>
                <Fade right>
                  <Hidden mdUp>
                <Grid item lg={12} md={12} xs={12}  >
                    <Grid container lg={12} md={12} xs={12}>
                    <Grid item lg={6} md={6} xs={12}>
             <p className={classes.heading}>Everything goes online , so try somethong else .... rather than normal</p>
                <p className={classes.content}>
                    Now a days ,Digital Marketing plays a vital role for business ,Website takes major role in that , share your sites
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
               
               <Grid item lg={6} md={6} xs={12} style={{marginBottom:'15px'}}>
                <img style={{borderRadius:'5px'}} src='/images/design3.gif'  width="100%"/>
               </Grid>
               </Grid>
               </Grid>
               
               </Hidden>
               
               </Fade>
               
               <Fade right>
               <Hidden smDown>
                <Grid item lg={12} md={12} xs={12} style={{marginBottom:'15px'}}>
                    <Grid container lg={12} md={12} xs={12}>
                    <Grid item lg={6} md={6} xs={12}>
             
                <img style={{borderRadius:'5px'}} src='/images/design3.gif' alt="logo" width="100%"/>
               </Grid>
               <Grid item lg={6} md={6} xs={12}>
                <p className={classes.heading}>Everything goes online , so try something else .... rather than normal</p>
                <p className={classes.content}>
                    Now a days ,Digital Marketing plays a vital role for business ,Website takes major role in that , share your sites
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
               <Grid item lg={12} md={12} xs={12} style={{marginBottom:'15px'}}>
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
               <Grid item lg={6} md={6} xs={12} style={{marginBottom:'15px'}}>
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