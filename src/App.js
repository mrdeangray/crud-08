import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReadRepos from "./components/ReadRepos";
import CreateRepo from "./components/CreateRepo";
import UpdateRepo from "./components/UpdateRedo";
import DeleteRepo from "./components/DeleteRepo";
import RepoProvider from "./components/context/RepoProvider";


function App() {
  return (
    <div className="App">
      <RepoProvider>
        <Routes>
          <Route exact path="/" element={<ReadRepos />} />
          <Route exact path="/create" element={<CreateRepo />} />
          <Route exact path="/update/:id" element={<UpdateRepo />} />
          <Route exact path="/delete/:id" element={<DeleteRepo />} />
        </Routes>
      </RepoProvider>
    </div>
  );
}

export default App;
