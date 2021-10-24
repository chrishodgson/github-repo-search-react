import * as React from 'react';
import { Provider } from 'react-redux';
import SearchForm from '../features/repositories/SearchForm';
import SearchResults from '../features/repositories/SearchResults';
import ItemStats from '../features/repositories/ItemStats';
import ItemReadme from '../features/repositories/ItemReadme';
import { Grid, Typography, Container } from '@mui/material';
import store from'./store'

export default function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Grid sx={{ my: 3 }} container columns={{ xs: 4 }}>
          <Grid item xs={2}>
            <Typography variant="h5" component="h1" sx={{ mb: 1 }}>
              Github Repository Search
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <SearchForm />
          </Grid>
        </Grid>
        <SearchResults />
        <Grid sx={{ mt: 2 }} container columns={{ xs: 4 }}>
          <Grid item xs={3}><ItemReadme /></Grid>
          <Grid item xs={1}><ItemStats /></Grid>
        </Grid>
      </Container>
    </Provider>
  );
}
