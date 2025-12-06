import "./globals.css";
import Navbar from "./components/Navbar";
import AOSInit from "./components/AOSInit";

export const metadata = {
  title: "Meenakshi Jajee | Data Analyst Portfolio",
  description:
    "Portfolio of Meenakshi Jajee — Aspiring Data Analyst skilled in Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, and data-driven analytics projects.",
  keywords: [
    "Data Analyst Portfolio",
    "Data Analytics",
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Data Visualization",
    "Machine Learning Beginner",
    "Business Insights",
    "Meenakshi Jajee",
  ],
  authors: [{ name: "Meenakshi Jajee" }],
  creator: "Meenakshi Jajee",

  // ⭐ Favicon Config — MUST match files in /public
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Tailwind via CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* FORCE FAVICON OVERRIDE FOR ALL BROWSERS */}
        <link rel="icon" href="/favicon.png?v=5" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png?v=5" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=5" />
      </head>

      <body
        className="
          bg-gradient-to-b
          from-purple-50 via-white to-purple-100
          dark:from-gray-950 dark:via-purple-950 dark:to-black
          text-gray-900 dark:text-white
          transition-colors duration-300
        "
      >
        <AOSInit />
        <Navbar />

        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
