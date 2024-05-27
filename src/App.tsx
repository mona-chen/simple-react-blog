import React from "react";
import Home from "./pages/home";
import "./styles/global.css";
import Footer from "./components/layout/footer";
import Posts from "./components/ui/post";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePost from "./components/ui/singlePost";
import { LoginForm } from "./pages/auth/login";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Posts />} />
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="/login" element={<LoginForm />} />
          </Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
