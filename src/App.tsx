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
        const pdfWidth = 297;
        const pageHeight = 210;

        const sections = Array.from(element.children) as HTMLDivElement[];

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];

          const canvas = await html2canvas(section, {
            scale: 2,
            useCORS: true,
            ignoreElements: (el) => el.tagName === "VIDEO",
            logging: false,
            windowWidth: 1414,
            onclone: (clonedDocument) => {
              const clonedElement = clonedDocument.getElementById(section.id);
              if (clonedElement) {
                clonedElement.style.width = "1414px";
                clonedElement.style.minWidth = "1414px";
              }
            },
          });

          const imgData = canvas.toDataURL("image/jpeg", 0.9);
          const imgProps = pdf.getImageProperties(imgData);
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

          if (i > 0) {
            pdf.addPage();
          }

          // [핵심 해결 로직]
          // 내용이 A4 한 장 높이(210)를 살짝 초과할 경우 (약 1.3배 이하),
          // 두 장으로 무식하게 자르지 않고 한 장에 쏙 들어가게 전체 비율을 축소합니다.
          if (pdfHeight > pageHeight && pdfHeight < pageHeight * 1.3) {
            const scaleRatio = pageHeight / pdfHeight;
            const renderWidth = pdfWidth * scaleRatio;
            const xOffset = (pdfWidth - renderWidth) / 2; // 비율 축소 후 가로 중앙 정렬

            pdf.addImage(imgData, "JPEG", xOffset, 0, renderWidth, pageHeight);
          }
          // Project나 Gaebap처럼 길이가 매우 긴 섹션은 어쩔 수 없이 기존처럼 여러 장으로 잘라서 출력합니다.
          else {
            let heightLeft = pdfHeight;
            let position = 0;

            pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
            heightLeft -= pageHeight;

            while (heightLeft > 0) {
              position = heightLeft - pdfHeight;
              pdf.addPage();
              pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
              heightLeft -= pageHeight;
            }
          }
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
    <div
      className="App"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        margin: "0 auto" /* 모바일 대화면 등에서 언제나 중앙 정렬 보장 */,
        overflowX:
          "hidden" /* 가로 스크롤바가 생겨서 우측으로 튕기는 현상 원천 차단 */,
      }}
    >
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
