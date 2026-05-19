import "../Components/CSS/variables.css";

const Profile = () => {
  const certificates = [
    {
      date: "2025.01",
      name: "워드프로세서",
      grade: "1급",
      authority: "대한상공회의소",
    },
    {
      date: "2024.12",
      name: "지게차운전기능사",
      grade: "-",
      authority: "한국산업인력공단",
    },
    {
      date: "2023.10",
      name: "K-Tour Idea Challenge",
      grade: "장려상",
      authority: "한국교통대학교",
    },
    { date: "2022.01", name: "2종보통면허", grade: "-", authority: "경찰청" },
    {
      date: "2021.10",
      name: "한국사능력검정시험",
      grade: "1급",
      authority: "국사편찬위원회",
    },
  ];

  return (
    <section className="profile-container">
      {/* 좌측: 이미지 영역 */}
      <div className="profile-image-area">
        <div className="image-frame">
          <img
            src="https://res.cloudinary.com/dacgjblsv/image/upload/v1779091277/my_image_pyclpv.jpg"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>

      {/* 우측: 텍스트 영역 */}
      <div className="profile-text-area">
        <h2 className="about-me-title">About Me</h2>

        <div className="profile-description">
          <p>
            현장에서 목격한 <strong>"비효율의 제거"</strong>를 목표로 하는
            김건형 입니다.
          </p>
          <p style={{ marginTop: "20px" }}>
            KOSMO의{" "}
            <strong>"생성형 AI & 클라우드 서비스 개발 전문가 과정"</strong>을
            이수하였으며, 프로젝트에서 Python의 <strong>Flet</strong>{" "}
            프레임워크로 프론트엔드와 백엔드를 통합 구현하고,{" "}
            <strong>PostgreSQL</strong>과 <strong>SQLAlchemy</strong>를 활용해
            데이터베이스를 구축하였습니다.
          </p>

          <div className="experience-skills-container">
            <div className="experience-section">
              <h3>Experience</h3>
              <ul className="experience-list">
                <li>
                  <strong>KOSMO 교육 연수</strong>
                  <span className="date-text">(2025.10 - 2026.05)</span>
                  <br />- 생성형 AI 및 클라우드(AWS) 기반 풀스택 개발 과정 수료
                </li>
                <li>
                  <strong>㈜재세능원 충주지점 (HR)</strong>
                  <span className="date-text">(2024.03 - 2024.09)</span>
                  <br />- 임직원 개인정보 관리 및 채용/면접 일정 조율
                </li>
                <li>
                  <strong>광명시 지역사회보장협의체 (인턴)</strong>
                  <span className="date-text">(2024.02 - 2024.03)</span>
                  <br />- 회의록 작성 및 성과 관련 자료 조사
                </li>
              </ul>
            </div>

            <div className="skills-section">
              <h3>Skills</h3>
              <ul className="skills-list">
                <li>
                  <strong> Languages:</strong> Python, Javascript, Java,
                  HTML/CSS
                </li>
                <li>
                  <strong> Frameworks:</strong> FastAPI, React, TypeScript,
                  Node.js, Next.js, Flet
                </li>
                <li>
                  <strong> Database:</strong> PostgreSQL, MySQL
                </li>
                <li>
                  <strong> DevOps:</strong> AWS, Vercel 등
                </li>
              </ul>
            </div>
          </div>

          <div className="certifications-section">
            <h3>Certificates</h3>
            <div className="table-responsive">
              <table className="cert-table">
                <thead>
                  <tr>
                    <th>취득일</th>
                    <th>자격증명</th>
                    <th>종목/등급</th>
                    <th>주관부처</th>
                  </tr>
                </thead>
                <tbody>
                  {certificates.map((cert, index) => (
                    <tr key={index}>
                      <td>{cert.date}</td>
                      <td className="text-left font-bold">{cert.name}</td>
                      <td>{cert.grade}</td>
                      <td>{cert.authority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
