// 1. 오타 수정 및 App.tsx와 props 명칭 일치화
interface HeaderProps {
  onDownload: () => void;
}

// 2. Props를 구조 분해 할당으로 받아옴
const Header = ({ onDownload }: HeaderProps) => {
  // 특정 id를 가진 HTML 요소로 부드럽게 스크롤하는 함수
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navStyle = {
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1.1rem",
    border: "none",
    background: "transparent",
  };

  return (
    <header
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
      <div style={{ fontSize: "1.5rem", fontWeight: "900" }}>
        포트폴리오-김건형
      </div>

      <nav style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <button style={navStyle} onClick={() => scrollToSection("introduce")}>
          Introduce
        </button>
        <button style={navStyle} onClick={() => scrollToSection("profile")}>
          Profile
        </button>
        <button style={navStyle} onClick={() => scrollToSection("project")}>
          Project
        </button>
        <button style={navStyle} onClick={() => scrollToSection("contact")}>
          Contact
        </button>

        {/* 3. PDF 다운로드 버튼 추가 및 이벤트 연결 */}
        <button
          style={{
            ...navStyle,
            backgroundColor: "#6A5ACD",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "5px",
            fontSize: "0.95rem",
          }}
          onClick={onDownload}
        >
          PDF 다운로드 📥
        </button>
      </nav>
    </header>
  );
};

export default Header;
