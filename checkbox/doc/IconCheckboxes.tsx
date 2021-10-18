import * as React from 'react';
import { Checkbox } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { Favorite } from '@mui/icons-material';
import { BookmarkBorder as BookmarkBorderIcon } from '@mui/icons-material';
import { Bookmark as BookmarkIcon } from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}
