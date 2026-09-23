import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Linkedin, Mail, Server, Cloud, Container, Terminal, GitBranch, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const EMAIL = "Arsalanmudassir701@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/mudassir-arsalan-0b29a9192";
const GITHUB = "https://github.com/arsalan9997/portflio";

const skills = ["AWS", "Linux", "Git", "Maven", "Jenkins", "Docker", "Kubernetes", "Ansible", "Terraform", "Python", "CI/CD", "Networking", "Cybersecurity", "Generative AI"];

const projects = [
  {
    num: "01",
    title: "AWS CI/CD Deployment",
    text: "GitHub-driven Maven build with Jenkins, Docker containerization and deployment on AWS EC2.",
    tags: ["AWS", "Jenkins", "Maven", "Docker"]
  },
  {
    num: "02",
    title: "Containerized Web Platform",
    text: "Production-style Docker workflow with image build, container runtime, health checks and repeatable deployment.",
    tags: ["Docker", "Linux", "Nginx", "EC2"]
  },
  {
    num: "03",
    title: "Cloud Infrastructure",
    text: "Infrastructure automation and cloud networking using Terraform, VPC concepts, IAM and scalable AWS services.",
    tags: ["Terraform", "AWS", "VPC", "IAM"]
  }
];

function App() {
  const root = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.from(".nav", { y: -25, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(".hero-copy > *", { y: 35, opacity: 0, duration: 0.9, stagger: 0.12, delay: 0.15, ease: "power3.out" });
      gsap.from(".portrait-wrap", { x: 50, opacity: 0, duration: 1.1, delay: 0.25, ease: "power3.out" });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 45, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%", once: true }
        });
      });
      gsap.utils.toArray(".project").forEach((el, i) => {
        gsap.from(el, {
          y: 35, opacity: 0, duration: 0.8, delay: i * 0.08, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        });
      });
    }, root);

    return () => { ctx.revert(); lenis.destroy(); };
  }, []);

  return (
    <div ref={root}>
      <header className="nav shell">
        <a className="brand" href="#home">MUDASSIR<span>ARSALAN</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href={`mailto:${EMAIL}`}>Let's talk <ArrowUpRight size={15}/></a>
      </header>

      <main>
        <section id="home" className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow">DEVOPS ENGINEER · CLOUD · AUTOMATION</div>
            <h1>Building reliable<br/><em>cloud systems.</em></h1>
            <p className="lead">I design, automate and deploy modern infrastructure with AWS, CI/CD, containers and Kubernetes.</p>
            <div className="actions">
              <a className="button primary" href="#work">View selected work <ArrowUpRight size={17}/></a>
              <a className="button ghost" href={`mailto:${EMAIL}`}>Contact me</a>
            </div>
            <div className="socials">
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
              <a href={`mailto:${EMAIL}`}><Mail size={18}/> Email</a>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="orbit orbit-a"></div>
            <div className="orbit orbit-b"></div>
            <div className="portrait-card">
              <img src="/mudassir-profile.jpg" alt="Mudassir Arsalan professional portrait" />
              <div className="portrait-caption">
                <span>01 / DEVOPS</span>
                <span>AWS · AUTOMATION · DELIVERY</span>
              </div>
            </div>
            <div className="floating-card"><span>Available for</span><strong>DevOps / Cloud</strong></div>
          </div>
        </section>

        <section id="about" className="section light">
          <div className="shell two-col">
            <div className="reveal">
              <div className="eyebrow dark">ABOUT ME</div>
              <h2>Infrastructure that<br/><span>ships with confidence.</span></h2>
            </div>
            <div className="about-copy reveal">
              <p>I’m a DevOps Engineer focused on cloud infrastructure, automation, CI/CD and containerized deployments. I also work across networking and cybersecurity, bringing an operations-first mindset to real-world technical environments.</p>
              <div className="facts">
                <div><small>ROLE</small><strong>DevOps Engineer</strong></div>
                <div><small>FOCUS</small><strong>AWS · CI/CD</strong></div>
                <div><small>STACK</small><strong>Docker · K8s</strong></div>
                <div><small>LOCATION</small><strong>India</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section dark">
          <div className="shell">
            <div className="section-head reveal">
              <div><div className="eyebrow">SELECTED WORK</div><h2>Projects built around<br/><span>delivery & automation.</span></h2></div>
              <p>Hands-on cloud and DevOps work covering source control, build automation, containers, infrastructure and deployment.</p>
            </div>
            <div className="projects">
              {projects.map(p => (
                <article className="project" key={p.num}>
                  <div className="project-top"><span>{p.num}</span><ArrowUpRight size={20}/></div>
                  <div className="project-icon"><Server size={30}/></div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="shell">
            <div className="section-head reveal">
              <div><div className="eyebrow dark">TOOLKIT</div><h2>The stack I work<br/><span>with every day.</span></h2></div>
              <p>Cloud, automation, containers, infrastructure as code, Linux and networking.</p>
            </div>
            <div className="skill-grid reveal">
              {skills.map((s, i) => <div className="skill" key={s}><span>{String(i+1).padStart(2,"0")}</span>{s}</div>)}
            </div>
            <div className="service-grid">
              <div className="service reveal"><Cloud/><h3>Cloud & AWS</h3><p>EC2, VPC, S3, IAM, EBS, EFS, CloudWatch and cloud networking.</p></div>
              <div className="service reveal"><GitBranch/><h3>CI/CD</h3><p>Git, Maven and Jenkins pipelines for repeatable software delivery.</p></div>
              <div className="service reveal"><Container/><h3>Containers</h3><p>Docker and Kubernetes workflows for portable, scalable applications.</p></div>
              <div className="service reveal"><ShieldCheck/><h3>Operations</h3><p>Linux, networking and cybersecurity fundamentals for reliable systems.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact dark">
          <div className="shell contact-inner reveal">
            <div className="eyebrow">HAVE A PROJECT?</div>
            <h2>Let’s build something<br/><span>that works.</span></h2>
            <p>For DevOps, cloud, automation or technical collaboration, get in touch.</p>
            <div className="contact-links">
              <a href={`mailto:${EMAIL}`}><Mail/> {EMAIL}</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn profile</a>
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github/> GitHub profile</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <span>© 2026 Mudassir Arsalan</span>
        <span>DevOps Engineer · AWS · Automation</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
