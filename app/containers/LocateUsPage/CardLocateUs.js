import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import VisitingCard from 'images/visiting_card.jpg';

const styles = theme => ({
  card: {
    maxWidth: 1400,
    maxHeight:700
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  body: {
    fontSize:'1.8rem'
  },
  title:{
    color:'#fff'
  }
});

class CardLocateUs extends React.Component {  
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
       <CardHeader
          title="Locate Us"
          subheader="Serving You, Curing You!"
        />       
        <CardContent>
         <Typography className={classes.title} color="textSecondary">
           You may Locate us either at our number or the email-address.
        </Typography>        
        </CardContent>
      </Card>
    );
  }
}

CardLocateUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardLocateUs);