import React, { createContext, useEffect, useState } from "react";

export const RepoContext = createContext(null);

const RepoProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setRepos(JSON.parse(localStorage.getItem("crud-08-repos")) || []);
  }, []);

  return (
    <RepoContext.Provider value={{ repos, setRepos }}>
      {children}
    </RepoContext.Provider>
  );
};

export default RepoProvider;
