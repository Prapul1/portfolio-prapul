"use client";

import ShaderAurora from "@/components/ShaderAurora";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
const WHATSAPP_MSG = "Hi, I'd like to request a quote for a website from Aquila.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
const EMAIL_QUOTE = "mailto:prapul.2004@gmail.com?subject=Website%20Quote%20Request%20-%20Aquila&body=Hi%20Prapul%2C%0A%0AI%27d%20like%20to%20request%20a%20quote%20for%3A%0A%0A-%20Project%20type%3A%20%0A-%20Timeline%3A%20%0A-%20Budget%3A%20%0A%0AThanks!";

export default function Page() {
  return (
    <div
      className="relative min-h-screen bg-black text-white overflow-x-hidden"
      style={{
        fontFamily:
          "'Helvetica Neue', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontWeight: 400,
      }}
    >
      {/* AURORA BACKGROUND — unchanged */}
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

      {/* THIN TOP NAVIGATION — 3 anchor points */}
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
        }}
        className="px-6 sm:px-10 py-6 flex items-center justify-between"
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
          <a href="#services" className="hover:text-white transition-colors">Aquila</a>
          <a href="#security" className="hover:text-white transition-colors">Work</a>
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
        {/* HERO — Full-bleed editorial */}
        <section className="min-h-screen flex flex-col justify-end px-6 sm:px-10 pb-24 pt-40">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Micro caption */}
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
        
            </motion.p>

            {/* Editorial display headline */}
            <motion.h1
              variants={fadeUp}
              className="text-white"
              style={{
                fontFamily:
                  "'Helvetica Neue', ui-sans-serif, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(52px, 14vw, 162px)",
                lineHeight: 0.9,
                letterSpacing: "clamp(-1.2px, -0.024em, -3.89px)",
                marginBottom: "26px",
              }}
            >
              Prapul Upendrakumar.
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-white/70 mb-12"
              style={{
                fontFamily:
                  "'Helvetica Neue', ui-sans-serif, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 6vw, 64px)",
                lineHeight: 1,
                letterSpacing: "clamp(-0.6px, -0.013em, -0.83px)",
              }}
            >
              Security, meet design.
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-white/80 max-w-[600px]"
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: 1.4,
                letterSpacing: "-0.1px",
                fontWeight: 400,
              }}
            >
              SOC analyst with hands-on cloud exposure. Founder of Aquila — a web
              studio building modern websites for businesses worldwide.
            </motion.p>

            {/* Scroll indicator */}
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
            Focused on Security Operations, with hands-on exposure to cloud
            environments and modern security tools.
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-white/70 max-w-[600px]"
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: 1.4,
              letterSpacing: "-0.1px",
            }}
          >
            Founder of Aquila — a web studio building modern websites for
            businesses worldwide. Two disciplines, one obsession with craft.
          </motion.p>
        </EditorialSection>

        {/* AQUILA — Services */}
        <EditorialSection id="services" label="AQUILA" number="(02)" sublabel="Web Studio">
          <motion.h3
            variants={fadeUp}
            className="text-white mb-16 max-w-[1000px]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 5vw, 52px)",
              lineHeight: 1,
              letterSpacing: "clamp(-0.4px, -0.012em, -0.62px)",
            }}
          >
            Websites that make your business look credible online.
          </motion.h3>

          {/* Services — text-only editorial list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="border-t border-white/15"
          >
            <EditorialListItem
              index="A"
              title="Business Websites"
              description="Full multi-page websites for companies, agencies, and service providers — built to convert visitors into customers."
            />
            <EditorialListItem
              index="B"
              title="Portfolio Websites"
              description="Personal-brand and creator portfolios that showcase your work with clean design and smooth interactions."
            />
            <EditorialListItem
              index="C"
              title="Landing Pages"
              description="High-conversion single-page sites for product launches, campaigns, and lead generation."
            />
            <EditorialListItem
              index="D"
              title="Website Redesigns"
              description="Modernize outdated sites with better UX, performance, and SEO — without losing your brand identity."
            />
          </motion.div>

          {/* Process — inline editorial */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-24 pt-12 border-t border-white/15"
          >
            <p className="text-white/50 text-[13px] uppercase mb-10" style={{ letterSpacing: "0.15em" }}>
              How we work
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ProcessLine number="01" title="Discovery" />
              <ProcessLine number="02" title="Design" />
              <ProcessLine number="03" title="Development" />
              <ProcessLine number="04" title="Launch" />
            </div>
          </motion.div>

          {/* CTA — editorial declarative */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-32 pt-16 border-t border-white/15"
          >
            <h4
              className="text-white mb-8 max-w-[800px]"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 5vw, 52px)",
                lineHeight: 1,
                letterSpacing: "clamp(-0.4px, -0.012em, -0.62px)",
              }}
            >
              Have a project in mind?
            </h4>
            <p
              className="text-white/70 mb-10 max-w-[560px]"
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: 1.4,
                letterSpacing: "-0.1px",
              }}
            >
              Free consultation, transparent quotes, no obligations.
            </p>
            <div className="flex flex-wrap gap-8 pointer-events-auto">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[16px] sm:text-[19px] hover:opacity-70 transition-opacity border-b border-white pb-1"
                style={{ letterSpacing: "-0.08px" }}
              >
                WhatsApp ↗
              </a>
              <a
                href={EMAIL_QUOTE}
                className="text-white text-[16px] sm:text-[19px] hover:opacity-70 transition-opacity border-b border-white pb-1"
                style={{ letterSpacing: "-0.08px" }}
              >
                Email ↗
              </a>
            </div>
          </motion.div>
        </EditorialSection>

        {/* SECURITY WORK */}
        <EditorialSection id="security" label="EXPLORE" number="(04)" sublabel="Security Work">
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
            Selected work in detection engineering.
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
              title="AWS Multi-Role Assumption Detection Pipeline"
              link="https://github.com/Prapul1/aws-detection-pipeline"
              description="Real-time serverless detection pipeline (CloudTrail → EventBridge → Lambda → DynamoDB → SNS) that alerts when a user assumes 3+ distinct IAM roles within a 15-minute window, with optional auto-containment. Mapped to MITRE ATT&CK T1078.004 and T1548."
              tags={["AWS", "Lambda", "MITRE ATT&CK", "Serverless"]}
            />
            <ProjectRow
              index="02"
              title="AWS CloudTrail + Athena + Sigma Detection Lab"
              link="https://github.com/Prapul1/aws-cloudtrail-sigma-lab"
              description="Cloud-native SIEM pipeline (S3 → Athena/Trino) over ~2,900 simulated CloudTrail events. Identified multi-role assumption and EC2 abuse patterns; authored two Sigma rules mapped to MITRE ATT&CK Cloud Matrix."
              tags={["AWS", "Athena", "Sigma", "SIEM"]}
            />
            <ProjectRow
              index="03"
              title="Real-Time ML-Based Network Intrusion Detection"
              link="https://github.com/Prapul1/intrusion_detection_system"
              description="End-to-end IDS using Scapy and Scikit-learn to classify live traffic as benign or malicious (DoS, port scans, brute-force), deployed via a Flask + SocketIO real-time alerting dashboard."
              tags={["Python", "ML", "Flask", "Scapy"]}
            />
            <ProjectRow
              index="04"
              title="KQL Threat Investigation — A Scandal in Valdoria"
              link="https://github.com/Prapul1/kc7-valdoria-investigation"
              description="Used KQL across Employees, Email, Authentication, and Process events to trace phishing compromises, PowerShell persistence, SSH C2 tunneling, and document exfiltration. Reconstructed full timeline mapped to MITRE ATT&CK (T1566, T1204, T1053.005, T1572, T1567)."
              tags={["KQL", "Threat Hunting", "MITRE ATT&CK"]}
            />
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-24 pt-12 border-t border-white/15"
          >
            <p className="text-white/50 text-[13px] uppercase mb-10" style={{ letterSpacing: "0.15em" }}>
              Toolkit
            </p>
            <div className="space-y-10 max-w-[1000px]">
              <SkillLine title="Security & Detection" items="IDS/IPS · NIST IR · Cyber Kill Chain · MITRE ATT&CK · Threat Hunting" />
              <SkillLine title="Cloud Security" items="AWS · CloudTrail · Athena · EventBridge · Lambda · IAM · Sigma" />
              <SkillLine title="SIEM & Query" items="Splunk · ELK · Wazuh · KQL · Kusto · Wireshark · Scapy" />
              <SkillLine title="Programming" items="Python · Scikit-learn · Flask · SQL · Trino · Git" />
            </div>
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
            For projects, freelance work, or SOC roles.
          </motion.h3>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 gap-8 sm:gap-12 pointer-events-auto max-w-[900px]"
          >
            <ContactLine label="WhatsApp" value="Chat directly" href={WHATSAPP_LINK} />
            <ContactLine label="Email" value="prapul.2004@gmail.com" href="mailto:prapul.2004@gmail.com" />
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
              © {new Date().getFullYear()} Prapul Upendrakumar · Aquila
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
      {/* Stacked section label */}
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

function EditorialListItem({ index, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      className="py-10 border-b border-white/15 grid grid-cols-12 gap-6 hover:bg-white/[0.02] transition-colors"
    >
      <div className="col-span-1">
        <span
          className="text-white/50 text-[13px] sm:text-[14px]"
          style={{ letterSpacing: "-0.06px" }}
        >
          {index}
        </span>
      </div>
      <div className="col-span-11 sm:col-span-4">
        <h4
          className="text-white"
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
      <div className="col-span-12 sm:col-span-7">
        <p
          className="text-white/70"
          style={{
            fontSize: "clamp(15px, 1.5vw, 17px)",
            lineHeight: 1.5,
            letterSpacing: "-0.06px",
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
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

function ProcessLine({ number, title }) {
  return (
    <div>
      <p
        className="text-white/50 text-[13px] mb-2"
        style={{ letterSpacing: "-0.06px" }}
      >
        {number}
      </p>
      <p
        className="text-white text-[19px] sm:text-[21px]"
        style={{ letterSpacing: "-0.1px", fontWeight: 400 }}
      >
        {title}
      </p>
    </div>
  );
}

function SkillLine({ title, items }) {
  return (
    <div className="grid grid-cols-12 gap-6 pb-6 border-b border-white/10">
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
    </div>
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
