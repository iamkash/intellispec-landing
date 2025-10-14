"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search,
  Database,
  Factory,
  FileText,
  Users,
  ArrowRight,
  ChevronUp
} from 'lucide-react'

import Link from 'next/link'
import { footerLinks } from '@/components/layout/footerLinks'

type CategoryKey = keyof typeof footerLinks

const categories: { key: CategoryKey; title: string; description: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'solutions', title: 'Products', description: 'Complete platform modules.', icon: Database },
  { key: 'industries', title: 'Industries', description: 'Sector expertise and use cases.', icon: Factory },
  { key: 'resources', title: 'Resources', description: 'Learn & explore: articles and news.', icon: FileText },
  { key: 'company', title: 'Company', description: 'About, careers, partners, and support.', icon: Users },
]

export default function ResourcesPage() {
  const [query, setQuery] = useState('')
  const [activeKey, setActiveKey] = useState<CategoryKey>('solutions')
  const [showTop, setShowTop] = useState(false)
  const searchRef = useRef<HTMLInputElement | null>(null)

  const filteredByCategory = useMemo(() => {
    const q = query.trim().toLowerCase()
    return categories.map(cat => ({
      ...cat,
      items: footerLinks[cat.key]
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter(item => {
        const name = item.name.toLowerCase()
        const composed = item.nameParts ? `${item.nameParts.prefix}${item.nameParts.suffix}`.toLowerCase() : ''
        return !q || name.includes(q) || composed.includes(q)
      })
    }))
  }, [query])

  const totalCount = useMemo(() => filteredByCategory.reduce((acc, c) => acc + c.items.length, 0), [filteredByCategory])

  // Scroll spy and top button
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY
      setShowTop(scrollY > 400)
      let current: CategoryKey = 'solutions'
      for (const cat of categories) {
        const el = document.getElementById(cat.key)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = cat.key
          break
        }
      }
      setActiveKey(current)
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Keyboard shortcut for focusing search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchRef.current) {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const highlight = (text: string) => {
    const q = query.trim()
    if (!q) return text
    const idx = text.toLowerCase().indexOf(q.toLowerCase())
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <mark className="bg-yellow-200/60 rounded px-0.5">{text.slice(idx, idx + q.length)}</mark>
        {text.slice(idx + q.length)}
      </>
    )
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-20 pb-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                Explore <span className="gradient-text">All Resources</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600">
                Curated links from our site footer. Search and browse by category.
              </p>
            </motion.div>

            {/* Search */}
            <div className="max-w-3xl mx-auto mt-8">
              <label htmlFor="resource-search" className="sr-only">Search resources</label>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-primary/30">
                <Search className="w-5 h-5 text-slate-400" aria-hidden="true" />
                <input
                  id="resource-search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search links, modules, or industries..."
                  className="flex-1 bg-transparent outline-none text-slate-900 placeholder-slate-400"
                  aria-label="Search resources"
                  ref={searchRef}
                />
                <span className="text-xs text-slate-500 whitespace-nowrap">{totalCount} result{totalCount === 1 ? '' : 's'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky category nav */}
        <div className="sticky top-16 z-30 bg-gradient-to-b from-white/70 to-transparent backdrop-blur-md border-y border-slate-200/40">
          <nav className="container-custom py-3 overflow-x-auto" aria-label="Resources categories">
            <ul className="flex items-center gap-2">
              {filteredByCategory.map(cat => (
                <li key={cat.key} className="shrink-0">
                  <a href={`#${cat.key}`} className={`group inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200/60 bg-white/70 hover:bg-white:bg-slate-800 transition-colors ${activeKey === cat.key ? 'ring-2 ring-primary/30' : ''}`}>
                    <cat.icon className="w-4 h-4 text-slate-500 group-hover:text-slate-700:text-slate-200" aria-hidden="true" />
                    <span className="text-sm text-slate-700">{cat.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">{cat.items.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Sections */}
        <section className="py-12">
          <div className="container-custom">
            {filteredByCategory.map((cat, idx) => (
              <div id={cat.key} key={cat.key} className={idx > 0 ? 'pt-8 md:pt-12' : ''}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 md:mb-8 flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200/60">
                    <cat.icon className="w-5 h-5 text-slate-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{cat.title}</h2>
                    <p className="text-slate-600">{cat.description}</p>
                  </div>
                </motion.div>

                {cat.items.length === 0 ? (
                  <p className="text-slate-500 italic mb-10">No matches in this category.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {cat.items.map(item => (
                      <Link key={`${cat.key}-${item.name}`} href={item.href} aria-label={`${cat.title}: ${item.name}`}>
                        <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 min-w-0">
                              {item.icon && (
                                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200/60 shrink-0">
                                  <item.icon className="w-5 h-5 text-slate-600" aria-hidden="true" />
                                </div>
                              )}
                              <h3 className="text-lg font-medium text-slate-900 truncate">
                                {item.nameParts ? (
                                  <>
                                    {highlight(item.nameParts.prefix)}
                                    <span className="font-bold">{highlight(item.nameParts.suffix) as any}</span>
                                  </>
                                ) : highlight(item.name)}
                              </h3>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600:text-slate-300 transition-colors" aria-hidden="true" />
                          </div>
                          <p className="text-sm text-slate-600 mt-1">{cat.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                <div className="h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent my-6"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Back to top */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg bg-slate-900 text-white hover:opacity-90 transition-opacity"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
            <span className="text-sm">Top</span>
          </button>
        )}

      </main>
    </>
  )
}