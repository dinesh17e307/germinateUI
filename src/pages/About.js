import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'
import TypeWriterEffect from 'react-typewriter-effect';
import Typist from 'react-text-typist';
import Typing from '../Components/Typing';
import Aboutstyles from '../Components/Styles/AboutStyles'
import withStyles from '@material-ui/core/styles/withStyles';
import { Card } from '@material-ui/core';
class About extends Component{
    render(){
        const {classes}=this.props;
        return(
              <Grid>
                  <Grid item>
                      <div style={{fontSize:'1.5rem',fontWeight:500,color:'black',display:'flex',fontFamily: 'Georgia serif'}}>
                         <p> A journey towards</p>&nbsp;<TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#2196f3',
          fontWeight: 500,
          fontSize: '1.5rem',
          marginTop:'30px'
        }}
        startDelay={100}
        cursorColor="#3f51b5"
        multiText={[
          'Modern World',
          
          
        ]}
        loop
        multiTextDelay={1000}
        typeSpeed={300}
      />
                      </div>
                  </Grid>
                  <Grid item>
                      <p>
                         
                      </p>
                  </Grid>
                  
                  <Grid container style={{margin:'10px'}}>
                     
                  <Grid item lg={6} md={6} sm={12} xs={12} >
                      <p className={classes.heading}>Mission</p>
                    <p className={classes.content}  >To create a better Business for the many <span style={{color:'#2196f3'}}>Entrepreneur</span></p>
                   <p className={classes.content} > For customers but also for our co-workers and the people who work at our<span style={{color:'#2196f3'}}> Marketing</span> </p> 
                   <p className={classes.content}>To deliver a good quality of <span  style={{color:'#2196f3'}}>Products</span></p>
                   <p className={classes.content}>Design is more than what it looks like and feels like. Design is how it works</p>
                   <p className={classes.content}>Believe in being different <span  style={{color:'#2196f3'}}>Something else</span></p>
                  </Grid>
                   <Grid item lg={6} md={6} sm={12} xs={12}>
                      <p className={classes.heading}>Vission</p>
                    <p className={classes.content}  >To produce our own products as a <span style={{color:'#2196f3'}}>Entrepreneur</span></p>
                   <p className={classes.content} >Our <span style={{color:'#2196f3'}}> solution</span> is your success </p> 
                   <p className={classes.content}>The <span  style={{color:'#2196f3'}}>Innovative Company</span> that Builds Websites that Work for You. </p>
                   <p className={classes.content}>We are passionate about web design</p>
                   
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                      <p style={{height:'200px',textAlign:'center',fontFamily:'monospace',fontSize:'40px',textShadow:'2px 3px'
}}>
<span style={{color:'#20bf55'}}>T</span>
<span style={{color:''}}>e</span>
<span style={{color:''}}>a</span>
<span style={{color:'#20bf55'}}>m</span>
&nbsp;
<span style={{color:'#20bf55'}}>G</span>
<span style={{color:''}}>e</span>
<span style={{color:'#63d471'}}>r</span>
<span style={{color:''}}>m</span>
<span style={{color:'#20bf55'}}>i</span>
<span style={{color:''}}>n</span>
<span style={{color:'#20bf55'}}>a</span>
<span style={{color:''}}>t</span>
<span style={{color:'#20bf55'}}>e</span>
</p>
                   
                  </Grid>
                  </Grid>
                 
              </Grid>
        )
    }
}
export default withStyles(Aboutstyles)(About)