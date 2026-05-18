// 1. 사용할 이미지들을 모두 import 합니다.

const Projects = () => {
  // 각 데이터 입력
  const projectData = [
    {
      id: 1,
      title: "똑똑 App 및 개밥개밥 ERP",
      subtitle: "사료 제조 및 재고 관리 시스템",
      description:
        "현장의 비효율을 제거하기 위해 기획된 ERP 솔루션입니다. Python Flet을 활용해 크로스 플랫폼 환경을 구축하고, 재고 데이터의 시각화와 실시간 관리에 집중했습니다.",
      tech: ["Python", "Flet", "PostgreSQL", "Cloud Deployment"],
      color: "#e8f4ff",
      category: "App | ERP Solution",
      img: "https://res.cloudinary.com/dacgjblsv/image/upload/v1779091286/project_gaebapgaebap_tihujn.png", // 문자열 "Gaebap"이 아닌 import한 변수명을 직접 넣습니다.
    },
    {
      id: 2,
      title: "가수 프로필 홈페이지",
      subtitle: "아티스트 브랜딩 및 포트폴리오 사이트",
      description:
        "TypeScript와 React를 사용하여 개발된 고성능 아티스트 페이지입니다. 안정적인 타입 시스템을 바탕으로 세련된 UI/UX와 부드러운 애니메이션을 구현했습니다.",
      tech: ["TypeScript", "React", "Styled-components", "Responsive Design"],
      color: "#fff0f0",
      category: "Web Application",
      img: "https://res.cloudinary.com/dacgjblsv/image/upload/v1779091285/Homepage_rza7qf.png", // import한 변수명
    },
  ];
  // 실제 출력
  return (
    <section
      style={{
        width: "100%", //너비
        minHeight: "100vh", // 최소 높이
        padding: "100px 5%", // 내부 간격
        backgroundColor: "#f9f9f9", // 배경 색깔
        display: "flex", // 화면 상태
        flexDirection: "column",
        alignItems: "center", // 정렬
      }}
    >
      <div style={{ width: "100%", maxWidth: "1200px", marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            borderBottom: "2px solid #000",
            display: "inline-block",
          }}
        >
          Selected Projects
        </h2>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
        }}
      >
        {projectData.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* 이미지 영역 수정: <img> 태그 사용 */}
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: project.color,
                overflow: "hidden",
              }}
            >
              {project.img ? (
                <img
                  src={project.img}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#666",
                  }}
                >
                  Image Not Found
                </div>
              )}
            </div>

            <div style={{ padding: "30px" }}>
              <span
                style={{
                  fontSize: "0.9rem",
                  color: "#007bff",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {project.category}
              </span>
              <h3 style={{ fontSize: "1.8rem", margin: "10px 0" }}>
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#555",
                  marginBottom: "20px",
                  lineHeight: "1.6",
                }}
              >
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "5px 12px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "15px",
                      fontSize: "0.85rem",
                      color: "#333",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
