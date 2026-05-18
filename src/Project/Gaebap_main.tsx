import "../Components/CSS/variables.css";

interface ProjectItem {
  id: string;
  title: string;
  period: string; // 제작 기간 타입 추가
  description: string;
  details: string;
  images: string[];
  link: string;
}

const projects: ProjectItem[] = [
  {
    id: "ttokttok",
    title: "똑똑 APP",
    period: "2026.03 - 2026.05 (약 8주)", // 기간 데이터 추가 (수정 가능)
    description:
      "단 한 번의 등록으로 최적의 사료 급여량 추천, 소진 알림, 자동 주문을 통합 제공하는 스마트 반려견 케어 APP",
    details:
      "사용자의 질문에 AI가 최적화된 답변을 제공합니다. 비동기 처리를 통해 응답 대기 시간을 최적화하고 직관적인 인터페이스를 구현했습니다.",
    images: [
      "https://res.cloudinary.com/dacgjblsv/image/upload/v1779091276/app_login_p0kdzx.png",
      "https://res.cloudinary.com/dacgjblsv/image/upload/v1779091276/app_home_view_idmgvo.png",
      "https://res.cloudinary.com/dacgjblsv/image/upload/v1779091276/app_log_uqozxv.png",
      "https://res.cloudinary.com/dacgjblsv/image/upload/v1779091276/app_shop_ubahl7.png",
    ],
    link: "https://github.com/GBGB-PROJECT/DOGDOG/tree/main/dogdog_app_api_py",
  },
  {
    id: "gaebob",
    title: "개밥개밥 ERP",
    period: "2026.03 - 2026.05 (약 8주)", // 기간 데이터 추가 (수정 가능)
    description: "반려동물 사료 관리의 비효율을 제거하는 통합 ERP 시스템",
    details:
      "사료 재고 관리, 자동 급여 스케줄링 및 주문 이력을 관리합니다. PostgreSQL을 활용해 데이터 무결성을 확보하였으며, Flet을 통해 UI/UX를 구축했습니다.",
    images: [
      "https://res.cloudinary.com/dacgjblsv/video/upload/v1779091278/ERP_login_vwkpw7.mp4",
      "https://res.cloudinary.com/dacgjblsv/video/upload/v1779091294/ERP_crud_dpzhpo.mp4",
      "https://res.cloudinary.com/dacgjblsv/video/upload/v1779091292/ERP_stock_z9huut.mp4",
      "https://res.cloudinary.com/dacgjblsv/video/upload/v1779091292/ERP_customer_fhg0ex.mp4",
    ],
    link: "https://github.com/GBGB-PROJECT/DOGDOG/tree/main/dogdog_erp_api_py",
  },
];

const Project = () => {
  return (
    <section
      className="project-section"
      style={{ padding: "100px 10%", backgroundColor: "#fff" }}
    >
      <div className="section-header" style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "5rem", color: "#6A5ACD", fontWeight: "bold" }}>
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
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              {project.title}
            </h3>

            {/* 제작 기간 렌더링 영역 추가 */}
            <p
              style={{
                fontSize: "1rem",
                color: "#555",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>🗓️</span> <strong>제작 기간:</strong> {project.period}
            </p>

            <p style={{ fontSize: "1.2rem", color: "#333" }}>
              {project.description}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            {project.link && (
              <a
                href={project.link}
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
                  Visit Github ↗
                </button>
              </a>
            )}
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
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #eee",
                }}
              >
                {src.endsWith(".mp4") ? (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
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
                      objectFit: "cover",
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
