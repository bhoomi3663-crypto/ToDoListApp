import axios from "axios";
import { useEffect, useState } from "react";
import "./Posts.css";
import Button from "../../Componants/Button/Button";
import { useNavigate } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3000/posts")
  //       .then((res) => setPosts(res.data))
  //       .catch((error) => console.error(error));
  //   }, []);
  //   return (
  //     <>
  //       <p>Posts</p>
  //       <div>
  //         <table>
  //           <tr>
  //             <td>Id</td>
  //             <td>Title</td>
  //             <td>Author</td>
  //           </tr>
  //           {posts.map((item) => (
  //             <tr>
  //               <td key={item.id}>{item.id}</td>
  //               <td>{item.title}</td>
  //               <td>{item.author}</td>
  //             </tr>
  //           ))}
  //         </table>
  //       </div>
  //     </>
  //   );
  // }

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPosts(res.data))
      .catch(() =>
        setError("Unable to load posts. Check that the API server is running."),
      )
      .finally(() => setIsLoading(false));
  }, []);
  const handleAdd = () => {
    navigate("/addForm");
  };
  return (
    <main className="posts-page">
      <div className="post-page-layout">
        <h1 className="posts-heading">Posts</h1>
        <Button label="Add" className="post-page-btn" onClick={handleAdd} />
      </div>
      {isLoading ? (
        <p className="posts-message" role="status">
          Loading posts...
        </p>
      ) : error ? (
        <p className="posts-message posts-error" role="alert">
          {error}
        </p>
      ) : (
        <div className="posts-table-wrap">
          <table className="posts-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="posts-empty" colSpan="3">
                    No posts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
export default Posts;
