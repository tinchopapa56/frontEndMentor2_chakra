import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Stack} from "@chakra-ui/react"

const Home:React.FC = () => {
  return (
      <Stack spacing={8}>
        <h1>Ex</h1>
        <Link to="/ex0"> Ex 0 </Link>
        <Link to="/ex1"> Ex 1 </Link>
        <Link to="/ex2"> Ex 2 </Link>
        <Link to="/ex3"> Ex 3 </Link>
        <Link to="/ex4"> Ex 4 </Link>
        <Link to="/ex6"> Ex 6 </Link>
      </Stack>
  );
};

export default Home;

