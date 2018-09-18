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
    maxWidth: 700
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
    fontSize:'1.5rem'
  }
});

class CardHome extends React.Component {
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
          title="GULATI PHARMA"
          subheader="Leading Wholesale Chemists"
        />
        <img src={LogoImage} alt="Gulati Pharma" width='280px' style={{margin:'auto', maxWidth: '100%',height:'auto', display:'block'}}/>
        <CardContent>
         <Typography className={classes.title} color="textSecondary">
            Our Company
        </Typography>
        <Typography variant="headline" component="h2">
        <b>Medication is manifestation of recuperation</b>
        </Typography>        
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" className="drawer-icon" style={{ fontSize: 36, color:this.state.favIconColor}} onClick={this.CheckfavIconActive} >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share" className="drawer-icon" style={{ fontSize: 36, color:this.state.shareIconColor }} onClick={this.CheckShareIconActive} >
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            style={{color:'#000'}}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body1" className={classes.body}>
            Our main focus has been on 
            Since years, PharmaDashboard has been involved in serving science, 
            with one of the best customer satisfactions in the area. To assist 
            your fight against diseases, to ensure no medical issues pull you 
            back from making the world a  safer, cleaner and safer place to 
            live, is our prime objective. We help our customers improve their 
            health, deliver medicines to market and increase laboratory productivity. 
            We offer an unmatched combination of customer focus, purchasing 
            convenience and comprehensive services.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

CardHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardHome);