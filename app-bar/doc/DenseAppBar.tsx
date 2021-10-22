import * as React from 'react';
import { AppBar } from '~/app-bar';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '~/typography';
import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
