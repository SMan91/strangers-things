import { Home, Posts, Profile, NavBar } from "components";
import { Routes, Route } from "react-router-dom";

export default function App() {
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
