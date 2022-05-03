import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'
import {Card,CardContent,CardMedia,Typography,Modal} from '@mui/material'
import withStyles from '@material-ui/core/styles/withStyles';
import Designstyles from '../Styles/DesignStyles';
import CloseIcon from '@mui/icons-material/Close';
class Designs extends Component{
    state={
        openModal:false,
        img:''
    }
    openModal=(item)=>{
this.setState({
    openModal:true,
    img:item
})
    }
    render(){
        const{classes}=this.props;
        console.log(this.props)
        return(
            <>
               <Grid item lg={4} sm={6} xs={12} md={4}>
                   <Card style={{border:'1px solid grey',borderRadius:'6px',margin:"7px 0px 0px 10px"}} onClick={()=>this.openModal(this.props.img)}>
                       <CardMedia component="img"
                        height={this.props.title&&this.props.content?"190":'250'}
                        image={`/images/${this.props.img}`}
                        alt={this.props.title} className={classes.ViewDesign}>

                       </CardMedia>
                   {this.props.title&&this.props.content&&(  <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                         {this.props.title}
                      </Typography>
                     <Typography variant="body2" color="text.secondary">
                      {this.props.content}
                      </Typography>
                     </CardContent>)}
                   </Card>
               </Grid>

              <Hidden smDown>
                   <Modal open={this.state.openModal} onBackdropClick={()=>this.setState({
                       openModal:false
                   })} style={{width:'60%',height:'400px',margin:'10px auto'}}>
                       <img src={`/images/${this.state.img}`} width="100%"/>
                   </Modal>
            </Hidden>
             <Hidden mdUp>
                   <Modal open={this.state.openModal} onBackdropClick={()=>this.setState({
                       openModal:false
                   })} style={{width:'90%',height:'90%',margin:'10px auto'}}>
                      
                       <img src={`/images/${this.state.img}`} width="100%" height={"100%"}/>
                   </Modal>
            </Hidden>
               </>
        )
    }
}
export default withStyles(Designstyles)(Designs)