// 1. 데이터 타입 정의
interface Feature {
  id: number;
  name: string;
  description: string;
  media?: string;
}

interface ProjectData {
  title: string;
  techStack: string[];
  features: Feature[];
}

// 2. 프로젝트 데이터 (기술 스택 및 핵심 기능)
const projects: ProjectData[] = [
  {
    title: "똑똑 APP",
    techStack: ["Python", "Flet", "PostgreSQL", "SQLAlchemy", "XGBoost"],
    features: [
      {
        id: 1,
        name: "자동 급여량 추천",
        description:
          "반려견에 대한 정보를 바탕으로 가장 적합한 사료의 급여량을 추천하는 기능 개발",
        media:
          "https://res.cloudinary.com/dacgjblsv/image/upload/v1779091275/app_home_zhemwg.png",
      },
      {
        id: 2,
        name: "원터치 급여 로깅 & 실시간 사료 잔량확임 및 사료 소진일 알림",
        description:
          "권장 급여량을 바탕으로 사료 소진일에 대하여 계산하며, 이에 대하여 3일, 7일 전 알림을 제공하는 기능 개발",
        media:
          "https://res.cloudinary.com/dacgjblsv/image/upload/v1779091276/app_feedlog_axctot.png",
      },
    ],
  },
  {
    title: "개밥개밥 ERP",
    techStack: ["Python", "Flet", "PostgreSQL", "SQLAlchemy"],
    features: [
      {
        id: 1,
        name: "전체적인 매출/재고 현황 파악 가능",
        description:
          "Flet 기반으로 현 날짜 기준 매출, 판매량, 달성률 등을 직관적으로 파악 가능",
        media:
          "https://res.cloudinary.com/dacgjblsv/image/upload/v1779091277/Intro_ERP_ajzz0i.png",
      },
      {
        id: 2,
        name: "실시간 재고, 고객관리(CRUD)",
        description:
          "PostgreSQL 연동 및 트랜잭션 관리를 통해 재고 변동 시 데이터 무결성 보장",
        media:
          "https://res.cloudinary.com/dacgjblsv/video/upload/v1779091294/ERP_crud_dpzhpo.mp4",
      },
    ],
  },
];

// 3. 메인 컴포넌트
const Gaebap = () => {
  return (
    <div style={{ padding: "60px 0", backgroundColor: "#f9f9fb" }}>
      <div style={{ width: "85%", margin: "0 auto" }}>
        {projects.map((project, idx) => (
          <div key={idx} style={{ marginBottom: "80px" }}>
            {/* 프로젝트 제목 */}
            <h2
              style={{
                fontSize: "2.4rem",
                color: "#6A5ACD",
                marginBottom: "15px",
              }}
            >
              {project.title}
            </h2>

            {/* 기술 스택 섹션 */}
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
              {project.techStack.map((tech, i) => (
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

            {/* 핵심 기능 카드 그리드 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
                gap: "30px",
              }}
            >
              {project.features.map((feature) => (
                <div
                  key={feature.id}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    padding: "25px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        color: "#222",
                        marginBottom: "10px",
                        borderLeft: "4px solid #6A5ACD",
                        paddingLeft: "10px",
                      }}
                    >
                      {feature.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#555",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* 미디어 영역 (이미지/비디오 공통 처리) */}
                  {feature.media && (
                    <div
                      style={{
                        borderRadius: "10px",
                        overflow: "hidden",
                        border: "1px solid #eee",
                        backgroundColor: "#000",
                      }}
                    >
                      {feature.media.endsWith(".mp4") ? (
                        <video
                          src={feature.media}
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{ width: "100%", display: "block" }}
                        />
                      ) : (
                        <img
                          src={feature.media}
                          alt={feature.name}
                          style={{ width: "100%", display: "block" }}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 프로젝트 간 구분선 */}
            {idx < projects.length - 1 && (
              <hr
                style={{
                  border: "0",
                  height: "1px",
                  backgroundColor: "#ddd",
                  margin: "60px 0",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gaebap;
