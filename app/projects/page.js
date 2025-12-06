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
      "Implemented user analytics to track engagement and improve prediction accuracy.",
      "Built as an open-source healthcare assistant accessible to the public.",
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
      "Developed a marketplace platform enabling direct farmer-to-customer sales.",
      "Reduced middle-men cost by 30% and increased farmer profit margins.",
      "Built multi-role authentication (Farmer, Customer, Admin).",
      "Created product management dashboard with inventory + order tracking.",
      "Integrated real-time data sync using Supabase.",
      "Achieved 99.5% uptime after deployment on Render.com.",
      "Enhanced UI/UX based on analytics insights to improve user flow.",
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
      "Developed a real-time AI news summarizer using transformer-based NLP models.",
      "Summarizes long news articles into easy-to-read bullet points.",
      "Implemented user authentication with OTP verification and password hashing.",
      "Added bookmarking, saved articles, and topic-based categorization.",
      "Integrated live news using REST API and created a responsive Tailwind UI.",
      "Optimized caching and API calls to improve user session speed.",
    ],
  },
];

export default function Projects() {
  return (
    <main className="px-6 py-24 max-w-6xl mx-auto">
      {/* PAGE TITLE */}
      <h1
        className="
          text-6xl font-extrabold mb-16 tracking-tight text-center
          bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300
          text-transparent bg-clip-text
          drop-shadow-[0_0_12px_rgba(0,0,0,0.4)]
        "
        data-aos="fade-down"
      >
        My Projects
      </h1>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-2">
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
              hover:scale-[1.03]
              transition-transform duration-300
            "
            data-aos="zoom-in"
            data-aos-delay={i * 150}
          >
            {/* TITLE */}
            <h2 className="text-2xl font-bold mb-3 text-cyan-300">{p.title}</h2>

            {/* TECH BADGES */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="
                    px-3 py-1 text-sm
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
            <ul className="list-disc ml-5 mt-3 text-gray-700 dark:text-gray-300 text-base space-y-2">
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
