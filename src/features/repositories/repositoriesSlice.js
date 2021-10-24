import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import get from "../../app/github-client";

const initialState = []

export const fetchRepositories = createAsyncThunk('repositories/fetchRepositories', async searchText => {
  const response = await get(`search/repositories?q=${searchText}`)
  const items = response.data && response.data.items || []

  return items.map(item => ({
    id: item.id,
    forks: item.forks,
    issues: item.open_issues,
    watchers: item.watchers,
    stars: item.stargazers_count,
    author: item.owner.login,
    repo: item.name,
    link: item.html_url
  }))
})

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const selectRepositories = state => state.repositories

export default repositoriesSlice.reducer
