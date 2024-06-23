import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeContext } from '../ThemeContext';

const Topbar = ({ toggleSidebar }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Switch onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
