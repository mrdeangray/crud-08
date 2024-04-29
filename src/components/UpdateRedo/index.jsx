/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RepoContext } from "../context/RepoProvider";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid green;
`;

const UpdateRepo = () => {
  const { id } = useParams();

  const { repos, setRepos } = useContext(RepoContext);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const repo = repos.find((repo) => repo.id === id);
    console.log(repo);
    setInputValue(repo.name);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUsers = repos.map((u) => {
      if (u.id === id) {
        u.name = inputValue;
      }

      return u;
    });

    setRepos(newUsers);
    setInputValue("");
    localStorage.setItem("crud-08-repos", JSON.stringify(newUsers));
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>CreateRepo</h6>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleChange} autoFocus  />
      </form>
      {repos.map((elem) => {
        return <span key={elem.id}>{elem.name}, </span>;
      })}
    </div>
  );
};

export default UpdateRepo;
