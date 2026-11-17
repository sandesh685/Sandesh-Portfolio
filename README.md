# Sandesh Bobade - Professional Developer Portfolio

> **Premium, Modern, Fully-Responsive Developer Portfolio Website**  
> Tailored for **Java Full Stack Developer** opportunities. Built with React.js, Vite, Tailwind CSS, Framer Motion, and Lucide Icons.

---

## 🌟 Highlights & Features

- **Accurate & Verified Credentials**: Derived strictly from verified documents and academic credentials (B.Sc. Computer Science, Savitribai Phule Pune University, Kiran Academy Java Full Stack certification, LetsUpgrade React certification, and BizzFly internship).
- **Modern Aesthetic**: Dark Navy (`#0B1020`), Primary Blue (`#3B82F6`), Purple (`#8B5CF6`), subtle glassmorphism cards, glowing radial gradients, and fluid typography.
- **Dark Mode & Light Mode**: Seamless theme switcher with persistent local storage caching and system preference support.
- **Dynamic Project Showcase**:
  - Filterable by category (*All, Full Stack, Frontend / SaaS, Software Testing & QA*).
  - Verified screenshots gallery for **Hotel Billing Software (HBS)**.
  - Interactive Project Modal showcasing architecture, verified features, and tech stacks.
- **Verified Certifications Gallery**:
  - High-resolution modal viewer with official verification codes (*Kiran Academy: 435992231*, *LetsUpgrade: LUERJSFEB126195*).
  - 1-click online verification links and direct PDF downloads.
- **GitHub Live Integration**: Fetches public repositories with clean fallbacks to pinned verified repos, stats, and topic tags.
- **Functional Recruiter Contact Section**:
  - Validated contact form with mailto client launcher.
  - 1-click clipboard copy for verified email (`sandeshbobade8055@gmail.com`) and phone (`+91 8208748962`).
- **Recruiter Ergonomics**:
  - Direct 1-click Resume Download button for `resume.pdf`.
  - In-browser interactive Resume preview modal.
  - Floating back-to-top button with circular scroll progress ring.
  - SEO-friendly meta tags, OpenGraph data, and custom "SB" SVG favicon.

---

## 📁 Project Structure

```text
Sandesh-Developer-Portfolio/
├── public/
│   ├── certificates/
│   │   ├── the-kiran-academy-certificate.pdf
│   │   ├── the-kiran-academy-certificate.jpg
│   │   ├── lets-upgrade-react-bootcamp.pdf
│   │   └── lets-upgrade-react-bootcamp.jpg
│   ├── projects/
│   │   ├── hotel-billing/     # Real screenshots of Hotel Billing Software
│   │   └── digital-menu/      # Menu dish previews
│   ├── favicon.svg            # Custom initials "SB" badge
│   ├── profile-photo.jpg      # Professional profile image
│   ├── resume.pdf             # Sandesh Bobade's resume
│   └── resume-preview.jpg     # High-res preview of resume
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx     # Glassmorphic header & active scroll spy
│   │   │   ├── Footer.jsx     # Branding & social links
│   │   │   └── BackToTop.jsx  # Circular progress indicator
│   │   ├── modals/
│   │   │   ├── ProjectModal.jsx     # Screenshot carousel & architecture breakdown
│   │   │   └── CertificateModal.jsx # Certificate inspection & verify links
│   │   └── sections/
│   │       ├── Hero.jsx       # Introduction, floating tech badges, quick stats
│   │       ├── About.jsx      # Background, philosophy, recruiter facts
│   │       ├── Skills.jsx     # Category-filtered skill matrices
│   │       ├── Experience.jsx # BizzFly internship & Kiran Academy training
│   │       ├── Projects.jsx   # Filterable cards with modal view
│   │       ├── Education.jsx  # Academic timeline (B.Sc. CS, HSC, SSC)
│   │       ├── Certifications.jsx # Verified certificate credentials
│   │       ├── GithubActivity.jsx # Repositories & open-source stats
│   │       └── Contact.jsx    # Form validation, copy email/phone
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark / Light theme provider
│   ├── data/
│   │   └── portfolioData.js   # Centralized verified portfolio data
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Running the Project Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/`.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Generates an optimized static bundle in the `dist/` directory ready for deployment to Vercel, Netlify, or GitHub Pages.

---

## 👤 Candidate Profile Summary

- **Name**: Sandesh Sanjay Bobade
- **Title**: Java Full Stack Developer
- **Education**: B.Sc. Computer Science (2026), Savitribai Phule Pune University (CGPA 8.68/10)
- **Specialized Training**: Java Full Stack Development, Kiran Academy, Pune (7 months)
- **Experience**: Software Development Intern, BizzFly
- **Location**: Pune, Maharashtra, India
- **Email**: sandeshbobade8055@gmail.com
- **Phone**: +91 8208748962

