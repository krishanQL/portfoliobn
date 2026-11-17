export const profile = {
  name: "Krishan Kant",
  role: "CSE student building deployed ML systems",
  shortRole: "ML, data and full-stack",
  availability: "Open to ML / Data Science internships",
  location: "Ghaziabad, India",
  email: "nishant73883@gmail.com",
  phone: "+91 9149023600",
  linkedin: "https://www.linkedin.com/in/krishanaq",
  github: "https://github.com/krishanQL",
  githubUser: "krishanQL",
  resumeUrl: "/Krishan_Kant_Resume.pdf",
  summary:
    "CSE student at AKGEC actively seeking AI/ML internship opportunities. Experienced in building AI agents, RAG pipelines, LLM-powered chatbots, and machine learning applications. Skilled in Python, Scikit-learn, PyTorch, LangChain, LangGraph, and FastAPI. Passionate about developing intelligent, production-ready AI solutions..",
  focus:
    "Hackathon Finalist (SDGI Global University, March 2026). Seeking an ML/Data Science internship to contribute to model development, feature engineering, and deployment pipelines.",
};

export const experience = [
  {
    id: "hackathon",
    role: "Hackathon Finalist",
    company: "SDGI Global University – Ghaziabad, India",
    period: "March 2026",
    type: "Achievement",
    highlights: [
      "Reached the finalist round competing regionally; independently drove all technical decisions from model selection to live demo.",
      "Delivered a functional ML-powered solution within the hackathon timeline, collaborating cross-functionally across design, development, and presentation.",
    ],
    stack: ["Python", "Scikit-learn", "FastAPI", "Next.js"],
  },
  {
    id: "projects-exp",
    role: "Independent ML Projects",
    company: "Self-directed",
    period: "2025 – 2026",
    type: "Projects",
    highlights: [
      "Built and deployed 4 production ML systems across NLP, computer vision, and recommendation domains.",
      "Engineered scalable FastAPI backends and Next.js frontends deployed on Render and Vercel.",
      "Applied cross-validation, hyperparameter tuning, and feature engineering on real-world datasets.",
    ],
    stack: ["Python", "FastAPI", "Scikit-learn", "OpenCV", "Next.js", "Docker"],
  },
];

export const leadership = [
  {
    id: "excellence",
    role: "Practical Training – Centers of Excellence",
    organisation: "Ajay Kumar Garg Engineering College",
    period: "2024 – Present",
    highlights: [
      "Hands-on training at AKGEC's Centers of Excellence — Kuka Robotics, Bosch Rexroth & National Instruments.",
      "Applied robotics and automation concepts alongside core CSE coursework.",
    ],
  },
  {
    id: "certifications",
    role: "Professional Certifications",
    organisation: "CampusX & Udemy",
    period: "2024 – 2026",
    highlights: [
      "Data Science Mentorship Program (DSMP) — CampusX, 2025–2026.",
      "Machine Learning — CampusX, 2026.",
      "Web Development & Database Administration — Udemy, 2024.",
    ],
  },
];

export const skillGroups = [
  { id: "lang", title: "Languages", items: ["Python", "JavaScript", "SQL", "React", "Next.js"] },
  {
    id: "ml",
    title: "AI and machine learning",
    items: ["Scikit-learn", "Random Forest", "SVM", "TF-IDF", "NLP", "OpenCV", "PyTorch", "LLMs", "RAG", "Agentic AI", "LangChain", "LangGraph", "Gemini API"],
  },
  {
    id: "data",
    title: "Data",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Cross-validation", "Hyperparameter Tuning"],
  },
  {
    id: "tools",
    title: "Tools & Backend",
    items: ["FastAPI", "Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma ORM", "Supabase", "Docker", "Git", "Vercel", "Render", "Railway"],
  },
];

export const education = [
  {
    id: "btech",
    title: "B.Tech — Computer Science Engineering",
    institution: "Ajay Kumar Garg Engineering College, Ghaziabad",
    detail: "Aug 2024 – Aug 2028",
    extra: "CGPA 7.9 · DSA, DBMS, Theory of Computation, Linear Algebra, Probability & Statistics, OOP",
  },
  {
    id: "hsc",
    title: "Intermediate — Science (PCM)",
    institution: "Jaypee Vidya Mandir",
    detail: "83%",
  },
];

export const achievements = [
  { id: "hackathon", title: "Hackathon Finalist — SDGI Global University, March 2026" },
  { id: "churmai", title: "Deployed ChurnAI: production-ready ML platform for customer churn prediction (FastAPI + Next.js)" },
  { id: "ignivis", title: "Deployed IGNIVIS: multi-modal AI heat stress system with 4 ML models and sub-2s inference latency" },
  { id: "nlp", title: "Built Spam Classifier with 94% accuracy (SVM + TF-IDF), outperforming Naive Bayes baseline (88%)" },
];

export const projects = [
  {
    id: "churmai",
    slug: "churnai-predictive-analytics",
    title: "ChurnAI – Predictive Customer Churn",
    context: "FastAPI, Scikit-learn, Next.js, Docker, TypeScript",
    status: "Deployed",
    overview:
      "A production-ready ML platform that predicts customer churn using behavioral and subscription features, with a scalable FastAPI backend.",
    highlights: [
      "Predicts customer churn via behavioral and subscription features using Random Forest classifier.",
      "Interactive analytics dashboard with bulk CSV prediction, risk segmentation, and model performance monitoring.",
      "FastAPI backend + Next.js dashboard deployed on Vercel and Render.",
    ],
    stack: ["Python", "FastAPI", "Scikit-learn", "Next.js", "Docker", "TypeScript"],
    sourceUrl: "https://github.com/krishanQL/Churn-prediction",
    liveUrl: "https://churn-prediction-blush.vercel.app",
  },
  {
    id: "ignivis",
    slug: "ignivis-heat-stress-system",
    title: "IGNIVIS – AI Heat Stress System",
    context: "FastAPI, Scikit-learn, OpenCV, Next.js, PostgreSQL",
    status: "Deployed",
    overview:
      "A multi-modal AI system with 4 independent ML models (computer vision, environmental sensors, physiological inputs) for heat stress intelligence.",
    highlights: [
      "Engineered 4 ML models with sub-2s inference latency under 512 MB cloud memory constraint.",
      "Trained Random Forest classifiers with cross-validated feature engineering.",
      "Integrated Google Gemini API for AI-driven health alerts on a Next.js + Tailwind CSS frontend.",
    ],
    stack: ["Python", "FastAPI", "Scikit-learn", "OpenCV", "Next.js", "PostgreSQL"],
    sourceUrl: "https://github.com/krishanQL/ignivis",
    liveUrl: "https://ignivis.vercel.app",
  },
  {
    id: "cinematch",
    slug: "cinematch-movie-recommender",
    title: "CineMatch – Movie Recommender",
    context: "Python, FastAPI, Scikit-learn, TMDB API, Next.js",
    status: "Deployed",
    overview:
      "Content-based filtering engine (CountVectorizer + Cosine Similarity) across 5,000+ movies with real-time TMDB API integration.",
    highlights: [
      "Top-5 recommendations in under 100 ms via vectorized feature indexing across 5,000+ movies.",
      "Real-time TMDB API integration for live posters, ratings, and movie details.",
      "FastAPI backend (Render) + Next.js frontend (Vercel).",
    ],
    stack: ["Python", "FastAPI", "Scikit-learn", "Next.js", "TMDB API"],
    sourceUrl: "https://github.com/krishanQL/Movie_recommender",
    liveUrl: "https://movie-recommender-three-lemon.vercel.app",
  },
  {
    id: "spam-classifier",
    slug: "spam-classifier-nlp",
    title: "Spam Classifier – NLP & ML",
    context: "Python, FastAPI, Scikit-learn, TF-IDF, SVM, Next.js",
    status: "Deployed",
    overview:
      "NLP pipeline (tokenization, stopword removal, TF-IDF) + SVM classifier achieving 94% accuracy, outperforming Naive Bayes baseline.",
    highlights: [
      "NLP pipeline with TF-IDF + SVM (SVC) achieving 94% accuracy vs 88% Naive Bayes baseline.",
      "FastAPI backend with sub-100 ms predictions.",
      "Production-scale Next.js + Tailwind CSS frontend.",
    ],
    stack: ["Python", "FastAPI", "Scikit-learn", "TF-IDF", "SVM", "Next.js"],
    sourceUrl: "https://github.com/krishanQL/spam_classifier",
    liveUrl: "https://spam-classifier-scx4.vercel.app",
  },
];

export const projectMap = Object.fromEntries(projects.map((project) => [project.id, project]));
