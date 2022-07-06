import {
  Home,
  Posts,
  Profile,
  NavBar,
  Register,
  Login,
  Logout,
  CreatePost,
  SinglePost,
  PostCard,
} from "components";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMe } from "api/authentication";

export default function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const myLocalStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(myLocalStorageToken);
      setCurrentUser(result.data);
      setToken(myLocalStorageToken);
    }
    if (myLocalStorageToken) {
      getMe();
    }
  }, [token]);

  return (
    <div>
      <NavBar token={token} />

      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route
          path="/posts"
          element={<Posts postList={postList} setPostList={setPostList} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout setToken={setToken} />} />
        <Route path="/createpost" element={<CreatePost token={token} />} />
        <Route
          path="/posts/:id"
          element={<SinglePost postList={postList} currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}
