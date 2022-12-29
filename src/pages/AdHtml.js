import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'
import {Card,CardContent,CardMedia,Typography,Button,Modal, ListItem, ListItemText, Paper} from '@mui/material'
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
const colorArray = ['#FF0000', '#800000', '#FFFF00', '#00FF00', '#FF00FF', '#000080', '#008000', '#00FFFF', '#800080',
    '#FFBF00', '#DFFF00', '#40E0D0', '#6495ED', '#DE3163', '#CD5C5C', '#FA8072', '#FFA07A']
class AdPage extends Component{

state={
    openQuote: false,
    AdArray: [{ name: "hosting", img: "/images/design5.gif", description: ["geh", "iohh"], link: "#" },
        { name: "hosting", img: "/images/design5.gif", description: ["geh", "iohh"], link: "#" },
        { name: "hosting", img: "/images/design5.gif", description: ["geh", "iohh"], link: "#" },
        { name: "hosting", img: "/images/design5.gif", description: ["geh", "iohh"], link: "#" },
        {name:"hosting",img:"/images/design5.gif",description:["geh","iohh"],link:"#"}
    ]
    }
    componentDidMount()
    {
        
    }
openQuoteModal=()=>{
    this.setState({
        openQuote:true
    })
}
    navigateToUzhalavan = (link) =>
    {
window.open(link,'_blank')
    }
   
    render(){
        const{classes}=this.props;
        return(
            <Grid container justify="space-around" spacing={2}>
                {
                   this.props.AdArray.map(item =>
                   {
                       const random = Math.floor(Math.random() * colorArray.length);
                        const random1 = Math.floor(Math.random() * colorArray.length);
                       let color = colorArray[random]
                       let color1=colorArray[random1]
                       return (
                           <Grid item sm={6} xs={6} md={3}  >
                               <Paper style={{ padding:'15px',cursor:'pointer' ,borderRadius:'5px',border:`1px solid${color}`}} onClick={this.navigateToUzhalavan(item.link)}>
                               <Grid  style={{color:color1}}>
                                   <h2 >{item.name}</h2>
                               </Grid>
                               <Grid>
                                   <img src={item.img} width={200} />
                               </Grid>
                               <Grid>
                                  <div className={classes.desc} style={{color:color}}>
                                   {
                                       item.description.map(item1 =>
                                       {
                                           return (
                                             
                                <p>
                                   {item1}
                               </p>
                               
                           
                                           )
                                       })
                                   }
                                    </div>
                                </Grid>
</Paper>
                           </Grid>
                           
                        )
                    })
                }
               </Grid>
               
        )
    }
}
export default withStyles(Designstyles)(AdPage)