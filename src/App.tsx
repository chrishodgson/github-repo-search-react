import * as React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import ItemStats from './ItemStats';
import ItemReadme from './ItemReadme';
import { Grid, Typography, Container } from '@mui/material';

export default function App() {
  return (
    <Container maxWidth="md" >
      <Grid sx={{ my: 3 }} container columns={{ xs: 4 }}>
        <Grid item xs={3}>
          <Typography variant="h5" component="h1" sx={{ mb: 1 }}>
            Github Repository Search
          </Typography>
        </Grid>
        <Grid xs={1}>
          <SearchForm />
        </Grid>
      </Grid>
      <SearchResults />
      <Grid sx={{ mt: 2 }} container columns={{ xs: 4 }}>
        <Grid item xs={3}><ItemReadme /></Grid>
        <Grid xs={1}><ItemStats /></Grid>
      </Grid>
    </Container>
  );
}
