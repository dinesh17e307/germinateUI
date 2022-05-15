import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'
import {Card,CardContent,CardMedia,Typography,Modal} from '@mui/material'
import withStyles from '@material-ui/core/styles/withStyles';
import Commonstyles from './Styles/Commonstyles';
import CloseIcon from '@mui/icons-material/Close';
import CountUp from 'react-countup';
class Counter extends Component{
    state={
        openModal:false,
        countValue:0,
    }
    openModal=(item)=>{
this.setState({
    openModal:true,
    img:item
})
    }
    componentDidMount(){
        
    }
    increaseCount=()=>{
        this.setState((prevState) => ({countValue: prevState.countValue}))
    }
    setCounter=()=>{
        console.log('enter')
        for(let i=0;i<=this.props.maxCount;i++){
            console.log(i)
            this.increaseCount()
            
        }
    }
    render(){
        const{classes}=this.props;
        console.log(this.props,this.state)
        return(
            <>
               <Grid item lg={5} sm={6} xs={12} md={5} style={{marginRight:'15px'}}>
                   <Card style={{border:'1px solid grey',borderRadius:'6px',margin:"7px 0px 0px 10px",width:'100%',height:'30vh',zIndex:'1',position:'relative'}} onClick={()=>this.openModal(this.props.img)}>
                    <div style={{backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',backgroundImage: `url(${this.props.bg})`,opacity:'0.2',width:'100%',height:'100%',zIndex:'-1',position:'absolute'}}></div>
                    <div style={{display:'flex',width:'90%',}} >  
                      
                   {this.props.content&&(  <CardContent style={{width:'70%'}}>
                        
                     <Typography className={classes.content} style={{color:'black',fontWeight:700}}>
                      {this.props.content}
                      </Typography>
                     </CardContent>)}


                     <span style={this.props.sty} >
                         <CountUp
                            start={this.props.minCount?this.props.minCount:1}
                            end={this.props.maxCount}
                            duration={this.props.duration}
                            separator=" "
                            decimals={this.props.decimal}
                            decimal=","
                            prefix={this.props.prefix}
                            suffix={this.props.suffix}
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}/></span>
                     </div>
                   </Card>
               </Grid>

              
               </>
        )
    }
}
export default withStyles(Commonstyles)(Counter)