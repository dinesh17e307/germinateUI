import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'
import Card from '@mui/material/Card';
import {CardContent,CardMedia,Typography,Modal,TextField,NativeSelect } from '@mui/material'
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, InputLabel, ListItem, MenuItem ,} from '@material-ui/core';
import CoversationalQuote from '../Components/CoversationalQuote';
import Slider from "react-slick";
import Requeststyles from '../Components/Styles/RequestStyles';
import axios from 'axios';
axios.defaults.baseURL = 'https://germinateserver.herokuapp.com';
const BannerImages=['dg5.jpg','dg6.png']
// import Requeststyles from '../Styles/DesignStyles';

class Designs extends Component{
   onFileChange=(file)=>{
       console.log(file)
    }
    handleChange = (event) =>
    {
        let id = event.target.id;
        let value = event.target.value;
        this.setState({
            [id]:value
        })
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
    sendMessage = () =>
    {
        let users = [{
            Custemail: this.state.email,
            message: this.state.message,
            email: 'dheena5880@gmail.com',
            temp:'sendMessage'
        }]
        axios.post(`/sendQuoteMail`,users)
    }
    render(){
        const{classes}=this.props;
        console.log(this.props)
        return (
            <>
            
            <Grid item style={{margin:'10px 50px',justifyContent:'center'}}>
                   
                <Grid container >
                    <Grid item lg={6} md={6} xs={12} sm={12} >
                        <CoversationalQuote/>
                    </Grid>
                        
                    <Grid item lg={6} md={6} xs={12} sm={12} style={{marginBottom:'25px'}}>
                             <Card style={{width:'100%',boxShadow:'2px 3px 5px 10px lightgrey',zIndex:'1',position:'relative'}}>
                                <CardContent>
                                    <div style={{backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',backgroundImage:"url('images/email1.gif')",opacity:'0.2',width:'100%',height:'100%',zIndex:'-1',position:'absolute'}}></div>
                    
                        <Typography style={{color:'red',fontWeight:500,fontSize:'20px'}}>Drop Your Valuable Thoughts</Typography>
                    <Grid  item style={{marginTop:'15px'}}>
              <TextField onChange={this.handleChange} id="email" inputProps={{style:{
                           fontSize:'16px',
                           fontWeight:500,
                           
                  color: 'CaptionText'
                           
              }}} label="Email Address" placeholder='germinate@gmail.com' variant='outlined' fullWidth
              />
              </Grid>
              <Grid  item style={{marginTop:'15px'}}>
              <TextField label="Text Your Message" id="message" onChange={this.handleChange} multiline  maxRows={5} variant='outlined' fullWidth
              />
              </Grid>
              <Grid style={{textAlign:'center',marginTop:"15px"}}>
                  <Button variant='contained' color='primary' onClick={this.sendMessage}>Send Message</Button>
                                </Grid>
                           </CardContent>
                    </Card>      
              </Grid>
              
                        </Grid>
                       
<Grid container >
                  <img src="images/design4.gif" width={300}/>
                  <img src="images/design7.gif" width={300}/>
                  <img src="images/design6.gif" width={300}/>
                  <img src="images/design8.gif" width={300}/>
                  </Grid>
               </Grid>
               </>
        )
    }
}
export default withStyles(Requeststyles) (Designs)