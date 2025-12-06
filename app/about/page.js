"use client";

export default function About() {
  return (
    <main className="px-6 py-24 max-w-4xl mx-auto">
      {/* TITLE */}
      <h1
        className="
          text-6xl font-extrabold mb-14 tracking-tight text-center
          bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300
          text-transparent bg-clip-text
          drop-shadow-[0_0_12px_rgba(0,0,0,0.4)]
        "
        data-aos="fade-down"
      >
        About Me
      </h1>

      {/* INTRO */}
      <p
        className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        I am{" "}
        <span className="text-cyan-400 font-semibold">Meenakshi Jajee</span>, an
        aspiring Data Analyst passionate about transforming data into meaningful
        insights. With strong skills in{" "}
        <span className="font-semibold text-purple-400">
          Python, SQL, and Data Visualization
        </span>
        , I enjoy analyzing patterns, solving real-world problems, and building
        AI-driven applications that create impact.
        <br />
        <br />
        My goal is to become a modern data professional who can combine
        analytical thinking, engineering fundamentals, and business
        understanding to drive smarter decisions.
      </p>

      {/* SKILLS */}
      <h2
        className="text-3xl font-bold mt-14 mb-6 text-cyan-300"
        data-aos="fade-right"
      >
        Skills
      </h2>

      <div
        className="grid grid-cols-2 gap-4 md:grid-cols-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {[
          "Python",
          "MySQL",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Data Structures & Algorithms",
          "OOPs",
        ].map((skill, i) => (
          <div
            key={i}
            className="
              p-3 rounded-xl text-center
              bg-white/10 dark:bg-purple-900/30
              border border-purple-400/20
              shadow-md hover:shadow-cyan-400/30
              hover:border-cyan-300
              transition backdrop-blur-lg
            "
          >
            {skill}
          </div>
        ))}
      </div>

      {/* INTERESTS */}
      <h2
        className="text-3xl font-bold mt-14 mb-6 text-cyan-300"
        data-aos="fade-right"
      >
        Interests
      </h2>

      <ul
        className="list-disc ml-8 text-gray-700 dark:text-gray-300 text-lg space-y-2"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <li>Data Analytics & Visualization</li>
        <li>Machine Learning Fundamentals</li>
        <li>AI-Powered Web Applications</li>
        <li>Building Dashboards & Insights</li>
        <li>Understanding Business Problems</li>
      </ul>

      {/* RESUME */}
      <div className="text-center mt-16" data-aos="zoom-in">
        <a
          href="/resume.pdf"
          download
          className="
            inline-block px-8 py-3
            bg-cyan-500 text-black font-semibold
            rounded-xl shadow-xl
            hover:bg-cyan-400 hover:shadow-cyan-300/40
            transition
          "
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}
