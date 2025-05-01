import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#F08080",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#DAA520",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#87CEFA",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#90EE90",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#FFA07A",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#DDA0DD",
  },
];

function App() {
  return (
    <div className="container">
      <Photo />
      <Intro />
      <SkillLists />
    </div>
  );
}

function Photo() {
  const name = "Profile Photo";
  return <img src="/image/female.jpeg" alt={name} />;
}

function Intro() {
  return (
    <div className="intro">
      <h1>KANG CHIAW NA</h1>
      <p>
        A Computer Engineering student at UTeM, Malacca. I love coding so much
        and aim to become a Frontend Developer very soon.
      </p>
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skills-container" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

function SkillLists() {
  return (
    <div className="skills">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
