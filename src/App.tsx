import { useRef, useState } from "react";
import Header from "./Components/common/header.tsx";
import Contact from "./Contact/Contact.tsx";
import Hero from "./Hero/Hero.tsx";
import Profile from "./Profile/Profile.tsx";
import Gaebap from "./Project/Gaebap_main.tsx";
import Gaebap_work from "./Project/Gaebap_work.tsx";
import Homepage from "./Project/Homepage_main.tsx";
import Project from "./Project/Project.tsx";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const projectRef = useRef<HTMLDivElement>(null);
  const printRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    const element = printRef.current;
    if (!element) return;

    setIsDownloading(true);

    setTimeout(async () => {
      try {
        const pdf = new jsPDF("l", "mm", "a4");
        const imgWidth = 297;
        const pageHeight = 210;

        const sections = Array.from(element.children) as HTMLDivElement[];

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];

          // 고정된 가로폭(A4 가로 비율에 맞춘 1414px)을 시뮬레이션하여 캡처
          const canvas = await html2canvas(section, {
            scale: 2,
            useCORS: true,
            ignoreElements: (el) => el.tagName === "VIDEO",
            logging: false,
            windowWidth: 1414,
          });

          const imgData = canvas.toDataURL("image/jpeg", 0.9);

          if (i > 0) {
            pdf.addPage();
          }

          pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, pageHeight);
        }

        pdf.save("portfolio_김건형.pdf");
      } catch (error) {
        console.error("PDF 생성 실패:", error);
        alert("PDF 다운로드 중 오류가 발생했습니다.");
      } finally {
        setIsDownloading(false);
      }
    }, 100);
  };

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header onDownload={handleDownloadPDF} />

      {isDownloading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          <div
            className="spinner"
            style={{
              border: "4px solid rgba(255,255,255,0.3)",
              borderTop: "4px solid #6A5ACD",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              animation: "spin 1s linear infinite",
              marginBottom: "20px",
            }}
          />
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          PDF 문서를 생성하고 있습니다. 잠시만 기다려주세요...
        </div>
      )}

      {/* paddingTop 제거 후 scrollMarginTop 적용 */}
      <div ref={printRef}>
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
