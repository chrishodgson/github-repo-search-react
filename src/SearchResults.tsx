import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchResultsItem from './SearchResultsItem';

export default function SearchResults() {
  const rows = [{ name: 'github-repo-search-react', author: 'chris hodgson', link: 'https://github.com/chrishodgson/github-repo-search-react'}]
  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="github repository table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => <SearchResultsItem key={row.name}></SearchResultsItem>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}