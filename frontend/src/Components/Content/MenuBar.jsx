import React, { useContext, useState } from 'react';
import { Box, Menu, MenuItem, ListItemIcon, IconButton, Tooltip } from '@mui/material';
import { MoreVertRounded, DeleteRounded, CloseRounded } from '@mui/icons-material';
import { Context } from '../../Context/Context';

const MenuBar = () => {

  const { activeChatIndex, deleteChat, setActiveChatIndex, setLoading } = useContext(Context);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const CloseChat = () => {
    setLoading(false);
    if (activeChatIndex != null) {
      setActiveChatIndex(null);
    }
  }

  const DeleteChat = () => {
    CloseChat();
    deleteChat(activeChatIndex);
  }

  const OpenDetail = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const CloseDetail = () => {
    setAnchorEl(null);
  };

  // const OpenModal = () => { };

  // const LogOut = () => { };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: 'auto' }}>
        <Tooltip>
          <IconButton
            onClick={OpenDetail}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MoreVertRounded />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={CloseDetail}
        onClick={CloseDetail}
        PaperProps={{
          elevation: 0,
          sx: {
            background: '#323232',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: '#323232',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={CloseChat}>
          <ListItemIcon>
            <CloseRounded fontSize="small" />
          </ListItemIcon>
          Close Chat
        </MenuItem>
        <MenuItem onClick={DeleteChat}>
          <ListItemIcon>
            <DeleteRounded fontSize="small" />
          </ListItemIcon>
          Delete Chat
        </MenuItem>
      </Menu>
    </>
  );
}

export default MenuBar;
