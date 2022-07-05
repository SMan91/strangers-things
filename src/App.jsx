import { Home, Posts, Profile, NavBar, Register, Login } from "components";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMe } from "api/authentication";

export default function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

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
      <NavBar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
    </div>
  );
}
