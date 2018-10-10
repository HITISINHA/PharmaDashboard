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
import { BUSINESSCONFIG } from '../../constants/BusinessConfig';

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
    const companyName = BUSINESSCONFIG.COMPANY;
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
       <CardHeader
          title={companyName.LOCATEMESSAGE}
          subheader={companyName.CONTACTTAG}
        />       
        <CardContent>
        <a href={companyName.LOCATIONLINK}>
        <img src={MapCard} alt={companyName.LOCATETEXT} width='90%'         
        style={{margin:'auto', maxWidth: '100%',height:'auto', display:'block'}}/>
        </a>
         <Typography color="textSecondary">
         
        </Typography>        
        </CardContent>
        <CardActions>
        <Tooltip title={companyName.LOCATEMESSAGE} >
          <a href={companyName.DIRECTIONLINK}>
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