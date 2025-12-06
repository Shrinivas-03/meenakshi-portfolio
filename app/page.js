"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 text-center pt-48 pb-24">
      {/* PROFILE IMAGE */}
      <img
        src="/profile.png"
        data-aos="zoom-in"
        className="
          w-40 h-40 rounded-full border-4 border-cyan-400
          shadow-[0_0_25px_rgba(0,200,255,0.5)]
        "
      />

      {/* NAME + TITLE */}
      <h1
        className="
          text-5xl font-extrabold mt-8 tracking-tight text-center
        "
        data-aos="fade-up"
      >
        <span
          className="
            text-white dark:text-white block
            drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]
          "
        >
          Meenakshi Jajee
        </span>

        <span
          className="
            text-transparent bg-clip-text
            bg-gradient-to-r from-cyan-400 to-purple-400
            drop-shadow-[0_0_10px_rgba(100,100,255,0.4)]
          "
        >
          — Data Analyst
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p
        className="
          text-gray-700 dark:text-gray-300
          mt-4 max-w-2xl text-lg leading-relaxed
        "
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Aspiring Data Analyst skilled in{" "}
        <span className="text-cyan-400 font-semibold">
          Python, SQL, Pandas, NumPy, Matplotlib, Seaborn
        </span>{" "}
        & ML fundamentals. Passionate about discovering insights, solving
        real-world business problems, and building AI-driven projects.
      </p>

      {/* BUTTONS */}
      <div className="flex gap-4 mt-8" data-aos="fade-up" data-aos-delay="250">
        <a
          href="/resume.pdf"
          download
          className="
            px-6 py-3 bg-cyan-500 text-black font-semibold
            rounded-lg shadow-lg
            hover:bg-cyan-400 hover:shadow-cyan-300/40
            transition
          "
        >
          Download Resume
        </a>

        <a
          href="mailto:meenakshijajee157@gmail.com"
          className="
            px-6 py-3 border border-cyan-400 rounded-lg
            hover:bg-cyan-900/40 transition
          "
        >
          Contact Me
        </a>
      </div>

      {/* SOCIAL LINKS */}
      <div
        className="flex gap-8 mt-10 text-3xl"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <a
          href="mailto:meenakshijajee157@gmail.com"
          className="hover:text-cyan-400 transition"
          title="Email"
        >
          📧
        </a>

        <a
          href="https://linkedin.com/in/meenakshi-jajee"
          className="hover:text-cyan-400 transition"
          title="LinkedIn"
        >
          🔗
        </a>

        <a
          href="https://github.com/Meenakshi1921"
          className="hover:text-cyan-400 transition"
          title="GitHub"
        >
          💻
        </a>
      </div>
    </main>
  );
}
