import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia'; 
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MapCard from 'images/map.jpg';
import Directions from '@material-ui/icons/Directions';
import Tooltip from '@material-ui/core/Tooltip';

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
        <a href="https://www.google.de/maps/place/Gulati+Pharma/@25.1888526,75.8348495,15z/data=!4m5!3m4!1s0x0:0x75bd7b80836f2d9c!8m2!3d25.1888138!4d75.8419305">
        <img src={MapCard} alt="Gulati Pharma Location" width='90%'         
        style={{margin:'auto', maxWidth: '100%',height:'auto', display:'block'}}/>
        </a>
         <Typography color="textSecondary">
         
        </Typography>        
        </CardContent>
        <CardActions>
        <Tooltip title="Locate Us">
          <a href="https://www.google.de/maps/dir//gulati+pharma,1,+Porwal+Medical+Market,+Ladpura,+Kota,+Rajasthan+-+324001/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x396f9b18019b44f3:0x75bd7b80836f2d9c?sa=X&ved=2ahUKEwjnyL3HrcTdAhXE2ywKHRw_CJQQ9RcwC3oECAoQDg">
            <Directions style={{ fontSize: 36, color:"#1daee4" }} />
          </a>
        </Tooltip>
      </CardActions>
      </Card>
    );
  }
}

CardLocateUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardLocateUs);