import { useEffect, useState } from "react";

interface HeaderProps {
  onDownload: () => void;
}

const Header = ({ onDownload }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* html2canvas(PDF 출력)와 일반 브라우저 환경을 동시에 대응하기 위한 반응형 스타일 시트 주입.
        인라인 스타일의 한계를 CSS 클래스로 보완합니다.
      */}
      <style>{`
        .nav-menu {
          display: flex;
          gap: 15px;
          align-items: center;
          transition: transform 0.3s ease-in-out;
        }

        /* 일반 모바일 브라우저 환경에서의 메뉴 스타일 */
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            height: calc(100vh - 70px);
            background-color: rgba(255, 255, 255, 0.98);
            flex-direction: column;
            padding-top: 40px;
            gap: 10px;
            transform: ${isMenuOpen ? "translateX(0)" : "translateX(100%)"};
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          }
          .nav-button {
            font-size: 1.2rem !important;
            padding: !important 15px 0;
            width: 100% !important;
            text-align: center !important;
            color: #000 !important;
          }
          .download-button {
            width: 80% !important;
            margin-top: 20px !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
          .header-title {
            font-size: 1.2rem !important;
          }
          .header-container {
            padding: 0 20px !important;
          }
        }
      `}</style>

      <header
        className="header-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "70px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 50px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <div
          className="header-title"
          style={{ fontSize: "1.5rem", fontWeight: "900" }}
        >
          포트폴리오-김건형
        </div>

        {/* 미디어 쿼리 클래스(.nav-menu) 제어로 웹 화면과 PDF 가상 돔 화면을 모두 수용 */}
        <nav className="nav-menu">
          <button
            className="nav-button"
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1.1rem",
              border: "none",
              background: "transparent",
              color: "#333",
            }}
            onClick={() => scrollToSection("introduce")}
          >
            Introduce
          </button>
          <button
            className="nav-button"
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1.1rem",
              border: "none",
              background: "transparent",
              color: "#333",
            }}
            onClick={() => scrollToSection("profile")}
          >
            Profile
          </button>
          <button
            className="nav-button"
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1.1rem",
              border: "none",
              background: "transparent",
              color: "#333",
            }}
            onClick={() => scrollToSection("project")}
          >
            Project
          </button>
          <button
            className="nav-button"
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1.1rem",
              border: "none",
              background: "transparent",
              color: "#333",
            }}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>

          <button
            className="nav-button download-button"
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              border: "none",
              backgroundColor: "#6A5ACD",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "5px",
              fontSize: "0.95rem",
            }}
            onClick={() => {
              onDownload();
              setIsMenuOpen(false);
            }}
          >
            PDF 다운로드 📥
          </button>
        </nav>

        {/* 모바일 토글 햄버거 버튼 */}
        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: "none", // 데스크톱 및 PDF 렌더링 시에는 원천 배제
            background: "transparent",
            border: "none",
            fontSize: "1.6rem",
            cursor: "pointer",
            padding: "0px",
            width: "30px",
            height: "30px",
            alignItems: "center",
            justifyContent: "center",
            zIndex:1001,
          }}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </header>
    </>
  );
};

export default Header;
