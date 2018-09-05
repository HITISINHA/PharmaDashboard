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

export const mailFolderListItems = (
    
  <div>
    <ListItem button>
      <ListItemIcon>
      <Link to="/"><HomeIcon className="drawer-icon" style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Link to="/"><StoreIcon className="drawer-icon" style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Link to="/"><WorkIcon className="drawer-icon" style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
      </ListItemIcon>
      <ListItemText primary="Services" />
    </ListItem>   
  </div>  
);

export const otherMailFolderListItems = (
  <div>
     <ListItem button>
     <ListItemIcon className="drawer-icon">
     <Link to="/"><PinDropIcon style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
     </ListItemIcon>
     <ListItemText primary="Locate Us" />
   </ListItem>
   <ListItem button>
     <ListItemIcon>
     <Link to="/"><ContactPhoneIcon className="drawer-icon" style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
     </ListItemIcon>
     <ListItemText primary="Contact Us" />
   </ListItem>
  </div>
);