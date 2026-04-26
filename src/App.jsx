import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImg from "./assets/profile.jpg";

// Project images
import oceanImg from "./assets/projects/ocean.jpg";
import todoImg from "./assets/projects/todo.jpg";
import qrImg from "./assets/projects/qr.jpg";
import recImg from "./assets/projects/recommendation.jpg";
import amazonImg from "./assets/projects/amazon.jpg";
import isroCert from "./assets/certificates/isro.pdf";
import codtechCert from "./assets/certificates/codtech.pdf";
import pythonCert from "./assets/certificates/python.pdf";
import woscCert from "./assets/certificates/wosc.pdf";
import woscImg from "./assets/wosc.jpg";
export default function App() {

  const portfolioData = {
    name: "Chaitanya Namdeo",
    title: "Aspiring Software Engineer | Full Stack Developer",
    bio: "Motivated Computer Engineering graduate with strong fundamentals in software development and problem-solving.",

    skills: {
  languages: ["C", "C++", "Python", "Java", "JavaScript"],

  frontend: ["HTML", "CSS", "React"],

  backend: ["Node.js", "Express.js", "PHP"],

  databases: ["MySQL", "MongoDB"],

  core: ["Data Structures & Algorithms", "OOP", "DBMS"],

  ai_ml: ["Machine Learning", "LLM", "NLP", "Agentic AI"],

  tools: ["Git", "GitHub"]
},

   projects: [
  {
    title: "Intelligent Cross-Domain Recommendation System",
    description: "Built a recommendation system using Machine Learning and LLM techniques to suggest movies and books based on user preferences across domains.",
    tech: ["Python", "Machine Learning", "LLM", "NLP"],
    image: recImg
  },
  {
    title: "Ocean Current Estimation",
    description: "Used Python and satellite data for ocean surface current analysis and Ekman depth modeling.",
    tech: ["Python", "Data Analysis", "Satellite Data"],
    image: oceanImg
  },
  {
    title: "To-Do List Application",
    description: "Developed a GUI-based task manager using Python Tkinter with CRUD operations.",
    tech: ["Python", "Tkinter"],
    image: todoImg
  },
  {
    title: "QR Code Generator",
    description: "Created a Python application for generating QR codes dynamically with GUI support.",
    tech: ["Python", "Tkinter"],
    image: qrImg
  },
  {
    title: "Amazon Fresh Clone",
    description: "Designed a responsive e-commerce UI using HTML and CSS with structured layout and navigation.",
    tech: ["HTML", "CSS", "Responsive Design"],
    image: amazonImg
  }
],

   experience: [
  {
    title: "Research Intern – SAC, ISRO",
    desc: "Worked on satellite data processing using Python (NumPy, Pandas)",
    file: "/src/assets/certificates/isro.pdf"
  },
  {
    title: "Data Analytics Intern – CODTECH",
    desc: "Worked on data analysis and gained practical dataset handling experience",
    file: "/src/assets/certificates/codtech.pdf"
  },
  {
    title: "Python Trainee – IANT Institute",
    desc: "Built multiple Python programs and improved problem-solving skills",
    file: "/src/assets/certificates/python.pdf"
  }
],

    education: [
      "B.Tech in Computer Science – G H Raisoni College (CGPA: 8.64)",
      "Diploma in Computer Science – 81.88%"
    ],

    contact: {
      email: "chaitanyanamdeo7@gmail.com",
      phone: "9175952527",
      github: "github.com/Chaitanya110704",
      linkedin: "linkedin.com/in/chaitanya-52b554267"
    }
  };

  // ===== AI STATE =====
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  // ===== AI LOGIC =====
  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.toLowerCase();
    let reply = "I can help you with information about Chaitanya.";

    if (userMsg.includes("skills")) {
      reply = "Skills: " + portfolioData.skills.join(", ");
    } 
    else if (userMsg.includes("projects")) {
      reply = "Projects: " + portfolioData.projects.map(p => p.title).join(", ");
    } 
    else if (userMsg.includes("experience")) {
      reply = "Experience: " + portfolioData.experience.join(", ");
    } 
    else if (userMsg.includes("education")) {
      reply = "Education: " + portfolioData.education.join(" | ");
    } 
    else if (userMsg.includes("contact") || userMsg.includes("email") || userMsg.includes("phone")) {
      reply = `
📧 Email: ${portfolioData.contact.email}
📱 Phone: ${portfolioData.contact.phone}
💻 GitHub: <a href="https://${portfolioData.contact.github}" target="_blank" style="color:#60a5fa; text-decoration:underline;">${portfolioData.contact.github}</a>
🔗 LinkedIn: <a href="https://${portfolioData.contact.linkedin}" target="_blank" style="color:#60a5fa; text-decoration:underline;">${portfolioData.contact.linkedin}</a>
`;
    } 
    else if (userMsg.includes("who")) {
      reply = portfolioData.bio;
    }

    setMessages(prev => [
      ...prev,
      { role: "user", text: input },
      { role: "ai", text: reply }
    ]);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

      {/* HERO */}
      <section className="text-center py-20">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-32 h-32 mx-auto mb-6 relative"
        >
          <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-30 rounded-full"></div>
          <img
            src={profileImg}
            alt="profile"
            className="relative w-full h-full rounded-full border-4 border-blue-500 object-cover"
          />
        </motion.div>

        <h1 className="text-5xl font-bold mb-4">{portfolioData.name}</h1>
        <p className="text-xl text-blue-400 mb-4">{portfolioData.title}</p>
        <p className="max-w-xl mx-auto text-gray-400">{portfolioData.bio}</p>

        {/* BUTTONS */}
        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setChatOpen(true)}
            className="bg-blue-500 px-6 py-3 rounded-full mr-3"
          >
            Ask AI
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
            className="bg-purple-500 px-6 py-3 rounded-full"
          >
            Contact Me
          </motion.button>
        </div>
      </section>

      <section className="py-16 px-6">
  <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    Skills
  </h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

    {Object.entries(portfolioData.skills).map(([category, items], i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        whileHover={{ scale: 1.03 }}
        className="bg-gray-800/80 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition shadow-lg hover:shadow-blue-500/20"
      >
        {/* Category Title */}
        <h3 className="text-lg font-semibold mb-4 capitalize text-blue-400">
          {category.replace("_", " & ")}
        </h3>

        {/* Skills */}
        <div className="flex flex-wrap gap-3">
          {items.map((skill, j) => (
            <motion.span
              key={j}
              whileHover={{ scale: 1.15 }}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    ))}

  </div>
</section>

      <section className="py-16 px-6 bg-gray-900/50">
  <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

  <div className="max-w-3xl mx-auto space-y-6">
    {portfolioData.experience.map((exp, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.03 }}
        onClick={() => window.open(exp.file, "_blank")}
        className="bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500 cursor-pointer hover:bg-gray-700 transition"
      >
        <h3 className="text-lg font-semibold">{exp.title}</h3>
        <p className="text-gray-400 text-sm">{exp.desc}</p>

        <p className="text-blue-400 text-xs mt-2 underline">
          Click to view certificate →
        </p>
      </motion.div>
    ))}
  </div>
</section>

      {/* PROJECTS */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {portfolioData.projects.map((project, i) => (
            <div key={i} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img src={project.image} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-2">
  {project.description}
</p>

<div className="flex flex-wrap gap-2 mt-2">
  {project.tech.map((t, i) => (
    <span
      key={i}
      className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
    >
      {t}
    </span>
  ))}
</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI CHAT */}
      {chatOpen && (
        <div className="fixed bottom-5 right-5 w-80 h-[400px] bg-gray-900 rounded-xl shadow-lg flex flex-col">

          <div className="p-3 bg-blue-600 flex justify-between">
            <span>AI Assistant</span>
            <button onClick={() => setChatOpen(false)}>X</button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
                <p
                  className="text-sm whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                ></p>
              </div>
            ))}
          </div>

          <div className="p-2 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 bg-gray-800 text-white rounded-l"
              placeholder="Ask about skills, projects..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="bg-blue-500 px-3 rounded-r">
              Send
            </button>
          </div>
        </div>
      )}
      <section className="py-16 px-6 bg-gray-900/50">
  <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    Conferences & Certifications
  </h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">

    {/* LEFT → IMAGE */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-xl overflow-hidden shadow-lg"
    >
      <img
        src={woscImg}
        alt="WOSC Conference"
        className="w-full h-full object-cover rounded-xl"
      />
    </motion.div>

    {/* RIGHT → DETAILS */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/80 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-3">
        🌊 World Ocean Science Congress (WOSC) 2026
      </h3>

      <p className="text-gray-400 text-sm mb-3">
        Participated in WOSC 2026 organized by CSIR-National Institute of Oceanography (Goa), NCPOR, VIBHA, and Goa University.
      </p>

      <p className="text-gray-500 text-xs mb-4">
        📍 CSIR-NIO Goa | 📅 Feb 23–26, 2026
      </p>

      <button
        onClick={() => window.open(woscCert, "_blank")}
        className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-full text-sm hover:scale-105 transition"
      >
        View Certificate
      </button>
    </motion.div>

  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-16">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-400 mb-4">
          Feel free to reach out for opportunities or collaboration.
        </p>

        <div className="space-y-2">
          <p>📧 Email: {portfolioData.contact.email}</p>
          <p>📱 Phone: {portfolioData.contact.phone}</p>

          <p>
            💻 GitHub:{" "}
            <a href={`https://${portfolioData.contact.github}`} target="_blank" className="text-blue-400 underline">
              {portfolioData.contact.github}
            </a>
          </p>

          <p>
            🔗 LinkedIn:{" "}
            <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" className="text-blue-400 underline">
              {portfolioData.contact.linkedin}
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 Chaitanya Namdeo
      </footer>
    </div>
  );
}