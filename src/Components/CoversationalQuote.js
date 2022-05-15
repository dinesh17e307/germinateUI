import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'
import {Card,CardContent,CardMedia,Typography,Modal} from '@mui/material'
import withStyles from '@material-ui/core/styles/withStyles';
import { InputLabel,Radio,RadioGroup,TextField,FormControlLabel, Button } from '@material-ui/core';
import Requeststyles from './Styles/RequestStyles';
// import SendMail from '../Server/QuoteMail/SendMail'
import axios from 'axios';

let users = []
class ConversationalQuote extends Component{
    state={
        openModal:false,
        img:'',
        totalQuote:'',
        pageNo:'',
        email:''
        ,buisnessName:''
        ,content:"",
        enablesubmit:false
    }
    openModal=(item)=>{
this.setState({
    openModal:true,
    img:item
})
    }
    getValid=(data)=>{
        if(!data.pageNo.match("^[0-9]*$")){
           return false;
        }
        if(!data.email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)){
            return false
        }
        return true
    }

    
    handleQuote=async(event)=>{
        console.log(event)
        let id =event.target.id;
        let value =event.target.value;
        await this.setState({
            [id]:value
        })
        let isValid=await this.getValid(this.state);
        if(this.state.content!=''&&this.state.pageNo!=''&&this.state.email!=''&&this.state.buisnessName!=''&&isValid){
            this.setState({
                enablesubmit:true
            })
        }
        else{
           this.setState({
                enablesubmit:false
            })
        
        }
    }
    getQuote=()=>{
        const{pageNo,email,buisnessName,content}=this.state;
        let totalQuote=0;
       if(content=='1'){
           totalQuote=totalQuote+pageNo*2000
       }else{
          totalQuote=totalQuote+pageNo*1000 
       }
       totalQuote+=1500;
       users.push(
           {
        name: buisnessName,
        Quotevalue:totalQuote,
        email:email
    }
       )
       axios.post('/sendQuoteMail',users)
       this.setState({
           totalQuote:totalQuote
       })
    }
    render(){
        const{classes}=this.props;
        console.log(this.state)
        return(
            <Grid style={{color:'grey',fontWeight:500,fontSize:'20px',margin:'20px'}}>
                <Typography variant="h4" style={{color:'darkblue'}}>Get Your Quote</Typography>
              Name of the Business / startup <TextField className={classes.inputContent} onChange={this.handleQuote} id="buisnessName"
              /> Email Address to get notification <TextField className={classes.inputContent} onChange={this.handleQuote} id="email"/> No of pages Required in your website<TextField inputMode='numeric' className={classes.inputContent} id ='pageNo'onChange={this.handleQuote} 
              /> Do you want content of your website by us?<RadioGroup style={{display:'block'}} onChange={this.handleQuote} id="content">
                  <FormControlLabel value="1" control={<Radio id="content"  style={{color:'green'}}/>} label="Yes" />
    <FormControlLabel value="0" control={<Radio id='content' style={{color:'red'}}/>} label="No" />
                  
              </RadioGroup>
              <Grid style={{textAlign:'center'}}>
              <Button onClick={this.getQuote} disabled={!this.state.enablesubmit} variant='contained' color='primary'>Get Quote</Button></Grid>
             {this.state.totalQuote&&( <Grid style={{textAlign:'center',color:'darkblue',fontSize:'20px'}}>
                <p> Total Amount to get Your Website </p>
               <p style={{color:'red'}}>  as on {new Date().toDateString()}</p>
               <p>  &#8377;{this.state.totalQuote}</p>
               <p>Note: Domain charges excluded</p>
              </Grid>)}
               </Grid>
        )
    }
}
export default withStyles(Requeststyles)(ConversationalQuote)