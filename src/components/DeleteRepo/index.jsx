import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RepoContext } from "../context/RepoProvider";
import styled from "styled-components";

const Status = styled.p`
  font-size: 30px;
  color: blue;
`;

const DeleteRepo = () => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const { repos, setRepos } = useContext(RepoContext);
  const { id } = useParams();
  const [repo, setRepo] = useState();

  useEffect(() => {
    const repo = repos.find((u) => u.id === id);
    setRepo(repo);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = () => {
    const newRepos = repos.filter((repo) => repo.id !== id);
    setIsDeleting(true);

    setTimeout(() => {
      setRepos(newRepos);
      navigate(`/`);
      setIsDeleting(false);
    }, 2000);
  };
  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h5>DeleteRepo {repo?.name}</h5>
      <button onClick={handleDelete}>Delete {repo?.name}</button>
  <div>
  {
        repos.map((el)=>{
          return <span>{el.name}, </span>
        })
      }
  </div>
      {isDeleting && <Status>Deleting...</Status>}
    </div>
  );
};

export default DeleteRepo;
