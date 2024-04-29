import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DIV = styled.div`
  margin: 0 auto;
  border: 0.5px solid blue;
  width: 60%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const Repo = ({ repo }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    getScore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getScore = async () => {
    const { data } = await axios(`https://api.github.com/users/${repo.name}`);
    try {
      setScore(data.public_repos);
    } catch (error) {}
  };

  return (
    <DIV>
      {/* <span>{repo.id}</span> */}
      <span>{repo.name}</span>
      <span>score: {score}</span>
      <Link to={`/update/${repo.id}`}>update</Link>
      <Link to={`/delete/${repo.id}`}>delete</Link>
    </DIV>
  );
};

export default Repo;
