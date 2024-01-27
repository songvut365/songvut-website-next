import About from "./components/About";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />

      <div className="bg-slate-100 py-5 lg:py-20">
        <Skill />
        <Experience />
        <Project />
        <Blog />
      </div>
    </main>
  );
}
