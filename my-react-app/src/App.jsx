import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import Posts from "./components/Posts";


const Home = () => <h1>Welcome to My First React App!</h1>;

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Layout>
  );
}

export default App;



