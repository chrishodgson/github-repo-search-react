import * as React from 'react';
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchResultsItem from './SearchResultsItem';
import { selectRepositories } from './repositoriesSlice'

export default function SearchResults() {
  const rows = useSelector(selectRepositories)

  if (!rows.length) return (<div>No results</div>)

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="github repository table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.map(row => <SearchResultsItem key={ row.id } item={ row }></SearchResultsItem>) }
        </TableBody>
      </Table>
    </TableContainer>
  );
}