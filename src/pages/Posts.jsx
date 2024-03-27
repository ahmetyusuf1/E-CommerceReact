import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.ok && response.status === 200) {
          return response.json();
        }
      })
      .then((data) => setPosts(data))
      .then(setLoader(false))
      .catch((error) => console.log(error));
  }

  // console.log(posts);

  return (
    <main className="posts">
      <div className="pg-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1>Posts</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item active">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item text-secondary">Posts</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="container content">
          {loader ? (
            <Loader />
          ) : (
            <div className="row">
              {posts.map((post) => {
                // console.log(post);
                const { id, title, body } = post;
                return (
                  <div className="col-sm-6" key={id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Posts;
