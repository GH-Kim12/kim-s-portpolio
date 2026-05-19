import "../Components/CSS/variables.css";

interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  details: string;
  images: string[];
  link: string;
}

const projects: ProjectItem[] = [
  {
    id: "ttokttok",
    title: "똑똑 APP",
    period: "2026.03 - 2026.05 (약 8주)",
    description:
      "단 한 번의 등록으로 최적의 사료 급여량 추천, 소진 알림, 자동 주문을 통합 제공하는 스마트 반려견 케어 APP",
    details:
      "사용자의 질문에 AI가 최적화된 답변을 제공합니다. 비동기 처리를 통해 응답 대기 시간을 최적화하고 직관적인 인터페이스를 구현했습니다.",
    images: [
      "https://res.cloudinary.com/dacgjblsv/image/upload/v1779167483/dogdog_intro1_dgwtqy.png",
      "https://res.cloudinary.com/dacgjblsv/image/upload/v1779167484/dogdog_intro2_dus74o.png",
      "https://res.cloudinary.com/dacgjblsv/image/upload/v1779167486/dogdog_intro3_at5kvn.png",
      "https://res.cloudinary.com/dacgjblsv/image/upload/v1779167483/dogdog_intro4_rux2wb.png",
    ],
    link: "https://github.com/GBGB-PROJECT/DOGDOG/tree/main/dogdog_app_api_py",
  },
  {
    id: "gaebob",
    title: "개밥개밥 ERP",
    period: "2026.03 - 2026.05 (약 8주)",
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
  // 💡 isMobile 상태와 useEffect 완전 제거

  return (
    <section className="project-section">
      <div className="section-header">
        <h2 className="project-header-title">개요</h2>
      </div>

      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <div className="project-info">
            <h3 className="project-info-title">{project.title}</h3>

            <p className="project-period">
              <span>🗓️</span> <strong>제작 기간:</strong> {project.period}
            </p>

            <p className="project-desc">{project.description}</p>
          </div>

          <div className="project-link-container">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button className="btn-github">Visit Github ↗</button>
              </a>
            )}
          </div>

          <div className="project-gallery">
            {project.images.map((src, index) => (
              <div key={index} className="img-card">
                {src.endsWith(".mp4") ? (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="media-content"
                  />
                ) : (
                  <img
                    src={src}
                    alt={`${project.title} screen ${index}`}
                    className="media-content"
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
