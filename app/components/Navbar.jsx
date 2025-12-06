export default function Navbar() {
  return (
    <nav
      className="
        w-full px-6 py-4
        bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950
        backdrop-blur-xl
        text-white shadow-[0_0_25px_rgba(0,0,0,0.5)]
        border-b border-purple-800/40
        fixed top-0 left-0 z-50
        transition-all duration-300
      "
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO + NAME */}
        <div className="flex items-center gap-3">
          {/* PROFILE IMAGE LOGO */}
          <img
            src="/profile.png"
            alt="Profile Logo"
            className="
              w-10 h-10 rounded-full object-cover
              border-2 border-cyan-300
              shadow-[0_0_10px_rgba(0,200,255,0.5)]
            "
          />

          {/* NAME */}
          <h1
            className="
              text-2xl font-bold tracking-wide
              text-white
              drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]
            "
          >
            Meenakshi<span className="text-cyan-300">.</span>
          </h1>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-lg font-medium">
          {[
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Projects", link: "/projects" },
          ].map((nav, i) => (
            <a
              key={i}
              href={nav.link}
              className="
                relative group transition cursor-pointer
                hover:text-cyan-300
              "
            >
              {nav.name}

              {/* UNDERLINE HOVER ANIMATION */}
              <span
                className="
                  absolute left-0 -bottom-1 w-0 h-[2px]
                  bg-gradient-to-r from-cyan-400 to-purple-400
                  transition-all duration-300 group-hover:w-full
                  rounded-full
                "
              ></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
