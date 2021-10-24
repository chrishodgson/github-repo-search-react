import * as React from 'react';
import { Button, TableCell, TableRow } from '@mui/material';

export default function SearchResultsItem(props) {
  const item = props.item

  const onMoreInfoLinkClicked = () => {
    dispatch( fetchRepositories(searchText) )
  }
  return (
    <TableRow
      key={item.key}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{ item.repo }</TableCell>
      <TableCell>{ item.author }</TableCell>
      <TableCell align="right">
        <Button size="small" href="#" onClick={ onMoreInfoLinkClicked }>More Info</Button>
      </TableCell>
      <TableCell align="right">
        <Button size="small" href={ item.link } target="_blank"
          title="Opens the github.com repository in a new window" >
        View on github
        </Button>
      </TableCell>
    </TableRow>
  );
}