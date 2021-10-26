import { configureStore } from '@reduxjs/toolkit'
import repositoriesReducer from '../features/repositories/repositoriesSlice'

export default configureStore({
  reducer: {
    repositories: repositoriesReducer
  }
})