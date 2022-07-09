import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'
import {Card,CardContent,CardMedia,Typography,Button,Modal, ListItem, ListItemText} from '@mui/material'
import withStyles from '@material-ui/core/styles/withStyles';
import DesignCard from '../Components/DesignCard/Designs'
import TypeWriterEffect from 'react-typewriter-effect';
import {Fade,
Flip,
Rotate,
Zoom,
Bounce,
Roll} from 'react-reveal'
import Designstyles from '../Components/Styles/DesignStyles';
import CoversationalQuote from '../Components/CoversationalQuote';
import SimpleSlider from '../Components/Slider/carouselSlider';
const designs=[
    {
        id:'1',
        title:'',
        img:'sdesign1.jpg',
        content:'johgikjkggig'
    },
    {
        id:'2',
        title:'',
        img:'sdesign2.jpg',
        content:'johgikjkggig'
    },
    {
        id:'2',
        title:'',
        img:'sdesign3.jpg',
        content:'johgikjkggig'
    },
    {
        id:'1',
        title:'',
        img:'sdesign4.jpg',
        content:'johgikjkggig'
    },
    {
        id:'2',
        title:'',
        img:'sdesign5.jpg',
        content:'johgikjkggig'
    },
    {
        id:'2',
        title:'',
        img:'sdesign6.jpg',
        content:'johgikjkggig'
    },
]
class Designs extends Component{

state={
    openQuote:false
}
openQuoteModal=()=>{
    this.setState({
        openQuote:true
    })
}
    navigateToUzhalavan = () =>
    {
window.open("https://my-income-fbd33.web.app",'_blank')
}
    render(){
        const{classes}=this.props;
        return(
            <Grid>
                {
                    this.state.openQuote&&(
                         <Modal open={this.state.openQuote} onBackdropClick={()=>this.setState({
                      openQuote:false
                   })} style={{width:'90%',height:'400px',margin:'10px auto'}}>
                       <Card>
                       <CoversationalQuote/>
                       </Card>
                   </Modal>
                    )
                }
                <Grid >
                  <TypeWriterEffect
                  textStyle={{
                    fontFamily: 'Red Hat Display',
                     color: '#2196f3',
                     fontWeight: 500,
                      fontSize: '2.5em',
        }}
        startDelay={100}
        cursorColor="#3f51b5"
        multiText={[
          'Our Products'
          
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
                </Grid>
                <Zoom>
               <Grid container xs={12} style={{marginTop:'15px'}}>
                        
                        <Grid item md={6} lg={6} sm={12} xs={12}>
                            <img src="products/comLogo1.png"  />
                            
                        </Grid>
                        <Grid item md={6} lg={6} sm={12} xs={12} className={classes.content}>
                            <ListItem>
                                <ListItemText>
                                   Ease to Know your Stats..
                               </ListItemText>
                               
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                  Things are more easier than your expert
                               </ListItemText>
                               
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                  Complicated Things changes to more simple ,Easy use
                               </ListItemText>
                               
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                <Button variant='outlined' onClick={this.navigateToUzhalavan } >Visit us</Button>
                               </ListItemText>
                               
                            </ListItem>
                            
                        </Grid>
               </Grid>
               </Zoom>
               <hr style={{marginTop:'35px'}}/>
                <Grid container>
                   
                    <Grid lg={6} md={6} sm={12} xs={12}>
                        <Flip><img src="/images/cuweb3.png" width="100%"/></Flip></Grid>
                    
                       <Grid lg={6} md={6} sm={12} xs={12}><TypeWriterEffect
                  textStyle={{
                    fontFamily: 'Red Hat Display',
                     color: '#2196f3',
                     fontWeight: 500,
                      fontSize: '2.5em',
        }}
        startDelay={1000}
        cursorColor="#3f51b5"
        multiText={[
          'Get customized Website'
          
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
      <p className={classes.content}>For Custom Website, Need to Provide wireframes that you want </p>
      <p className={classes.content}>Provide reference of some other websites</p>
      <p className={classes.Notecontent}>Note: We couldn't replicate exact copy the reference website because of copyright issue, will design similar to that</p>
   
          <Button variant='outlined'onClick={this.openQuoteModal} color='primary'>Get your Quote</Button>
   
      </Grid>
      
      
                </Grid>
                      <Grid container>
                   <Grid lg={6} md={6} sm={12} xs={12}><TypeWriterEffect
                  textStyle={{
                    fontFamily: 'Red Hat Display',
                     color: '#2196f3',
                     fontWeight: 500,
                      fontSize: '2.5em',
        }}
        startDelay={1000}
        cursorColor="#3f51b5"
        multiText={[
          'Single platform to Your Business'
          
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
      <p className={classes.content}>Get static Website for your startup/business </p>
      <p className={classes.content}>Get Customised website for your business/startup</p>
      <p className={classes.content}>Single Platform for all of your communication</p>
   
      </Grid>
                    <Grid lg={6} md={6} sm={12} xs={12}>
                        <Zoom><img src="/images/design1.gif" width="100%"/></Zoom></Grid>
                    
                       
      </Grid>
               </Grid>
               
        )
    }
}
export default withStyles(Designstyles)(Designs)