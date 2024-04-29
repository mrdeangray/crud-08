import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RepoContext } from "../context/RepoProvider";
import { v4 as uuid } from "uuid";
const Input = styled.input`
  border: 1px solid blue;
`;

const CreateRepo = () => {
  const { repos, setRepos } = useContext(RepoContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {};
    user.id = uuid();
    user.score = 0;
    user.name = inputValue;
    const newUsers = [...repos, user];
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

export default CreateRepo;
