import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LogoImage from 'images/favicon.png';

const styles = theme => ({
  card: {
    maxWidth: 700,
    maxHeight:350
  },
  media: {   
    transform: 'scale(0.7)'
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  body: {
    fontSize:'1.8rem'
  }
});

class CardContactUs extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
       expanded: false,
       favIconColor: "#1daee4",
       shareIconColor: "#1daee4",
       likes:this.props.likes
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  CheckfavIconActive = () => {
    this.setState(state => ({ favIconColor: "#de3c3c" }));
  };

  CheckShareIconActive = () => {
    this.setState(state => ({ shareIconColor: "#de3c3c" }));
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
       <CardHeader
          title="Contact Us"
          subheader="Serving You, Curing You!"
        />
     {/* <CardMedia
          className={classes.media}
          style={{height:'369px',transform: 'scale(0.65)'}}
          image={LogoImage}
          className={classes.image}
          title="Gulati Pharma"
        /> */}
        <CardContent>
         <Typography className={classes.title} color="textSecondary">
           
        </Typography>        
        </CardContent>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body1" className={classes.body}>
            
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

CardContactUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardContactUs);