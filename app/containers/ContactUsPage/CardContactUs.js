import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import VisitingCard from 'images/visiting_card.jpg'

const styles = theme => ({
  card: {
    maxWidth: 700,
    maxHeight:350
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  body: {
    fontSize:'1.8rem'
  }
});

class CardContactUs extends React.Component {
  state = {
    mobileView: window && window.innerWidth < 768
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
       <CardHeader
          title="Contact Us"
          subheader="Serving You, Curing You!"
        />
         <img src={VisitingCard} alt="Gulati Pharma Contact" width={this.state.mobileView ? '280px' : '560px'} style={{margin:'auto', maxWidth: '100%',height:'auto', display:'block'}}/>
        <CardContent>
         <Typography className={classes.title} color="textSecondary">
           
        </Typography>        
        </CardContent>
      </Card>
    );
  }
}

CardContactUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardContactUs);