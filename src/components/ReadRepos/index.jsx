import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RepoContext } from "../context/RepoProvider";
import Repo from "../Repo";

const P = styled.p`
  font-size: 40px;
  color: blue;
`;
const ReadRepos = () => {
  const { repos } = useContext(RepoContext);

  return (
    <div>
      <P>Repos</P>
      {repos.map((repo) => {
        return <Repo repo={repo} key={repo.id} />;
      })}
      <Link to={`/create`}>
        <button>Create Repo</button>
      </Link>
    </div>
  );
};

export default ReadRepos;
