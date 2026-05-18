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
  return (
    // 전체 화면을 100vh(화면 높이 전체)로 잡고 가로로 배치(flex)
    <section
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 좌측: 멘트 영역 (50%) */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 10%",
          backgroundColor: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            margin: "0",
            lineHeight: "1.2",
          }}
        >
          {myHero.title}
        </h1>
        <p style={{ fontSize: "1.5rem", color: "#666", marginTop: "20px" }}>
          {myHero.subTitle}
        </p>
        <button
          onClick={onMoveToProject}
          style={{
            marginTop: "20px",
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

      {/* 우측: 이미지 영역 (50%) */}
      <div style={{ flex: 1, height: "100%" }}>
        <img
          src={myHero.imageurl}
          alt="Hero"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Hero;
