import { useRef } from "react";
import Header from "./Components/common/header.tsx";
import Contact from "./Contact/Contact.tsx";
import Hero from "./Hero/Hero.tsx";
import Profile from "./Profile/Profile.tsx";
import Gaebap from "./Project/Gaebap_main.tsx";
import Gaebap_work from "./Project/Gaebap_work.tsx";
import Homepage from "./Project/Homepage_main.tsx";
import Project from "./Project/Project.tsx";

function App() {
  const projectRef = useRef<HTMLDivElement>(null);

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="App"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        margin: "0 auto",
        overflowX: "hidden",
      }}
    >
      {/* 1. Header에 복잡한 props를 넘기지 않고 깔끔하게 호출합니다. */}
      <Header />

      <div>
        <div id="introduce" style={{ scrollMarginTop: "70px" }}>
          <Hero onMoveToProject={scrollToProject} />
        </div>
        <div id="profile" style={{ scrollMarginTop: "70px" }}>
          <Profile />
        </div>
        <div id="project" ref={projectRef} style={{ scrollMarginTop: "70px" }}>
          <Project />
        </div>
        <div id="gaebap" style={{ scrollMarginTop: "70px" }}>
          <Gaebap />
        </div>
        <div id="gaebap_work" style={{ scrollMarginTop: "70px" }}>
          <Gaebap_work />
        </div>
        <div id="homepage" style={{ scrollMarginTop: "70px" }}>
          <Homepage />
        </div>
        <div id="contact" style={{ scrollMarginTop: "70px" }}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
