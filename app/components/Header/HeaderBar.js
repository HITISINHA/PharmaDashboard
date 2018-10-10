import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import  {BUSINESSCONFIG} from '../../constants/BusinessConfig.jsx';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
//   backgroundColor: '#e0fefdf5',
};


const theme = createMuiTheme({
  palette: {
    primary: { main: '#e0fffb' } // This is just green.A700 as hex.
  },
});

function HeaderBar(props) {
  const { classes } = props;
  const companyName = BUSINESSCONFIG.COMPANY;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" className="navbar-fixed-top" style={{opacity:0.9}}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
            {companyName.CAMELCASENAME}
            </Typography>
            <Button color="inherit">{companyName.CONTACTMESSAGE}</Button>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderBar);