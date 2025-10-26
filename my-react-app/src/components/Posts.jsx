import { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
      .then(res => res.json())
      .then(data => {
        setPosts(page === 1 ? data : [...posts, ...data]);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load posts");
        setLoading(false);
      });
  }, [page]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        className="border p-2 rounded mb-4 w-full" 
        placeholder="Search posts" 
        value={search} onChange={e => setSearch(e.target.value)} 
      />
      {error && <p className="text-red-600">{error}</p>}
      {filteredPosts.map(post => (
        <Card key={post.id}>
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.body}</p>
        </Card>
      ))}
      {loading && <p>Loading...</p>}
      {!loading && <Button onClick={() => setPage(page + 1)} variant="primary">Load More</Button>}
    </div>
  );
};

export default Posts;
