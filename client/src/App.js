import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "scenes/home";
import LoginPage from "scenes/login";
import ProfilePage from "scenes/profile";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
