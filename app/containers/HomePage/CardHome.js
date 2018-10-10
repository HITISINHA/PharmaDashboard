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
import { BUSINESSCONFIG } from '../../constants/BusinessConfig';

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
    const companyName = BUSINESSCONFIG.COMPANY;
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
       <CardHeader
          title={companyName.UPPERCASENAME}
          subheader={companyName.DESCRIPTION}
        />
        <img src={LogoImage} alt={companyName.CAMELCASENAME} width='280px' style={{margin:'auto', maxWidth: '100%',height:'auto', display:'block'}}/>
        <CardContent>
         <Typography className={classes.title} color="textSecondary">
         {companyName.HOMEHEADER}
        </Typography>
        <Typography variant="headline" component="h2">
        <b>{companyName.COMPANYQUOTE}</b>
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
            {companyName.COMPANYDETAILS}
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