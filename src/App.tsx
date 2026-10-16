import {
  profile,
  metrics,
  about,
  experience,
  projects,
  skills,
  certification,
  education,
} from './data'
import { useReveal } from './reveal'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function App() {
  useReveal()

  return (
    <>
      <header className="topbar">
        <a href="#top" className="mark" aria-label="Home">
          <span className="mark-dot" /> SR
        </a>
        <nav className="topnav">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
          Résumé
        </a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <p className="hero-kicker">{profile.role} · {profile.location}</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="#projects">
              See my work
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <dl className="metrics">
            {metrics.map((m) => (
              <div className="metric" key={m.label}>
                <dt className="metric-value">{m.value}</dt>
                <dd className="metric-label">{m.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2 className="section-title" data-reveal>
            About
          </h2>
          <div className="prose">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* EXPERIENCE — a genuine chronological sequence */}
        <section id="work" className="section">
          <h2 className="section-title" data-reveal>
            Experience
          </h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li className="tl-item" key={job.company}>
                <div className="tl-head">
                  <div>
                    <h3 className="tl-role">{job.role}</h3>
                    <p className="tl-company">
                      {job.company}
                      {job.badge && <span className="badge">{job.badge}</span>}
                    </p>
                  </div>
                  <p className="tl-meta">
                    <span className="tl-period">{job.period}</span>
                    <span className="tl-loc">{job.location}</span>
                  </p>
                </div>
                <ul className="tl-points">
                  {job.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h2 className="section-title" data-reveal>
            Projects
          </h2>
          <div className="projects">
            {projects.map((p) => (
              <article className={p.featured ? 'proj proj-featured' : 'proj'} key={p.name}>
                <div className="proj-top">
                  <h3 className="proj-name">
                    {p.featured && (
                      <span className="proj-star" aria-hidden="true">
                        ★
                      </span>
                    )}
                    {p.name}
                  </h3>
                  <span className="proj-year">{p.year}</span>
                </div>
                <p className="proj-blurb">{p.blurb}</p>
                <ul className="tags">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {p.links && (
                  <div className="proj-links">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h2 className="section-title" data-reveal>
            Skills
          </h2>
          <div className="skills">
            {skills.map((s) => (
              <div className="skill-row" key={s.group}>
                <h3 className="skill-group">{s.group}</h3>
                <ul className="tags">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATION + EDUCATION */}
        <section className="section two-col">
          <div>
            <h2 className="section-title" data-reveal>
              Certification
            </h2>
            <div className="cert">
              <span className="cert-star" aria-hidden="true">
                ★
              </span>
              <div>
                <h3 className="cert-name">{certification.name}</h3>
                <p className="cert-meta">
                  {certification.issuer} · Issued {certification.issued} · ID {certification.credentialId}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="section-title" data-reveal>
              Education
            </h2>
            <ul className="edu">
              {education.map((e) => (
                <li key={e.degree}>
                  <h3 className="edu-degree">{e.degree}</h3>
                  <p className="edu-meta">
                    {e.school} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <h2 className="section-title" data-reveal>
            Let’s talk
          </h2>
          <p className="contact-lead">
            Open to full-stack and backend roles. The fastest way to reach me is email.
          </p>
          <div className="contact-links">
            <a className="btn btn-solid" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              {profile.phone}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer-note">Built with React — no template.</span>
      </footer>
    </>
  )
}
