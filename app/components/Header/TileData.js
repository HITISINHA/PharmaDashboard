import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PinDropIcon from '@material-ui/icons/PinDrop';
import StoreIcon from '@material-ui/icons/Store';
import WorkIcon from '@material-ui/icons/Work';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

export const mailFolderListItems = (
    
  <div>
    <Tooltip title="Home">
      <ListItem button>
        <ListItemIcon>
        <Link to="/"><HomeIcon className="drawer-icon" style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
        </ListItemIcon>
        <ListItemText style={{fontSize: '15px'}} primary="Home" />
      </ListItem>
    </Tooltip>
    <Tooltip title="Products">
      <ListItem button>
        <ListItemIcon>
        <Link to="/products"><StoreIcon className="drawer-icon" style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
        </ListItemIcon>
        <ListItemText style={{fontSize: '15px'}} primary="Products" />
      </ListItem>    
    </Tooltip>
    <Tooltip title="Services">
      <ListItem button>
        <ListItemIcon>
        <Link to="/services"><WorkIcon className="drawer-icon" style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
        </ListItemIcon>
        <ListItemText style={{fontSize: '15px'}} primary="Services" />
      </ListItem>  
    </Tooltip>
  </div>  
);

export const otherMailFolderListItems = (
  <div>
    <Tooltip title="Locate Us">
     <ListItem button>
      <ListItemIcon className="drawer-icon">
      <Link to="/locateus"><PinDropIcon style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
      </ListItemIcon>
      <ListItemText style={{fontSize: '15px'}} primary="Locate Us" />
     </ListItem>
   </Tooltip>
    <Tooltip title="Contact Us">
   <ListItem button>
     <ListItemIcon>
     <Link to="/contactus"><ContactPhoneIcon className="drawer-icon" style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
     </ListItemIcon>
     <ListItemText style={{fontSize: '15px'}}  primary="Contact Us" />
   </ListItem>
   </Tooltip>
  </div>
);