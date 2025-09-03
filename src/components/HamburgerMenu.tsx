import React, { useState, ReactNode } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface HamburgerMenuProps {
  children?: ReactNode;
}

function HamburgerMenu({ children }: HamburgerMenuProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(state);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        edge="end"
        sx={{ position: 'absolute', top: 16, right: 16 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#222',
            color: 'white',
            boxShadow: 3,
            borderRadius: '16px 0 0 16px',
            width: 250,
          },
        }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{
            padding: 16,
            height: '100%',
          }}
        >
          {children ? children : <h2>Menu</h2>}
        </div>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;