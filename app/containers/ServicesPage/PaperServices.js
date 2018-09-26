import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});


class PaperSheet extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {
         expanded: false,
         favIconColor: "#1daee4",
         shareIconColor: "#1daee4",
         likes:this.props.likes
      };
    }
    
    render() {
      const { classes } = this.props;
      return (        
        <div className="row">        
          {this.props.companyProducts.map((object, i) => 
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <Paper className={classes.root} style={{margin:'15px', paddingBottom: '20px',
    paddingTop: '20px', height: '100px', width: '600px', textAlign: 'center'}} elevation={1} >
            <div className="service-card-content"> 
            <img src={object[1]} alt={object[0]} height= '75px' width= '150px'style={{marginBottom:'20px'}}/>
            <Typography style={{textAlign:'left'}} variant="display1" component="h3">
             {object[0]}         
             <Divider/>
            <Typography style={{display: 'block', marginTop:'10px'}} variant="headline" component="h3">
             {object[2]}             
            </Typography>    
            </Typography>            
            </div>
            
          </Paper>
          </div>
          )}
        </div>
      );
    }
  }


PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);