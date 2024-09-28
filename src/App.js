import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import About from "./pages/about";
import BlogPreview from "./pages/blogPreview";
import BlogMain from "./pages/blogMain";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Leaders from "./pages/leaders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog-preview" element={<BlogPreview />} />
        <Route path="blog-main" element={<BlogMain />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="leaders" element={<Leaders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
