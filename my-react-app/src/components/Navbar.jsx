import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-700 dark:bg-gray-900 text-white p-4 flex justify-between">
    <div className="font-bold text-xl">MyApp</div>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/tasks" className="hover:underline">Tasks</Link>
      <Link to="/posts" className="hover:underline">Posts</Link>
    </div>
  </nav>
);
export default Navbar;
