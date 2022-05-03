import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'
import {Card,CardContent,CardMedia,Typography,Modal,TextField,NativeSelect} from '@mui/material'
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, InputLabel, ListItem, MenuItem } from '@material-ui/core';
import CoversationalQuote from '../Components/CoversationalQuote';
import Slider from "react-slick";
import Requeststyles from '../Components/Styles/RequestStyles';
const BannerImages=['dg5.jpg','dg6.png']
// import Requeststyles from '../Styles/DesignStyles';
class Designs extends Component{
   onFileChange=(file)=>{
       console.log(file)
   }
   renderSlides = () => {
    const { classes } = this.props;
    return BannerImages.map((image, indx) => (
      <div>
        <img
          key={indx}
          className={classes.bannerWidth}
          src={`images/${image}`}
        />
      </div>
    ));
  };
    render(){
        const{classes}=this.props;
        console.log(this.props)
        return(
            <Grid item style={{margin:'10px auto',justifyContent:'center'}}>
                <Grid container >
                    <Grid item lg={6} md={6} xs={12} sm={12}>
                        <CoversationalQuote/>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} sm={12}>
                        <Typography style={{color:'darkblue',fontWeight:500,fontSize:'20px'}}>Register to get Authentication</Typography>
                    <Grid  item style={{marginTop:'15px'}}>
              <TextField  inputProps={{style:{
                           fontSize:'16px',
                           fontWeight:500,
                           color:'CaptionText'
              }}} label="Email Address" placeholder='germinate@gmail.com' variant='outlined' fullWidth
              />
              </Grid>
              <Grid  item style={{marginTop:'15px'}}>
              <TextField label="Phone Number" maxLength="10" variant='outlined' fullWidth
              />
              </Grid>
              <Grid  item style={{marginTop:'15px'}}>
              <TextField label="Company/Buisness Name"  variant='outlined' fullWidth
              />
              </Grid>
              <Grid  item style={{marginTop:'15px'}}>
              <TextField label="Short Description about your buiness" multiline  maxRows={5} variant='outlined' fullWidth
              />
              </Grid>
              <Grid item style={{marginTop:'15px'}}>
                  <NativeSelect fullWidth variant='outlined'>
                      <option>Static</option>
                       <option>Custom</option>
                  </NativeSelect>
              </Grid>
               <Grid item style={{marginTop:'15px'}}>
                  <TextField label="Reference Site" variant='outlined' fullWidth
              />
                 
              </Grid>
              <Grid item style={{marginTop:'15px'}}>
                  <InputLabel style={{marginBottom:'15px'}}>If you want to your website to be in your own content ,please upload content</InputLabel>
                  <input type="file" onChange={this.onFileChange} />
                 
              </Grid>
              <Grid item style={{marginTop:'15px'}}>
                  <InputLabel style={{marginBottom:'15px'}}>Please upload basic Details of company below </InputLabel>
                  <ListItem style={{color:'#3f51b5'}}>Email</ListItem>
                  <ListItem style={{color:'#3f51b5'}}>Facebook,twitter,instgram & other social Media links</ListItem>
                  
                  <input type="file" onChange={this.onFileChange} />
                 
              </Grid>
              <Grid style={{textAlign:'center',marginTop:"15px"}}>
                  <Button variant='contained' color='primary'>Confirm</Button>
              </Grid>
              </Grid>
              
                   </Grid>
<Grid container >
                  <img src="images/design4.gif" width={300}/>
                  <img src="images/design7.gif" width={300}/>
                  <img src="images/design6.gif" width={300}/>
                  <img src="images/design8.gif" width={300}/>
                  </Grid>
               </Grid>
        )
    }
}
export default withStyles(Requeststyles) (Designs)