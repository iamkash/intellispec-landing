"use client"

import React from 'react'

import HeroSection from '@/components/sections/HeroSection'
import IndustriesServed from '@/components/sections/IndustriesServed'
import ResultsMetrics from '@/components/sections/ResultsMetrics'
import ContactForm from '@/components/sections/ContactForm'
import ModulesOverview from '@/components/sections/ModulesOverview'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section - Primary Background */}
        <section className="section-parallax parallax-bg section-bg-primary parallax-pattern-1">
          <div className="section-parallax-content">
            <HeroSection />
          </div>
        </section>

        {/* Modules Overview - directly after Hero */}
        <section className="section-parallax parallax-bg section-bg-secondary parallax-pattern-2">
          <div className="section-parallax-content">
            <ModulesOverview />
          </div>
        </section>

        {/* Industries Served - directly after Modules */}
        <section className="section-parallax parallax-bg section-bg-primary parallax-pattern-3">
          <div className="section-parallax-content">
            <IndustriesServed />
          </div>
        </section>

        {/* Solutions Overview
        <section className="section-parallax parallax-bg section-bg-secondary parallax-pattern-4">
          <div className="section-parallax-content">
            <SolutionsOverview />
          </div>
        </section> */}

        {/* Interoperability Section
        <section className="section-parallax parallax-bg section-bg-primary parallax-pattern-5">
          <div className="section-parallax-content">
            <InteroperabilitySection />
          </div>
        </section> */}

        {/* Results Metrics - Secondary Background */}
        <section className="section-parallax parallax-bg section-bg-secondary parallax-pattern-6">
          <div className="section-parallax-content">
            <ResultsMetrics />
          </div>
        </section>

        <LLMReadyBlock
          intent="Platform FAQs"
          renderUI={false}
          showCoreSections={false}
          faq={[
            { q: 'How modular is the platform, and can we start with a few modules first?', a: 'The suite is fully modular. You can start with core modules and add more over time without rework.' },
            { q: 'What is the typical deployment timeline from pilot to multi‑site rollout?', a: 'Pilots go live in 4–6 weeks. Scale site‑by‑site using reusable templates, connectors, and governance.' },
            { q: 'Which systems can we integrate with (CMMS/ERP, SCADA/IoT, LIMS/MES)?', a: 'Standards‑based APIs connect to CMMS/ERP, SCADA/IoT, LIMS/MES, and data warehouses for bidirectional sync.' },
            { q: 'How is data secured and access controlled across teams and contractors?', a: 'Encryption in transit/at rest, SSO, role‑based access controls, least‑privilege policies, and immutable audit logs.' },
            { q: 'Do mobile workflows work offline for field teams?', a: 'Yes. Field users can capture data offline; secure synchronization resumes automatically when connected.' },
            { q: 'Can we configure forms, workflows, and dashboards without custom code?', a: 'Yes. Metadata‑driven configuration supports forms, validations, workflows, dashboards, and automations.' },
            { q: 'How are analytics and dashboards delivered across sites and business units?', a: 'Live KPIs and heatmaps roll up from sites to portfolios with drill‑downs to assets, lines, and units.' },
            { q: 'What export options and data ownership guarantees are provided?', a: 'You retain data ownership. Exports include CSV, Excel, PDF, and secure API access for warehousing.' },
            { q: 'How are CAPA, permits, and approvals orchestrated from findings?', a: 'Findings generate CAPA/PTW with owners, SLAs, routed approvals, e‑signatures, and evidence capture.' },
            { q: 'How does the platform scale globally across regions and tenants?', a: 'Multi‑site and multi‑tenant controls segment data, policies, and access while centralizing governance.' }
          ]}
        />

        <TLDRBlock
          summary={(
            <p>
              IntelliSpec unifies inspections, integrity, workforce, and analytics into a modular platform. Teams get
              mobile-first workflows, AI documentation, predictive maintenance, and real-time visibility—delivering
              faster compliance, higher uptime, and clearer decisions.
            </p>
          )}
          takeaways={[
            'Modular: start with core modules; add more anytime',
            'LLM-ready content structure for better discoverability',
            'Predictive integrity and automated compliance reduce risk',
            'Mobile-first data capture; enterprise security and RBAC',
          ]}
        />

        {/* Storytelling Block - Primary Background */}
        {/* <section className="section-parallax parallax-bg section-bg-primary parallax-pattern-7">
          <div className="section-parallax-content">
            <StorytellingBlock />
          </div>
        </section> */}

        {/* Trusted By Section - Secondary Background */}
        {/* <section className="section-parallax parallax-bg section-bg-secondary parallax-pattern-8">
          <div className="section-parallax-content">
            <TrustedBySection />
          </div>
        </section> */}

        {/* Contact Form - Primary Background */}
        <section className="section-parallax parallax-bg section-bg-primary parallax-pattern-1">
          <div className="section-parallax-content">
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  )
} 