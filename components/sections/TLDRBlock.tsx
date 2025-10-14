"use client"

import React from 'react'
import { Sparkles, CheckCircle2 } from 'lucide-react'

export interface TLDRBlockProps {
  title?: string
  summary: React.ReactNode
  takeaways: string[]
  headingIcon?: React.ElementType
  collapsible?: boolean
  collapsedByDefault?: boolean
}

export default function TLDRBlock({ title = 'TL;DR', summary, takeaways, headingIcon, collapsible = true, collapsedByDefault = true }: TLDRBlockProps) {
  const HeadingIcon = headingIcon ?? Sparkles
  return (
    <section aria-label="TLDR and Key Takeaways" className="section-padding glass-section relative overflow-hidden">
      <div className="container-custom">
        <div className="glass-card rounded-2xl p-6">
          {collapsible ? (
            <details open={!collapsedByDefault}>
              <summary className="flex items-center gap-3 mb-4 cursor-pointer list-none">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <HeadingIcon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{title}</h2>
              </summary>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {summary}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Key takeaways</h3>
                  <ul className="space-y-3">
                    {takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                        </span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <HeadingIcon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{title}</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {summary}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Key takeaways</h3>
                  <ul className="space-y-3">
                    {takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                        </span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
