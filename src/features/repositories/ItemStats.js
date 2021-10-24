import * as React from 'react';
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';

export default function ItemStats(props) {
  const item = props.item
  if (!item) return null
  return (
    <Box sx={{ mt: 4 }} color="text.secondary">
      <Typography align="right" sx={{ mb: 2 }} variant="h6">Repository Stats</Typography>
      <List dense color="text.secondary">
        <ListItem><ListItemText sx={{ textAlign: "right" }} primary={'Forks: ' + item.forks}/></ListItem>
        <ListItem><ListItemText sx={{ textAlign: "right" }} primary={'Likes: ' + item.likes} /></ListItem>
        <ListItem><ListItemText sx={{ textAlign: "right" }} primary={'Starred: ' + item.stars} /></ListItem>
        <ListItem><ListItemText sx={{ textAlign: "right" }} primary={'Open issues: ' + item.issues} /></ListItem>
      </List>
    </Box>
  );
}