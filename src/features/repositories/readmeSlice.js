import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import get from "../../app/github-client";

const initialState = ''

export const fetchReadme = createAsyncThunk('repositories/fetchReadme', async (owner, repo) => {
  const response = await get(`repos/${owner}/${repo}/readme`)
  return response.data
})

export const readmeSlice = createSlice({
  name: 'readme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReadme.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const selectReadme = state => state.readme

export default readmeSlice.reducer
