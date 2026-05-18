import "../Components/CSS/variables.css";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  period: string;
  details: string;
  images: string[]; // 여러 장의 스크린샷
  link1: string;
  link2: string;
  tech: string[];
}

const projects: ProjectItem[] = [
  {
    id: "homepage",
    title: "아티스트 홈페이지제작",
    description:
      "의뢰를 받아 아티스트 홈페이지를 작성하였으며, Vercel를 이용해 배포 또한 진행하였음.(개인 프로젝트)",
    period: "2026.03 - 2026.04 (약 4주)",
    details:
      "사용자의 질문에 AI가 최적화된 답변을 제공합니다. 비동기 처리를 통해 응답 대기 시간을 최적화하고 직관적인 인터페이스를 구현했습니다.",
    images: [
      "https://res.cloudinary.com/dacgjblsv/image/upload/v1779091285/Homepage_rza7qf.png",
      "https://res.cloudinary.com/dacgjblsv/video/upload/v1779091279/Homepage_song_gamx1e.mp4",
      "https://res.cloudinary.com/dacgjblsv/video/upload/v1779091285/Homepage_scroll_mappwe.mp4",
    ],
    link1:
      "https://dante-musicprofile-nppvoh4v7-geonhyeong-kims-projects-91135b36.vercel.app/",
    link2: "https://github.com/GH-Kim12/dante-musicprofile",
    tech: ["TypeScript", "React", "Styled-components", "Responsive Design"],
  },
];

const Project = () => {
  return (
    <section
      className="project-section"
      style={{ padding: "100px 10%", backgroundColor: "#fff" }}
    >
      <div className="section-header" style={{ marginBottom: "80px" }}>
        <h2
          style={{
            fontSize: "5rem",
            color: "#6A5ACD",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          개요
        </h2>
      </div>

      {projects.map((project) => (
        <div
          key={project.id}
          className="project-item"
          style={{ marginBottom: "120px" }}
        >
          <div className="project-info" style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#666",
                marginBottom: "15px",
                fontWeight: "500",
              }}
            >
              📅 제작 기간: {project.period}
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              {project.description}
            </p>
            {/* 버튼 그룹화를 위한 부모 div 추가 */}
            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
              {project.link1 && (
                <a
                  href={project.link1}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#000",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#6A5ACD")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#000")
                    }
                  >
                    Visit Website ↗
                  </button>
                </a>
              )}

              {project.link2 && (
                <a
                  href={project.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#000",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#6A5ACD")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#000")
                    }
                  >
                    Visit github ↗
                  </button>
                </a>
              )}
            </div>
          </div>

          <div
            style={{
              marginBottom: "30px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: "#333",
                marginRight: "10px",
              }}
            >
              사용 기술 스택:
            </span>
            {project.tech.map((tech, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: "#E6E6FA",
                  color: "#6A5ACD",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            className="project-gallery"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            {project.images.map((src, index) => (
              <div
                key={index}
                className="img-card"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #eee",
                  backgroundColor: "#f9f9f9",
                  aspectRatio: "4 / 3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* 확장자가 .mp4인 경우 video 태그 사용 */}
                {src.endsWith(".mp4") ? (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <img
                    src={src}
                    alt={`${project.title} screen ${index}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;
