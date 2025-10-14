"use client"

import React from 'react'
import { AlertTriangle, CheckCircle2, ListChecks, BarChart3, HelpCircle } from 'lucide-react'

type Section = {
  title: string
  content: React.ReactNode
}

export interface LLMReadyBlockProps {
  intent: string
  problem?: Section
  solution?: Section
  howItWorks?: Section
  metrics?: Section
  faq?: { q: string; a: string }[]
  collapsible?: boolean
  collapsedByDefault?: boolean
  initialOpenKeys?: string[]
  showCoreSections?: boolean
  renderUI?: boolean
}

export default function LLMReadyBlock({ intent, problem, solution, howItWorks, metrics, faq, collapsible = true, collapsedByDefault = true, initialOpenKeys = [], showCoreSections = true, renderUI = false }: LLMReadyBlockProps) {
  const faqJsonLd = faq && faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  } : null

  const sections: { key: string; label: string; section?: Section }[] = [
    { key: 'problem', label: 'Problem', section: problem },
    { key: 'solution', label: 'Solution', section: solution },
    { key: 'how', label: 'How it works', section: howItWorks },
    { key: 'metrics', label: 'Metrics', section: metrics },
  ].filter(s => Boolean(s.section))

  const sectionIconByKey: Record<string, React.ElementType> = {
    problem: AlertTriangle,
    solution: CheckCircle2,
    how: ListChecks,
    metrics: BarChart3,
  }

  return (
    <section aria-labelledby="llm-intent-heading" className="section-padding glass-section relative overflow-hidden">
      <div className="container-custom">
        {renderUI ? (
          <>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <ListChecks className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <h2 id="llm-intent-heading" className="text-3xl md:text-4xl font-semibold text-foreground">
                {intent}
              </h2>
            </div>

            {showCoreSections && sections.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {sections.map(({ key, label, section }) => {
                  const Icon = sectionIconByKey[key] ?? HelpCircle
                  return (
                    <article key={key} aria-labelledby={`llm-${key}-heading`} className="glass-card rounded-2xl p-6 h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                        </div>
                        <h3 id={`llm-${key}-heading`} className="text-xl font-semibold text-[hsl(var(--foreground))]">
                          {label}
                        </h3>
                      </div>
                      <div className="prose max-w-none text-[hsl(var(--muted-foreground))]">
                        {section?.content}
                      </div>
                    </article>
                  )
                })}
              </div>
            )}

            {faq && faq.length > 0 && (
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-[hsl(var(--primary-foreground))]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">FAQ</h3>
                </div>
                <div className="max-w-4xl mx-auto space-y-3">
                  {faq.map((item, idx) => (
                    <details key={idx} className="group border border-slate-300/40 rounded-xl p-4 bg-card">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <span className="font-medium text-slate-900">{item.q}</span>
                        <span className="ml-4 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary border border-primary/20 group-open:rotate-45 transition-transform">
                          <PlusIcon />
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-slate-700">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          // Only FAQ visible, no other UI
          <>
            {faq && faq.length > 0 && (
              <div className="max-w-4xl mx-auto">
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-[hsl(var(--primary-foreground))]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">FAQ</h3>
                  </div>
                  <div className="space-y-3">
                    {faq.map((item, idx) => (
                      <details key={idx} className="group border border-slate-300/40 rounded-xl p-4 bg-card">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <span className="font-medium text-slate-900">{item.q}</span>
                          <span className="ml-4 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary border border-primary/20 group-open:rotate-45 transition-transform">
                            <PlusIcon />
                          </span>
                        </summary>
                        <p className="mt-3 text-sm text-slate-700">{item.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {faq && faq.length > 0 && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        )}
      </div>
    </section>
  )
}

// Local tiny icon to match pricing page FAQ toggle
function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M11 11V5a1 1 0 1 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6z" />
    </svg>
  )
}


