import * as React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { Box } from '@mui/material';
import { selectRepositoryById, fetchReadme } from './repositoriesSlice';

export default function ItemReadme(props) {
  const { id } = props
  const repository = useSelector(selectRepositoryById(id))
  if (!repository) {
    return <Box>Repository not found. <Link to="/">Please return to homepage</Link></Box>
  }

  const readme = repository.readme
  if (!readme) {
    const dispatch = useDispatch()
    dispatch(fetchReadme(repository))
    return <Box>Loading Readme content...</Box>
  }

  return (
      <ReactMarkdown>{ readme }</ReactMarkdown>
  );
}