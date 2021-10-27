import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
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
    owner: item.owner.login,
    repo: item.name,
    link: item.html_url
  }))
})

export const fetchReadme = createAsyncThunk('repositories/fetchReadme', async repository => {
  const { owner, repo, id } = repository
  const response = await get(`repos/${owner}/${repo}/readme`)
  const encoded = response.data.content || ''
  const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
  return { id, decoded }
})

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchReadme.fulfilled, (state, action) => {
      const { id, decoded } = action.payload
      const index = state.findIndex(repository => repository.id === id)
      state[index].readme = decoded
      return state
    }),
    builder.addCase(fetchRepositories.fulfilled, (state, action) => action.payload)
  }
})

export const selectRepositories = state => state.repositories
export const selectRepositoryById = id => state => {
  id = parseInt(id)
  return state.repositories.find(repository => repository.id === id)
}
export default repositoriesSlice.reducer
