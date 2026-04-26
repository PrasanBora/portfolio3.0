import { NextResponse } from "next/server"

export async function GET() {
  const projects = [
    {
      id: "video-caption-tool",
      title: "Video Caption Tool",
      date: "Feb 2026",
      description:
        "A web-based tool that extracts timestamped captions from video files using OpenAI Whisper. Runs locally with no API costs and supports Hindi, English, and auto language detection.",
      features: [
        "Whisper Transcription",
        "Hindi & English Support",
        "SRT / VTT / JSON Output",
        "Drag-and-drop Upload",
      ],
      stats: [
        { value: "Local processing", label: "Privacy" },
        { value: "Multi-format export", label: "Output" },
        { value: "Tiny → large-v3", label: "Models" },
      ],
      tech: ["Python", "Streamlit", "Whisper", "FFmpeg"],
      tags: ["AI", "Tools"],
      demo: "",
      repo: "https://github.com/PrasanBora/video-caption-tool",
    },
    {
      id: "linkedin-clone",
      title: "LinkedIn Clone",
      date: "Oct 2024 - Nov 2024",
      description:
        "A full-stack LinkedIn clone built with the MERN stack featuring user profiles, posts, connections, and search functionality. Implements secure authentication and a responsive social media experience.",
      features: [
        "User Profiles & Posts",
        "Connection Requests",
        "Secure Authentication",
        "Responsive Design",
      ],
      stats: [
        { value: "Full MERN stack", label: "Architecture" },
        { value: "JWT auth", label: "Security" },
        { value: "Real-time updates", label: "Experience" },
      ],
      tech: ["MongoDB", "Express", "React", "Node.js"],
      tags: ["Web", "Full-Stack", "Social"],
      demo: "https://linkedin-clone-x4of.onrender.com/",
      repo: "https://github.com/PrasanBora/Linkedin_clone",
      image: "/images/projects/linkedIn.png",
      imageAlt: "LinkedIn Clone project preview",
    },
    {
      id: "chatpod",
      title: "Chatpod",
      date: "Aug 2024 - Sep 2024",
      description:
        "A real-time chat application using Node.js and Socket.io. Supports group chat with multi-client updates and instant message delivery across connected users.",
      features: [
        "Real-time Messaging",
        "Group Chat Rooms",
        "Multi-client Sync",
        "Socket.io Integration",
      ],
      stats: [
        { value: "Instant delivery", label: "Performance" },
        { value: "Multi-room support", label: "Features" },
        { value: "Live updates", label: "Experience" },
      ],
      tech: ["Node.js", "Socket.io", "React", "JavaScript"],
      tags: ["Realtime", "Web"],
      demo: "",
      repo: "https://github.com/PrasanBora/Chatpod",
      image: "/images/projects/chatpod.jpg",
      imageAlt: "Chatpod chat application",
    },
    {
      id: "movie-plus",
      title: "Movie Plus",
      date: "July 2024 - Aug 2024",
      description:
        "A movie searching web app built with React using the OMDB API. Browse movies with banners, release years, and detailed information all in a clean interface.",
      features: [
        "Movie Search",
        "OMDB API Integration",
        "Dynamic Banners",
        "Responsive Layout",
      ],
      stats: [
        { value: "Fast search", label: "Performance" },
        { value: "Rich movie data", label: "Content" },
        { value: "Clean UI", label: "Design" },
      ],
      tech: ["React", "OMDB API", "JavaScript"],
      tags: ["Web", "API"],
      demo: "https://prasanbora.github.io/React-Movie_Plus/",
      repo: "https://github.com/PrasanBora/React-Movie_Plus",
      image: "/images/projects/movie_plus.jpg",
      imageAlt: "Movie_Plus app preview",
    },
    {
      id: "weather-app",
      title: "Weather App",
      date: "June 2024 - July 2024",
      description:
        "A weather application that shows real-time weather data for any location using OpenWeatherAPI. Supports city search, geolocation, and displays detailed weather metrics.",
      features: [
        "City Search",
        "Geolocation Support",
        "Weather Metrics",
        "Responsive Design",
      ],
      stats: [
        { value: "Live weather data", label: "Data Source" },
        { value: "Geolocation API", label: "Features" },
        { value: "Clean interface", label: "Design" },
      ],
      tech: ["JavaScript", "OpenWeatherAPI", "HTML", "CSS"],
      tags: ["Web", "API"],
      demo: "https://prasanbora.github.io/Weather_App/",
      repo: "https://github.com/PrasanBora/Weather_App",
      image: "/images/projects/webapp.jpg",
      imageAlt: "Weather app interface",
    },
    {
      id: "2048",
      title: "2048 Game",
      date: "May 2024 - June 2024",
      description:
        "A faithful clone of the popular 2048 puzzle game built with vanilla JavaScript and DOM manipulation. Slide numbered tiles on a grid to combine them and reach the 2048 tile.",
      features: [
        "Keyboard Controls",
        "Score Tracking",
        "Smooth Animations",
        "Game State Management",
      ],
      stats: [
        { value: "Pure JavaScript", label: "Tech" },
        { value: "DOM manipulation", label: "Approach" },
        { value: "Addictive gameplay", label: "Experience" },
      ],
      tech: ["JavaScript", "HTML", "CSS"],
      tags: ["Game", "Web"],
      demo: "https://prasanbora.github.io/2048/",
      repo: "https://github.com/PrasanBora/2048",
      image: "/images/projects/2048.jpg",
      imageAlt: "2048 game screenshot",
    },
    {
      id: "pomodoro-extension",
      title: "Pomodoro Extension",
      date: "Apr 2024 - May 2024",
      description:
        "A Chrome browser extension implementing the Pomodoro technique with customizable session durations, short and long breaks to boost productivity.",
      features: [
        "Custom Session Lengths",
        "Short & Long Breaks",
        "Browser Notifications",
        "Minimal Interface",
      ],
      stats: [
        { value: "Chrome Extension", label: "Platform" },
        { value: "Custom timers", label: "Features" },
        { value: "Productivity boost", label: "Impact" },
      ],
      tech: ["JavaScript", "Chrome Extension"],
      tags: ["Extension", "Productivity"],
      demo: "",
      repo: "https://github.com/PrasanBora/Pomorodo_extension",
      image: "/images/projects/pomodoro.jpg",
      imageAlt: "Pomodoro extension preview",
    },
    {
      id: "frontend-design",
      title: "Magma Clone",
      date: "Apr 2024",
      description:
        "A pixel-faithful clone of thisismagma.com built to explore advanced web animation. Uses GSAP for sequenced motion, Locomotive Scroll for inertia, and Canvas for 3D-style scroll effects.",
      features: [
        "GSAP Animations",
        "Locomotive Scroll",
        "Canvas 3D Effects",
        "Responsive Layout",
      ],
      stats: [
        { value: "Pixel-faithful clone", label: "Approach" },
        { value: "Smooth scroll", label: "UX" },
        { value: "Pure JS", label: "Stack" },
      ],
      tech: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
      tags: ["Web", "Animation"],
      demo: "https://prasanbora.github.io/frontend_design/",
      repo: "https://github.com/PrasanBora/frontend_design",
    },
    {
      id: "portfolio-2",
      title: "Portfolio v2",
      date: "Mar 2024",
      description:
        "The previous iteration of my personal portfolio. A vanilla HTML/CSS/JS site focused on hand-tuned animations and layout — the predecessor to this Next.js rebuild.",
      features: [
        "Custom Animations",
        "Responsive Design",
        "Hand-written CSS",
        "Vercel Deploy",
      ],
      stats: [
        { value: "No frameworks", label: "Stack" },
        { value: "Static hosting", label: "Deploy" },
        { value: "From scratch", label: "Approach" },
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      tags: ["Web", "Portfolio"],
      demo: "https://prasan-bora-portfolio.vercel.app/",
      repo: "https://github.com/PrasanBora/Portfolio2.O",
    },
  ]
  return NextResponse.json(projects)
}
