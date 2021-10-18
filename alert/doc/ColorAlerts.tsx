import * as React from 'react';
import { Alert } from '@mui/material';

export default function ColorAlerts() {
  return (
    <Alert severity="success" color="info">
      This is a success alert — check it out!
    </Alert>
  );
}
