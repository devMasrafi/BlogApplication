import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./components/layouts/MainLayout";
import Blog from "./pages/Blog";
import Features from "./pages/Features";
import Videos from "./pages/Videos";
import WorkWithOthers from "./pages/WorkWithOthers";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TermsAndCondition from "./pages/TermsAndCondition";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/termsandcondition" element={<TermsAndCondition/>} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/workwithothers" element={<WorkWithOthers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
