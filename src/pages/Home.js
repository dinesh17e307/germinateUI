import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'
import TypeWriterEffect from 'react-typewriter-effect';
import {
  Fade,
  Flip,
  Rotate,
  Zoom,
  Bounce,
  Roll
} from 'react-reveal'
import Homestyles from '../Components/Styles/HomeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Counter from '../Components/Counter';
import AddPage from './AddPage';
import AffiliatePage from './AffiliatePage';
const custQuotes = [
  'Customer Interaction in your Absence', "Customer's compatability"
  , 'Ease of Getting More information', 'Reach of business Tremendously']
const DigiQuotes = [
  'Survey forms', 'MCQ forms', 'Registration forms', 'Quote forms', 'Emails'
]
class Home extends Component {
  componentDidMount() {

    // window.open(`/design`,"_self")
  }
  render() {
    const { classes } = this.props;

    return (
      <Grid container lg={12} md={12} xs={12} style={{ margin: '10px' }} >
        <Grid item lg={12} md={12} xs={12}>
          <p style={{
            fontFamily: 'Red Hat Display',
            color: '#2196f3',
            fontWeight: 500,
            fontSize: '2em',
          }}>
            My portfolio <span style={{color:'green',fontSize:'15px'}}> Navigate to products page for more details and links</span>

          </p>
        </Grid>
        <Grid item lg={12} md={12} xs={12} style={{ marginBottom: '15px',color:'green' }}>
         <AffiliatePage />
        
        </Grid>
        <Fade top>
          <Grid item lg={12} md={12} xs={12} style={{ marginBottom: '15px' }}>

            <Grid container lg={12} md={12} xs={12}>
              <Grid item lg={6} md={6} xs={12} style={{ width: '100%', }}>

                <p className={classes.heading}>A Former's Portal</p>
                <p className={classes.content}>Developed for Internal use.</p>
                <p className={classes.content}>where we can get consolidated reports of weekly income.</p>
                <p className={classes.content}>Add Daily quantity of farmer's products like<span style={{ color: 'red' }}> (flower production,milk)</span></p>
                <p className={classes.content}>Bidding concept, where we can run bid by using this portal.</p>
              </Grid>

              <Grid item lg={6} md={6} xs={12} style={{ marginBottom: '15px' }}>
                <img style={{ borderRadius: '15px' }} src='/images/income1.png' width="100%" />
              </Grid>
            </Grid>
          </Grid>
        </Fade>
        {/* <Grid container lg={11} xs={12} style={{ justifyContent: 'space-between', marginBottom: '15px' }} >
          <Counter maxCount={97} sty={{ fontSize: 'xxx-large', margin: 'auto', fontFamily: 'Times New Roamn', fontWeight: 700, color: 'blue', width: '100px', textAlign: 'center' }}
            content={"Clear description of who you are. From the moment a client or customer visits your website, Increases in leads to customer percent"}
            bg={'/images/dg6.png'}
            prefix={""}
            suffix={"%"}
            duration={8}
          />
          <Counter minCount={-875.039} maxCount={160527.012} sty={{ width: '150px', fontSize: 'large', margin: 'auto', fontFamily: 'Times New Roamn', fontWeight: 700, color: 'blue', textAlign: 'center' }}
            content={" More engages with customer than ever before.Happy customer , results in more Revenue ever before"}
            bg={'https://c8.alamy.com/comp/2F749ET/flat-illustration-businessman-supporting-growth-in-economy-on-chart-graph-business-and-finance-concept-2F749ET.jpg'}
            prefix={"INR "}
            suffix={""}
            duration={10}
            decimal={4}
          />
        </Grid> */}
        <Fade right>
          <Hidden mdUp>
            <Grid item lg={12} md={12} xs={12}  >
              <Grid container lg={12} md={12} xs={12}>
                <Grid item lg={6} md={6} xs={12}>
                  <p className={classes.heading}>Customize based on our needs</p>
                  {
                    DigiQuotes.map(item => {
                      return (
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                          <img src='/images/tick.png' width={'50px'} alt="logo" />
                          <p className={classes.content}>{item}</p>
                        </div>
                      )
                    })
                  }
                </Grid>

                <Grid item lg={6} md={6} xs={12} style={{ marginBottom: '15px' }}>
                  <img style={{ borderRadius: '15px' }} src='/images/surveyform.png' width="100%" />
                </Grid>
              </Grid>
            </Grid>

          </Hidden>

        </Fade>

        <Fade right>
          <Hidden smDown>
            <Grid item lg={12} md={12} xs={12} style={{ marginBottom: '15px' }}>
              <Grid container lg={12} md={12} xs={12}>
                <Grid item lg={6} md={6} xs={12}>
                  <p className={classes.heading}>Dynamic form creation Engine</p>
                  {
                    DigiQuotes.map(item => {
                      return (
                        <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: "10px" }}>
                          <img src='/images/tick.png' width={'50px'} />
                          <p className={classes.content}>{item}</p>
                        </div>
                      )
                    })
                  }
                </Grid>
                <Grid item lg={6} md={6} xs={12} style={{ marginBottom: '15px' }}>
                  <img style={{ borderRadius: '15px' }} src='/images/quoteform.png' alt="logo" width="100%" />
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Fade>
        <Fade left>
          <Grid item lg={12} md={12} xs={12} style={{ marginBottom: '15px' }}>
            <Grid container lg={12} md={12} xs={12}>

              <Grid item lg={6} md={6} xs={12}>

                <img style={{ borderRadius: '15px' }} src='/images/surveyform.png' alt="logo" width="100%" />
              </Grid>
              <Grid item lg={6} md={6} xs={12} style={{ marginBottom: '15px' }}>
                <img style={{ borderRadius: '15px' }} src='/images/gate.png' alt="logo" width="100%" />
              </Grid>
            </Grid>
          </Grid>
        </Fade>



      </Grid>
    )
  }
}
export default withStyles(Homestyles)(Home)