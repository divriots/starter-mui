import * as React from 'react';
import { FormatAlignLeft as FormatAlignLeftIcon } from '@mui/icons-material';
import { FormatAlignCenter as FormatAlignCenterIcon } from '@mui/icons-material';
import { FormatAlignRight as FormatAlignRightIcon } from '@mui/icons-material';
import { FormatBold as FormatBoldIcon } from '@mui/icons-material';
import { FormatItalic as FormatItalicIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Divider } from '@mui/material';

export default function VerticalDividerMiddle() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <FormatAlignLeftIcon />
        <FormatAlignCenterIcon />
        <FormatAlignRightIcon />
        <Divider orientation="vertical" variant="middle" flexItem />
        <FormatBoldIcon />
        <FormatItalicIcon />
      </Box>
    </div>
  );
}
