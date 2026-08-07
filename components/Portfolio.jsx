"use client";

import ShaderAurora from "@/components/ShaderAurora";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// WhatsApp — update this number to your business WhatsApp (country code, no +)
const WHATSAPP_NUMBER = "916363606347";
const WHATSAPP_MSG = "Hi Prapul, I'd like to request a quote for a website.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
const EMAIL_QUOTE = "mailto:prapul.2004@gmail.com?subject=Website%20Quote%20Request&body=Hi%20Prapul%2C%0A%0AI%27d%20like%20to%20request%20a%20quote%20for%3A%0A%0A-%20Project%20type%3A%20%0A-%20Timeline%3A%20%0A-%20Budget%3A%20%0A%0AThanks!";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* BACKGROUND */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <ShaderAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      </div>

      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ position: "fixed", top: "1.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 50 }}
        className="pointer-events-auto backdrop-blur-2xl bg-black/30 border border-white/10 rounded-full px-6 py-2.5 shadow-2xl"
      >
        <ul className="flex gap-6 text-[13px] font-medium text-zinc-400 tracking-wide">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
          <li><a href="#security" className="hover:text-white transition-colors">Security Work</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </motion.nav>

      {/* CONTENT */}
      <main
        style={{ position: "relative", zIndex: 10, pointerEvents: "none" }}
        className="max-w-5xl mx-auto px-6 py-32 space-y-32"
      >
        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="min-h-[85vh] flex flex-col justify-center"
        >
          <motion.p variants={fadeUp} className="text-[11px] tracking-[0.25em] text-zinc-500 uppercase mb-6 font-mono">
            Cybersecurity Engineer × Web Studio Founder
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-bold mb-8 leading-[0.95] tracking-tight bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent">
            Prapul<br />Upendrakumar
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
            I build detection systems for cloud environments — and modern, high-performance
            websites for businesses worldwide through{" "}
            <span className="text-white font-medium">Next2You Creations</span>.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-10 pointer-events-auto">
            <a href="#services" className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
              Hire for a Website
            </a>
            <a href="#security" className="px-5 py-2.5 border border-white/20 rounded-full text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition-colors">
              View Security Work
            </a>
          </motion.div>
        </motion.section>

        {/* ABOUT */}
        <AnimatedSection id="about">
          <SectionLabel number="01" title="About" />
          <div className="pointer-events-auto backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10">
            <p className="text-zinc-300 leading-[1.8] text-[16px]">
              Security engineer focused on <span className="text-white">Blue Team operations</span> —
              detection engineering, threat hunting, and cloud security. Founder of{" "}
              <span className="text-white">Next2You Creations</span>, a web studio building
              modern websites for businesses worldwide.
            </p>
          </div>
        </AnimatedSection>

        {/* SERVICES — NEXT2YOU CREATIONS */}
        <AnimatedSection id="services">
          <SectionLabel number="02" title="Next2You Creations" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="pointer-events-auto backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10">
              <p className="text-2xl md:text-3xl font-semibold text-white leading-snug tracking-tight mb-4">
                Websites that make your business look credible online.
              </p>
              <p className="text-zinc-400 leading-relaxed text-[15px] max-w-3xl">
                From single-page landing sites to full business websites,
                we design and build modern, fast, mobile-ready web experiences
                for clients worldwide.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-3">
              <ServiceCard
                title="Business Websites"
                description="Full multi-page websites for companies, agencies, and service providers — built to convert visitors into customers."
              />
              <ServiceCard
                title="Portfolio Websites"
                description="Personal-brand and creator portfolios that showcase your work with clean design and smooth interactions."
              />
              <ServiceCard
                title="Landing Pages"
                description="High-conversion single-page sites for product launches, campaigns, and lead generation."
              />
              <ServiceCard
                title="Website Redesigns"
                description="Modernize outdated sites with better UX, performance, and SEO — without losing your brand identity."
              />
            </motion.div>

            {/* PROCESS */}
            <motion.div variants={fadeUp} className="pointer-events-auto backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10">
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 mb-6">How We Work</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <ProcessStep number="01" title="Discovery" desc="Understand your goals, audience, and brand." />
                <ProcessStep number="02" title="Design" desc="Craft a clean, on-brand visual direction." />
                <ProcessStep number="03" title="Development" desc="Build fast, responsive, production-ready code." />
                <ProcessStep number="04" title="Launch" desc="Deploy, test, and hand off — ready to grow." />
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="pointer-events-auto backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-3xl p-8 md:p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
                Have a project in mind?
              </h3>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                Let's build a website that works for your business. Free consultation,
                transparent quotes, no obligations.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
                >
                  Request a Quote via WhatsApp
                </a>
                <a
                  href={EMAIL_QUOTE}
                  className="px-6 py-3 border border-white/20 rounded-full text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
                >
                  Email a Brief
                </a>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* SECURITY WORK */}
        <AnimatedSection id="security">
          <SectionLabel number="03" title="Security Engineering" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-3"
          >
            <ProjectCard
              title="AWS Multi-Role Assumption Detection Pipeline"
              link="https://github.com/Prapul1/aws-detection-pipeline"
              description="Real-time serverless detection pipeline (CloudTrail → EventBridge → Lambda → DynamoDB → SNS) that alerts when a user assumes 3+ distinct IAM roles within a 15-minute window, with optional auto-containment. Mapped to MITRE ATT&CK T1078.004 and T1548."
              tags={["AWS", "Lambda", "MITRE ATT&CK", "Serverless"]}
            />
            <ProjectCard
              title="AWS CloudTrail + Athena + Sigma Detection Lab"
              link="https://github.com/Prapul1/aws-cloudtrail-sigma-lab"
              description="Cloud-native SIEM pipeline (S3 → Athena/Trino) over ~2,900 simulated CloudTrail events. Identified multi-role assumption and EC2 abuse patterns; authored two Sigma rules mapped to MITRE ATT&CK Cloud Matrix."
              tags={["AWS", "Athena", "Sigma", "SIEM"]}
            />
            <ProjectCard
              title="Real-Time ML-Based Network Intrusion Detection"
              link="https://github.com/Prapul1/intrusion_detection_system"
              description="End-to-end IDS using Scapy and Scikit-learn to classify live traffic as benign or malicious (DoS, port scans, brute-force), deployed via a Flask + SocketIO real-time alerting dashboard."
              tags={["Python", "ML", "Flask", "Scapy"]}
            />
            <ProjectCard
              title="KQL Threat Investigation — A Scandal in Valdoria"
              link="https://github.com/Prapul1/kc7-valdoria-investigation"
              description="Used KQL across Employees, Email, Authentication, and Process events to trace phishing compromises, PowerShell persistence, SSH C2 tunneling, and document exfiltration. Reconstructed full timeline mapped to MITRE ATT&CK (T1566, T1204, T1053.005, T1572, T1567)."
              tags={["KQL", "Threat Hunting", "MITRE ATT&CK"]}
            />
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-3 mt-8"
          >
            <SkillCard title="Security & Detection" items="IDS/IPS · NIST IR · Cyber Kill Chain · MITRE ATT&CK · Threat Hunting" />
            <SkillCard title="Cloud Security" items="AWS · CloudTrail · Athena · EventBridge · Lambda · IAM · Sigma" />
            <SkillCard title="SIEM & Query" items="Splunk · ELK · Wazuh · KQL · Kusto · Wireshark · Scapy" />
            <SkillCard title="Programming" items="Python · Scikit-learn · Flask · SQL · Trino · Git" />
          </motion.div>
        </AnimatedSection>

        {/* CONTACT */}
        <AnimatedSection id="contact" className="pb-16">
          <SectionLabel number="04" title="Get in Touch" />
          <div className="pointer-events-auto backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10">
            <p className="text-zinc-400 mb-8 text-[15px] leading-relaxed">
              For website projects, freelance work, or SOC and detection engineering roles —
              reach out through any channel below.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <ContactLink label="WhatsApp" value="Chat directly" href={WHATSAPP_LINK} />
              <ContactLink label="Email" value="prapul.2004@gmail.com" href="mailto:prapul.2004@gmail.com" />
              <ContactLink label="LinkedIn" value="linkedin.com/in/prapul123" href="https://linkedin.com/in/prapul123" />
              <ContactLink label="GitHub" value="github.com/Prapul1" href="https://github.com/Prapul1" />
            </div>
          </div>
        </AnimatedSection>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pointer-events-auto text-center text-zinc-600 text-xs pt-12 pb-6 border-t border-white/5 font-mono tracking-wider"
        >
          © {new Date().getFullYear()} · PRAPUL UPENDRAKUMAR · NEXT2YOU CREATIONS
        </motion.footer>
      </main>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function AnimatedSection({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className={`scroll-mt-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({ number, title }) {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <span className="text-xs font-mono text-zinc-600 tracking-widest">{number}</span>
      <div className="h-px flex-1 bg-white/10" />
      <h2 className="text-sm font-medium text-zinc-300 tracking-[0.2em] uppercase">{title}</h2>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      className="pointer-events-auto backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
    >
      <h3 className="text-base font-semibold mb-2 text-white tracking-tight">{title}</h3>
      <p className="text-[13px] text-zinc-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ProcessStep({ number, title, desc }) {
  return (
    <div>
      <div className="text-xs font-mono text-zinc-600 tracking-widest mb-2">{number}</div>
      <div className="text-sm font-semibold text-white mb-1">{title}</div>
      <div className="text-xs text-zinc-500 leading-relaxed">{desc}</div>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <motion.div
      variants={fadeUp}
      className="pointer-events-auto backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
    >
      <h3 className="text-[13px] font-semibold mb-3 text-white tracking-wide uppercase">{title}</h3>
      <p className="text-[13px] text-zinc-400 leading-relaxed">{items}</p>
    </motion.div>
  );
}

/* ---------- COLLAPSIBLE PROJECT CARD ---------- */
function ProjectCard({ title, link, description, tags }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="pointer-events-auto backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-300"
    >
      {/* Header — always visible, clickable */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 hover:bg-white/[0.03] transition-colors duration-300 group cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold text-white tracking-tight pr-4">
            {title}
          </h3>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-zinc-500 group-hover:text-white transition-colors text-xl leading-none shrink-0 mt-0.5"
          >
            +
          </motion.span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-400 font-mono tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-white/5">
              <p className="text-zinc-400 text-[14px] leading-relaxed mb-4 mt-4">
                {description}
              </p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white hover:text-zinc-300 transition-colors group/link"
              >
                View on GitHub
                <span className="group-hover/link:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ContactLink({ label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="pointer-events-auto flex flex-col p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group"
    >
      <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-2 font-mono">{label}</span>
      <span className="text-white text-sm group-hover:text-zinc-100 truncate">{value}</span>
    </a>
  );
}