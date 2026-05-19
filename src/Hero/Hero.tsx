import { useEffect, useState } from "react";

interface HeroProps {
  onMoveToProject: () => void;
}

interface HeroData {
  title: string;
  subTitle: string;
  imageurl: string;
}

const myHero: HeroData = {
  title: "비효율을 효율로 바꾸고자 하는 개발자",
  subTitle: "김건형 입니다",
  imageurl:
    "https://res.cloudinary.com/dacgjblsv/image/upload/v1779091277/hero_image_ubwqbj.jpg",
};

const Hero = ({ onMoveToProject }: HeroProps) => {
  // 너비 감지 useState
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        display: "flex",
        // 모바일에서는 위아래(column), 데스크톱/PDF는 좌우(row) 배치
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
        // 모바일에서는 콘텐츠가 다 보일 수 있도록 최소 높이 지정, 데스크톱은 100vh 고정
        height: isMobile ? "auto" : "100vh",
        minHeight: isMobile ? "calc(100vh - 70px)" : "auto",
        overflow: "hidden",
        backgroundColor: "#fff",
        paddingTop: isMobile ? "70px" : "0", // 모바일 고정 헤더 영역 확보
      }}
    >
      {/* 좌측/상단: 멘트 영역 */}
      <div
        style={{
          flex: isMobile ? "none" : 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: isMobile ? "center" : "flex-start", // 모바일에서는 중앙 정렬로 가독성 확보
          padding: isMobile ? "60px 20px" : "0 10%",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "1.6rem" : "2rem", // 모바일 폰트 크기 최적화
            fontWeight: "bold",
            margin: "0",
            lineHeight: "1.3",
            textAlign: isMobile ? "center" : "left",
            wordBreak: "keep-all", // 조사 단위 자동 줄바꿈으로 깔끔하게 노출
          }}
        >
          {myHero.title}
        </h1>
        <p
          style={{
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            color: "#666",
            marginTop: "15px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {myHero.subTitle}
        </p>
        <button
          onClick={onMoveToProject}
          style={{
            marginTop: "25px",
            padding: "12px 30px",
            width: "fit-content",
            border: "2px solid #000",
            background: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          View Projects
        </button>
      </div>

      {/* 우측/하단: 이미지 영역 */}
      <div
        style={{
          flex: isMobile ? "none" : 1,
          width: "100%",
          height: isMobile ? "300px" : "100%", // 모바일에서는 하단에 300px 높이로 배치
        }}
      >
        <img
          src={myHero.imageurl}
          alt="Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center", // 이미지가 언제나 정중앙을 기준으로 크롭됨
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
