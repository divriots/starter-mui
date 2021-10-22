import * as React from 'react';
import { green, pink } from '@mui/material/colors';
import { Avatar } from '~/avatar';
import { Stack } from '@mui/material';
import { Folder as FolderIcon } from '@mui/icons-material';
import { Pageview as PageviewIcon } from '@mui/icons-material';
import { Assignment as AssignmentIcon } from '@mui/icons-material';

export default function IconAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: pink[500] }}>
        <PageviewIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }}>
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}
