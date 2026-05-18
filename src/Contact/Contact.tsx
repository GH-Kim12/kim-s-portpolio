import { Mail, MapPin, Phone } from "lucide-react"; // 아이콘 라이브러리 사용 가정
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
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "30px",
          textTransform: "uppercase",
        }}
      >
        Contact Information
      </h2>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {contactData.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "20px",
              fontSize: "18px",
            }}
          >
            <span style={{ opacity: 0.8 }}>{item.icon}</span>
            {/* 링크가 있는 경우와 없는 경우를 구분하여 출력합니다. */}
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactSection;
