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
      <ListItemText style={{fontSize: '15px'}} primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Link to="/products"><StoreIcon className="drawer-icon" style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
      </ListItemIcon>
      <ListItemText style={{fontSize: '15px'}} primary="Products" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Link to="/services"><WorkIcon className="drawer-icon" style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
      </ListItemIcon>
      <ListItemText style={{fontSize: '15px'}} primary="Services" />
    </ListItem>   
  </div>  
);

export const otherMailFolderListItems = (
  <div>
     <ListItem button>
     <ListItemIcon className="drawer-icon">
     <Link to="/locateus"><PinDropIcon style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
     </ListItemIcon>
     <ListItemText style={{fontSize: '15px'}} primary="Locate Us" />
   </ListItem>
   <ListItem button>
     <ListItemIcon>
     <Link to="/contactus"><ContactPhoneIcon className="drawer-icon" style={{ fontSize: 36, color:"#1daee4" }} /></Link> 
     </ListItemIcon>
     <ListItemText style={{fontSize: '15px'}}  primary="Contact Us" />
   </ListItem>
  </div>
);