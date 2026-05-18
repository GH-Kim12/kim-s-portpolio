import "../Components/CSS/variables.css";

const Profile = () => {
  return (
    <section className="profile-container">
      {" "}
      {/* 인라인 스타일 대신 클래스 사용 */}
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
            이수하였으며, 프로젝트에서는 Python의 <strong>Flet</strong>
            라이브러리를 활용해 Frontend와 Backend를 구현하였습니다.
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
        </div>
      </div>
    </section>
  );
};

export default Profile;
