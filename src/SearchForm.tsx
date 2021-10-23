import * as React from 'react';
import { TextField } from '@mui/material';

export default function SearchForm() {
  return (
    <TextField fullWidth sx={{ mt: -2, mr: 0 }} id="standard-basic" label="Search by name" variant="standard" />
  );
}