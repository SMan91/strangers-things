import { Home, Posts, Profile, NavBar } from "components";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const myLocalStorageToken = localStorage.getItem("token");
    if (myLocalStorageToken) {
      setToken(myLocalStorageToken);
    }
  }, []);

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
