import * as React from 'react';
import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material';

export default function ItemReadme() {
  const readme = null // 'readme text' //useSelector(state => state.readme)

  if (!readme) return null
  return (
    <Box sx={{ mt: 4, alignContent: "right" }} color="text.secondary">
      <Typography sx={{ mb: 2 }} variant="h6" >Repository Readme</Typography>
      <Typography align="justify">{ readme }</Typography>
    </Box>
  );
}