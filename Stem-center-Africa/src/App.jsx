import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/Aboutus'
import Courses from './pages/Courses'
import Corporate from './pages/Corporate'
import Community from './pages/Community'
import Blog from './pages/Blog'
import BlogPostPage from './Components/Blog/BlogPostPage'
import Events from './pages/Events'
import Faqs from './pages/Faqs'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses/*" element={<Courses />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
