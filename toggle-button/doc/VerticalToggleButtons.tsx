import * as React from 'react';
import { ViewList as ViewListIcon } from '@mui/icons-material';
import { ViewModule as ViewModuleIcon } from '@mui/icons-material';
import { ViewQuilt as ViewQuiltIcon } from '@mui/icons-material';
import { ToggleButton } from '@mui/material';
import { ToggleButtonGroup } from '@mui/material';

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt">
        <ViewQuiltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
