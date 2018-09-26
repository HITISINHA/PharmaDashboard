import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
    paddingTop: '20px',  height: '200px', width: '200px', textAlign: 'center'}} elevation={1} key={i}>
            <img src={object[1]} alt={object[0]} height= '75px' width= '150px'style={{marginBottom:'20px'}}/>
            <Typography variant="display1" component="h3">
             {object[0]}
            </Typography>
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