import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function Skills(props) {
  return (
    <div
      className="skills-container"
      style={{ backgroundColor: props.bgColor }}
    >
      <h3>{props.name}</h3>
    </div>
  );
}

function SkillLists() {
  return (
    <main className="skills">
      <Skills name="HTML-CSS 💪" bgColor="#F08080" />
      <Skills name="JavaScript 💪" bgColor="#DAA520" />
      <Skills name="React 💪" bgColor="#87CEFA" />
      <Skills name="Python 💪" bgColor="#90EE90" />
      <Skills name="Web Design 💪" bgColor="#FFA07A" />
      <Skills name="Git and Github 💪" bgColor="#DDA0DD" />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
