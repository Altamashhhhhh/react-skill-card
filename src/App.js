import "./App.css";
export default function App() {
  return (
    <div className="container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZgjm16GjH4hI8I6e6Kwemum1EfF8Tc-CJw&s"
        alt="Jonas Schmedtmann"
      />
      <Info
        name="Jonas Schmedtmann"
        about="A web developer and instructor who simplifies complex topics. With a background in economics and extensive experience, he creates popular courses on HTML, CSS, JavaScript, Node.js, and React, helping students build modern web applications"
      />
    </div>
  );
}

function Info({ name, about }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{about}</p>
      <div>
        <Skill skills="HTML + CSS" emoji="💪" color="skyblue" />
        <Skill skills="JAVASCRIPT" emoji="💪" color="yellow" />
      </div>
      <div>
        <Skill skills="Web Design" emoji="💪" color="lightgreen" />
        <Skill skills="Git & Github" emoji="💪" color="tomato" />
      </div>
      <div>
        <Skill skills="React" emoji="💪" color="teal" />
        <Skill skills="Redux" emoji="💪" color="red" />
      </div>
    </div>
  );
}

function Skill({ skills, emoji, color }) {
  return (
    <div className="skills" style={{ backgroundColor: color, padding: "2px" }}>
      <span>{skills} </span>
      <span> {emoji}</span>
    </div>
  );
}
