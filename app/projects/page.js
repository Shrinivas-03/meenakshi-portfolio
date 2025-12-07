"use client";

const projects = [
  {
    title: "Sanjeevani AI – Smart Health Companion",
    tech: [
      "HTML",
      "Tailwind CSS",
      "Flask",
      "TensorFlow",
      "PyTorch",
      "Supabase",
      "OpenAI API",
      "NLP",
    ],
    details: [
      "Built an AI-driven disease prediction system using ML models (TensorFlow/PyTorch).",
      "Implemented NLP pipelines to analyze symptoms and generate personalized health suggestions.",
      "Designed a conversational chatbot for real-time interaction using OpenAI API.",
      "Developed secure backend with Flask + Supabase for storing medical records.",
      "Implemented analytics to track engagement and improve model accuracy.",
      "Released as an open-source healthcare assistant for public use.",
    ],
  },

  {
    title: "KisanSetu – Farmer-to-Customer Marketplace",
    tech: [
      "HTML",
      "Tailwind",
      "JavaScript",
      "Flask",
      "Supabase",
      "Render.com",
      "Google Analytics",
    ],
    details: [
      "Developed a marketplace platform for direct farmer-to-customer transactions.",
      "Reduced middlemen involvement by 30%, improving farmer earnings.",
      "Built a role-based authentication system (Farmer, Customer, Admin).",
      "Designed dashboards for order tracking and product inventory.",
      "Integrated live sync using Supabase.",
      "Achieved 99.5% uptime on Render deployment.",
      "Enhanced UI based on analytics insights to improve user flow.",
    ],
  },

  {
    title: "AI-Based News Web App",
    tech: [
      "HTML",
      "Tailwind",
      "JavaScript",
      "Flask",
      "HuggingFace Transformers",
      "News API",
      "NLP",
    ],
    details: [
      "Built an AI-powered real-time news summarizer using transformer models.",
      "Condenses long articles into readable bullet points.",
      "Implemented OTP login and secure password hashing.",
      "Added bookmarking, save-later, and topic filters.",
      "Integrated live news via REST API and optimized UI for responsiveness.",
      "Reduced load time by optimizing caching and API frequency.",
    ],
  },
];

export default function Projects() {
  return (
    <main className="px-4 sm:px-6 md:px-10 py-24 max-w-7xl mx-auto">
      {/* PAGE TITLE */}
      <h1
        className="
          text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12
          tracking-tight text-center
          bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300
          text-transparent bg-clip-text
          drop-shadow-[0_0_12px_rgba(0,0,0,0.4)]
        "
        data-aos="fade-down"
      >
        My Projects
      </h1>

      {/* PROJECT GRID */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="
              p-6 rounded-2xl
              bg-white/10 dark:bg-purple-900/20
              backdrop-blur-xl
              border border-purple-400/20
              shadow-xl
              hover:shadow-cyan-400/20
              hover:scale-[1.02]
              transition-all duration-300
              break-words
            "
            data-aos="zoom-in"
            data-aos-delay={i * 150}
          >
            {/* TITLE */}
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-cyan-300">
              {p.title}
            </h2>

            {/* TECH BADGES */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="
                    px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm
                    bg-purple-800/40 border border-purple-500/30
                    text-purple-200 rounded-full
                    backdrop-blur-md
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {/* DETAILS LIST */}
            <ul
              className="
                list-disc ml-4 sm:ml-5 mt-3
                text-gray-700 dark:text-gray-300
                text-sm sm:text-base
                space-y-2
              "
            >
              {p.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
