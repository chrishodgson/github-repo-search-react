import * as React from 'react';
import { Button, TableCell, TableRow } from '@mui/material';

export default function SearchResultsItem() {
  const item = { name: 'github-repo-search-react', author: 'chris hodgson', link: 'https://github.com/chrishodgson/github-repo-search-react'}
  return (
    <TableRow
      key={item.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.author}</TableCell>
      <TableCell align="right">
        <Button size="small" href={ item.link } target="_blank"
          title="Opens the github.com repository in a new window" >
        View on github
        </Button>
      </TableCell>
    </TableRow>
  );
}