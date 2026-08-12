"use client";

import ShaderAurora from "@/components/ShaderAurora";
import FlickerPortrait from "@/components/FlickerPortrait";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const WHATSAPP_NUMBER = "916363606347";
const WHATSAPP_MSG = "Hi Prapul, I'd like to get in touch.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-black text-white overflow-x-hidden"
      style={{
        fontFamily:
          "'Helvetica Neue', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontWeight: 400,
      }}
    >
      {/* AURORA BACKGROUND */}
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

      {/* THIN TOP NAVIGATION */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          pointerEvents: "none",
          background: scrolled ? "rgba(0, 0, 0, 0.55)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
        }}
        className="px-6 sm:px-10 py-4 sm:py-5 flex items-center justify-between"
      >
        <a
          href="#"
          className="pointer-events-auto text-[13px] sm:text-[14px] font-normal text-white hover:opacity-70 transition-opacity"
          style={{ letterSpacing: "-0.06px" }}
        >
          Prapul Upendrakumar
        </a>

        <div className="hidden md:flex gap-8 text-[14px] font-normal text-white/80 pointer-events-auto" style={{ letterSpacing: "-0.06px" }}>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#toolkit" className="hover:text-white transition-colors">Toolkit</a>
          <a href="#building" className="hover:text-white transition-colors">Building</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <a
          href="#contact"
          className="pointer-events-auto text-[13px] sm:text-[14px] font-normal text-white hover:opacity-70 transition-opacity"
          style={{ letterSpacing: "-0.06px" }}
        >
          Get in touch ↗
        </a>
      </motion.nav>

      {/* CONTENT */}
      <main
        style={{ position: "relative", zIndex: 10, pointerEvents: "none" }}
        className="max-w-[1400px] mx-auto"
      >
        {/* HERO — Full-bleed portrait background */}
        <section className="min-h-screen relative overflow-hidden">
          
          {/* Big background portrait — right-anchored, full height */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 5 }}
          >
            <div
              className="absolute h-full"
              style={{
                right: "0",
                top: "0",
                width: "min(60vw, 900px)",
                height: "100vh",
              }}
            >
              <FlickerPortrait
                src="/prapulimage.png"
                alt="Prapul Upendrakumar"
                priority
              />
            </div>

            {/* Subtle gradient to help text readability on left */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)",
              }}
            />
          </div>

          {/* Hero content — floats on top */}
          <div className="relative min-h-screen flex flex-col justify-end px-6 sm:px-10 pb-24 pt-40" style={{ zIndex: 10 }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-[720px]"
            >
              <motion.p
                variants={fadeUp}
                className="mb-8 text-white/60"
                style={{
                  fontFamily: "'Times', serif",
                  fontSize: "13px",
                  lineHeight: 1.2,
                  fontStyle: "italic",
                }}
              >
                Bengaluru — 2026
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-white"
                style={{
                  fontFamily: "'Helvetica Neue', ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(52px, 12vw, 140px)",
                  lineHeight: 0.9,
                  letterSpacing: "clamp(-1.2px, -0.024em, -3.5px)",
                  marginBottom: "26px",
                }}
              >
                Prapul Upendrakumar.
              </motion.h1>

              <motion.h2
                variants={fadeUp}
                className="text-white/80 mb-12"
                style={{
                  fontFamily: "'Helvetica Neue', ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 5vw, 56px)",
                  lineHeight: 1,
                  letterSpacing: "clamp(-0.6px, -0.013em, -0.75px)",
                }}
              >
                Turning noise into signals.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-white/80 max-w-[560px]"
                style={{
                  fontSize: "clamp(17px, 2vw, 21px)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.1px",
                  fontWeight: 400,
                }}
              >
                SOC analyst focused on detection engineering, threat hunting,
                and cloud security — with hands-on exposure to AI-assisted
                log analysis and SIEM investigations.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-20 text-white/60 pointer-events-auto"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "-0.06px",
                }}
              >
                <a href="#about" className="hover:text-white transition-colors">
                  Scroll ↓
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <EditorialSection id="about" label="ABOUT" number="(01)" sublabel="Introduction">
          <motion.h3
            variants={fadeUp}
            className="text-white mb-10 max-w-[900px]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 5vw, 52px)",
              lineHeight: 1,
              letterSpacing: "clamp(-0.4px, -0.012em, -0.62px)",
            }}
          >
            Focused on Security Operations, with hands-on exposure to
            cloud environments and modern security tools.
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-white/70 max-w-[620px]"
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: 1.4,
              letterSpacing: "-0.1px",
            }}
          >
            My work spans detection engineering on AWS, SIEM investigations,
            ML-based intrusion detection, and hands-on labs exploring
            LLM-assisted security workflows.
          </motion.p>
        </EditorialSection>

        {/* SECURITY WORK */}
        <EditorialSection id="work" label="EXPLORE" number="(02)" sublabel="Selected Work">
          <motion.h3
            variants={fadeUp}
            className="text-white mb-16 max-w-[900px]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 5vw, 52px)",
              lineHeight: 1,
              letterSpacing: "clamp(-0.4px, -0.012em, -0.62px)",
            }}
          >
            Selected work in detection engineering and SOC research.
          </motion.h3>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="border-t border-white/15"
          >
            <ProjectRow
              index="01"
              title="AI-Powered Security Log Analysis"
              link="https://github.com/Prapul1/AI-in-soc-investigation"
              description="A hands-on SOC lab exploring how prompting strategy affects the quality of AI-assisted security log analysis — comparing a single general-purpose prompt against specialized, role-based prompts across IDS, SIEM, and firewall log sources. Core question: is it more effective to feed an LLM all security logs at once with one general prompt, or to use specialized role-based prompts tailored to each log source?"
              tags={["LLM", "SOC", "SIEM", "Prompt Engineering"]}
            />
            <ProjectRow
              index="02"
              title="AWS Multi-Role Assumption Detection Pipeline"
              link="https://github.com/Prapul1/aws-detection-pipeline"
              description="Real-time serverless detection pipeline (CloudTrail → EventBridge → Lambda → DynamoDB → SNS) that alerts when a user assumes 3+ distinct IAM roles within a 15-minute window, with optional auto-containment. Mapped to MITRE ATT&CK T1078.004 and T1548."
              tags={["AWS", "Lambda", "MITRE ATT&CK", "Serverless"]}
            />
            <ProjectRow
              index="03"
              title="AWS CloudTrail + Athena + Sigma Detection Lab"
              link="https://github.com/Prapul1/aws-cloudtrail-sigma-lab"
              description="Cloud-native SIEM pipeline (S3 → Athena/Trino) over ~2,900 simulated CloudTrail events. Identified multi-role assumption and EC2 abuse patterns; authored two Sigma rules mapped to MITRE ATT&CK Cloud Matrix."
              tags={["AWS", "Athena", "Sigma", "SIEM"]}
            />
            <ProjectRow
              index="04"
              title="Real-Time ML-Based Network Intrusion Detection"
              link="https://github.com/Prapul1/intrusion_detection_system"
              description="End-to-end IDS using Scapy and Scikit-learn to classify live traffic as benign or malicious (DoS, port scans, brute-force), deployed via a Flask + SocketIO real-time alerting dashboard."
              tags={["Python", "ML", "Flask", "Scapy"]}
            />
            <ProjectRow
              index="05"
              title="KQL Threat Investigation — A Scandal in Valdoria"
              link="https://github.com/Prapul1/kc7-valdoria-investigation"
              description="Used KQL across Employees, Email, Authentication, and Process events to trace phishing compromises, PowerShell persistence, SSH C2 tunneling, and document exfiltration. Reconstructed full timeline mapped to MITRE ATT&CK (T1566, T1204, T1053.005, T1572, T1567)."
              tags={["KQL", "Threat Hunting", "MITRE ATT&CK"]}
            />
          </motion.div>
        </EditorialSection>

        {/* TOOLKIT */}
        <EditorialSection id="toolkit" label="TOOLKIT" number="(03)" sublabel="Skills & Stack">
          <motion.h3
            variants={fadeUp}
            className="text-white mb-16 max-w-[900px]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 5vw, 52px)",
              lineHeight: 1,
              letterSpacing: "clamp(-0.4px, -0.012em, -0.62px)",
            }}
          >
            Tools and technologies I work with.
          </motion.h3>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-10 max-w-[1100px]"
          >
            <SkillLine title="Security & Detection" items="IDS/IPS · NIST IR · Cyber Kill Chain · MITRE ATT&CK · Threat Hunting" />
            <SkillLine title="Cloud Security" items="AWS · CloudTrail · Athena · EventBridge · Lambda · IAM · Sigma" />
            <SkillLine title="SIEM & Query" items="Splunk · ELK · Wazuh · KQL · Kusto · Wireshark · Scapy" />
            <SkillLine title="AI & Analysis" items="LLM Prompt Engineering · Log Analysis · Scikit-learn · Model Evaluation" />
            <SkillLine title="Programming" items="Python · Flask · SQL · Trino · Git · Linux" />
            <SkillLine title="Web Development" items="React · Next.js · Tailwind · Framer Motion · Vercel" />
          </motion.div>
        </EditorialSection>

        {/* ALSO BUILDING */}
        <EditorialSection id="building" label="ALSO BUILDING" number="(04)" sublabel="Web Experiences">
          <motion.h3
            variants={fadeUp}
            className="text-white mb-10 max-w-[900px]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 5vw, 52px)",
              lineHeight: 1,
              letterSpacing: "clamp(-0.4px, -0.012em, -0.62px)",
            }}
          >
            Beyond security, I build modern web experiences.
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-white/70 mb-16 max-w-[600px]"
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: 1.4,
              letterSpacing: "-0.1px",
            }}
          >
            Personal projects exploring design systems, motion, and shaders
            with Next.js, React, and Framer Motion.
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="border-t border-white/15"
          >
            <WebProjectRow
              index="A"
              title="This Portfolio"
              subtitle="Editorial design · WebGL aurora shader"
              stack="Next.js · Framer Motion · WebGL"
              link="#"
              status="You're here"
            />
            <WebProjectRow
              index="B"
              title="Clinic Website Demo"
              subtitle="Silk shader · Apple-style spring animations"
              stack="Next.js · Three.js · Motion"
              link="https://clinic-demo-zeta-two.vercel.app"
            />
            <WebProjectRow
              index="C"
              title="Coaching Institute Demo"
              subtitle="ShapeGrid canvas · Editorial layout"
              stack="Next.js · Canvas API · Tailwind"
              link="https://institute-demo-mauve.vercel.app"
            />
          </motion.div>
        </EditorialSection>

        {/* CONTACT */}
        <EditorialSection id="contact" label="CONTACT" number="(05)" sublabel="Get in Touch">
          <motion.h3
            variants={fadeUp}
            className="text-white mb-16 max-w-[900px]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 5vw, 52px)",
              lineHeight: 1,
              letterSpacing: "clamp(-0.4px, -0.012em, -0.62px)",
            }}
          >
            Open to SOC, detection engineering, and threat research roles.
          </motion.h3>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 gap-8 sm:gap-12 pointer-events-auto max-w-[900px]"
          >
            <ContactLine label="Email" value="prapul.2004@gmail.com" href="mailto:prapul.2004@gmail.com" />
            <ContactLine label="WhatsApp" value="Chat directly" href={WHATSAPP_LINK} />
            <ContactLine label="LinkedIn" value="linkedin.com/in/prapul123" href="https://linkedin.com/in/prapul123" />
            <ContactLine label="GitHub" value="github.com/Prapul1" href="https://github.com/Prapul1" />
          </motion.div>
        </EditorialSection>

        {/* FOOTER */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pointer-events-auto px-6 sm:px-10 py-16 border-t border-white/10 mt-20"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-6">
            <p
              className="text-white/50 text-[13px]"
              style={{ letterSpacing: "-0.06px" }}
            >
              © {new Date().getFullYear()} Prapul Upendrakumar
            </p>
            <p
              className="text-white/50 text-[13px]"
              style={{ letterSpacing: "-0.06px" }}
            >
              Bengaluru, India
            </p>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}

/* ---------- EDITORIAL COMPONENTS ---------- */

function EditorialSection({ id, label, number, sublabel, children }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUp}
      className="px-6 sm:px-10 py-32 sm:py-48 scroll-mt-24"
    >
      <div className="mb-20 sm:mb-24">
        <p
          className="text-white text-[14px] sm:text-[16px]"
          style={{ letterSpacing: "-0.06px", lineHeight: 1.6 }}
        >
          {label}
        </p>
        <p
          className="text-white/50 text-[14px] sm:text-[16px]"
          style={{ letterSpacing: "-0.06px", lineHeight: 1.6 }}
        >
          {number}
        </p>
        <p
          className="text-white/50 text-[14px] sm:text-[16px]"
          style={{ letterSpacing: "-0.06px", lineHeight: 1.6 }}
        >
          {sublabel}
        </p>
      </div>
      {children}
    </motion.section>
  );
}

function ProjectRow({ index, title, link, description, tags }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="border-b border-white/15 pointer-events-auto"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-10 grid grid-cols-12 gap-6 hover:bg-white/[0.02] transition-colors cursor-pointer group"
      >
        <div className="col-span-1">
          <span
            className="text-white/50 text-[13px] sm:text-[14px]"
            style={{ letterSpacing: "-0.06px" }}
          >
            {index}
          </span>
        </div>
        <div className="col-span-10 sm:col-span-8">
          <h4
            className="text-white group-hover:text-white/80 transition-colors"
            style={{
              fontSize: "clamp(19px, 2.5vw, 28px)",
              lineHeight: 1.1,
              letterSpacing: "-0.3px",
              fontWeight: 400,
            }}
          >
            {title}
          </h4>
        </div>
        <div className="col-span-1 sm:col-span-3 flex justify-end items-start">
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-white/50 group-hover:text-white text-2xl leading-none"
          >
            +
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 grid grid-cols-12 gap-6">
              <div className="col-span-1" />
              <div className="col-span-12 sm:col-span-8">
                <p
                  className="text-white/70 mb-6"
                  style={{
                    fontSize: "clamp(15px, 1.5vw, 17px)",
                    lineHeight: 1.5,
                    letterSpacing: "-0.06px",
                  }}
                >
                  {description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-white/50 text-[13px]"
                      style={{ letterSpacing: "-0.06px" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[16px] hover:opacity-70 transition-opacity border-b border-white pb-1 inline-block"
                  style={{ letterSpacing: "-0.06px" }}
                >
                  View on GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function WebProjectRow({ index, title, subtitle, stack, link, status }) {
  return (
    <motion.a
      variants={fadeUp}
      href={link}
      target={status ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="py-10 border-b border-white/15 grid grid-cols-12 gap-6 hover:bg-white/[0.02] transition-colors cursor-pointer group pointer-events-auto"
    >
      <div className="col-span-1">
        <span
          className="text-white/50 text-[13px] sm:text-[14px]"
          style={{ letterSpacing: "-0.06px" }}
        >
          {index}
        </span>
      </div>
      <div className="col-span-11 sm:col-span-5">
        <h4
          className="text-white group-hover:text-white/80 transition-colors mb-2"
          style={{
            fontSize: "clamp(19px, 2.5vw, 28px)",
            lineHeight: 1.1,
            letterSpacing: "-0.3px",
            fontWeight: 400,
          }}
        >
          {title}
        </h4>
        <p className="text-white/60 text-[14px] sm:text-[15px]" style={{ letterSpacing: "-0.06px" }}>
          {subtitle}
        </p>
      </div>
      <div className="col-span-12 sm:col-span-5">
        <p
          className="text-white/50 text-[13px] sm:text-[14px] mb-2"
          style={{ letterSpacing: "-0.06px" }}
        >
          {stack}
        </p>
      </div>
      <div className="col-span-12 sm:col-span-1 flex justify-start sm:justify-end items-start">
        {status ? (
          <span className="text-white/40 text-[13px] italic" style={{ fontFamily: "'Times', serif" }}>
            {status}
          </span>
        ) : (
          <motion.span
            whileHover={{ x: 3, y: -3 }}
            className="text-white/50 group-hover:text-white text-xl leading-none"
          >
            ↗
          </motion.span>
        )}
      </div>
    </motion.a>
  );
}

function SkillLine({ title, items }) {
  return (
    <motion.div variants={fadeUp} className="grid grid-cols-12 gap-6 pb-6 border-b border-white/10">
      <div className="col-span-12 sm:col-span-3">
        <h4
          className="text-white"
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            letterSpacing: "-0.1px",
            fontWeight: 400,
          }}
        >
          {title}
        </h4>
      </div>
      <div className="col-span-12 sm:col-span-9">
        <p
          className="text-white/60"
          style={{
            fontSize: "clamp(15px, 1.5vw, 17px)",
            lineHeight: 1.5,
            letterSpacing: "-0.06px",
          }}
        >
          {items}
        </p>
      </div>
    </motion.div>
  );
}

function ContactLine({ label, value, href }) {
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-6 border-b border-white/15 hover:border-white/40 transition-colors"
    >
      <p
        className="text-white/50 text-[13px] mb-2 uppercase"
        style={{ letterSpacing: "0.15em" }}
      >
        {label}
      </p>
      <p
        className="text-white group-hover:opacity-70 transition-opacity flex items-center gap-2"
        style={{
          fontSize: "clamp(19px, 2.5vw, 28px)",
          letterSpacing: "-0.3px",
          fontWeight: 400,
        }}
      >
        {value}
        <span className="text-white/40 group-hover:translate-x-1 transition-transform">↗</span>
      </p>
    </motion.a>
  );
}