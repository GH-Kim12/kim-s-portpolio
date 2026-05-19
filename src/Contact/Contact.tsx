import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { SiGithub } from "react-icons/si";

const ContactSection: React.FC = () => {
  const contactData = [
    { icon: <Phone size={20} />, text: "010-9304-3749" },
    { icon: <Mail size={20} />, text: "naxen5611@naver.com" },
    { icon: <MapPin size={20} />, text: "South Korea" },
    {
      icon: <SiGithub size={20} />,
      text: "GitHub (Main Profile)",
      link: "https://github.com/Kims-club98",
    },
    {
      icon: <SiGithub size={20} />,
      text: "GitHub (Project Repo)",
      link: "https://github.com/GH-Kim12",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#051d3b",
        color: "white",
        padding: "60px 40px",
        fontFamily: "sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "40px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          textAlign: "center", // 중앙 정렬로 시각적 균형 확보
        }}
      >
        Contact Information
      </h2>

      {/* 
        반응형 조치: display: "flex"와 flexWrap: "wrap"을 활용하여 
        공간이 부족한 모바일에서는 자동으로 아래로 떨어지게 설정 
      */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px 40px", // 세로 간격 30px, 가로 간격 40px
          maxWidth: "1200px",
        }}
      >
        {contactData.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "16px",
              // 데스크톱 1414px 및 PDF 출력 시 가로 정렬을 유지하기 위한 최소 너비 설정
              // 모바일에서는 flexWrap에 의해 한 줄에 하나씩 떨어짐
              flex: "1 1 250px",
              maxWidth: "320px",
              justifyContent: "flex-start",
              padding: "10px",
            }}
          >
            <span
              style={{ opacity: 0.8, display: "flex", alignItems: "center" }}
            >
              {item.icon}
            </span>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  textDecoration: "none",
                  wordBreak: "break-all", // 링크가 길어 화면을 벗어나는 것 방지
                }}
              >
                {item.text}
              </a>
            ) : (
              <span style={{ wordBreak: "break-all" }}>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactSection;
