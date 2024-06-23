import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const Sidebar = ({ open }) => {
  return (
    <div className={`sidebar ${open ? '' : 'sidebar-hidden'}`}>
      <List>
        <ListItem button component={Link} to="/tables">
          <ListItemText primary="Tables" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/charts">
          <ListItemText primary="Charts" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/calendar">
          <ListItemText primary="Calendar" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/kanban">
          <ListItemText primary="Kanban Board" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
