import { useEffect, useState } from "react";
// 💡 철자 일관성을 위해 변수명을 portfolioPDF로 관리하는 것을 추천합니다.
import portpolioPDF from "../assets/kim_portpolio.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
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
      <style>{`
        .nav-menu {
          display: flex;
          gap: 15px;
          align-items: center;
          transition: transform 0.3s ease-in-out;
        }

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
            padding: 15px 0 !important;
            width: 100% !important;
            text-align: center !important;
            color: #000 !important;
          }
          .download-link {
            width: 80% !important;
            margin-top: 20px !important;
          }
          .download-button {
            width: 100% !important;
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

          {/* ★ 수정: 쉼표 오타를 제거하고 변수를 href에 바인딩 */}
          <a
            href={portpolioPDF}
            download="포트폴리오_김건형.pdf"
            className="download-link"
            style={{ textDecoration: "none" }}
            onClick={() => setIsMenuOpen(false)}
          >
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
                width: "auto",
              }}
            >
              PDF 다운로드 📥
            </button>
          </a>
        </nav>

        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            fontSize: "1.6rem",
            cursor: "pointer",
            padding: "0px",
            width: "30px",
            height: "30px",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1001,
          }}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </header>
    </>
  );
};

export default Header;
