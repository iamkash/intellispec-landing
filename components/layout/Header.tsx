'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight, Target } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/Logo'

import { navigation } from '@/components/layout/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Subtle high-end motion curves and variants for the mega menu
  const panelVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { opacity: 0, y: 8, transition: { duration: 0.15 } }
  }

  const columnVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.18 } }
  }

  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } }
  }

  const closeMenus = useCallback(() => {
    setActiveDropdown(null)
    setIsOpen(false)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 glass-nav">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Logo isScrolled={isScrolled} showTagline={true} size="md" />



          {/* Desktop Navigation + CTA grouped to avoid large gaps */}
          <div className="hidden lg:flex items-center gap-2">
          <nav className="flex items-center gap-2">
            {navigation.map((item, index) => (
              <motion.div
                key={item.label}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.children ? (
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-colors duration-200 font-medium text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.icon && <item.icon className="w-5 h-5 transition-transform duration-300" />}
                    <span>{item.label}</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                ) : (
                  item.label === 'Pricing' ? (
                    <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] border-0 shadow-sm hover:shadow-md font-semibold text-sm px-4 py-2 rounded-lg">
                      <Link href={item.href || '#'} onClick={closeMenus}>
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-colors duration-200 font-medium text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5"
                      onClick={closeMenus}
                    >
                        {item.icon && <item.icon className="w-5 h-5 transition-transform duration-300" />}
                        <span>{item.label}</span>
                    </Link>
                  )
                )}

                {/* Enhanced Three-Column Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-x-0 top-[56px] lg:top-[64px] z-50"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="relative mx-auto w-[96vw] md:w-[90vw] lg:w-[80vw] px-4 sm:px-6 lg:px-10 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] shadow-lg overflow-hidden">
                          {/* Header */}
                          <div className="py-5 border-b border-[hsl(var(--border))]">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                {item.icon && (
                                  <div className="w-12 h-12 bg-[hsl(var(--muted))]/20 rounded-lg flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                                  </div>
                                )}
                                <div>
                                  <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">{item.label}</h3>
                                  <p className="text-base text-[hsl(var(--muted-foreground))]">{item.description}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Three Column Content */}
                          <motion.div
                            variants={gridVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-3 gap-0"
                          >
                            {item.children.map((column, colIndex) => (
                              <motion.div
                                variants={columnVariants}
                                key={column.label}
                                className={`px-6 py-6 ${colIndex !== item.children.length - 1 ? 'border-r border-[hsl(var(--border))]' : ''}`}
                              >
                                <h4 className="text-sm font-semibold text-[hsl(var(--foreground))] uppercase tracking-wide mb-4">
                                  {column.label}
                                </h4>
                                <div className="space-y-2">
                                  {column.children?.map((child, childIndex) => (
                                    <motion.div
                                      variants={itemVariants}
                                      key={child.label}
                                    >
                          <Link
                            href={child.href || '#'}
                                      className="group flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors duration-200 hover:bg-[hsl(var(--muted))]/40"
                                      onClick={closeMenus}
                                    >
                                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[hsl(var(--muted))]/50 text-[hsl(var(--muted-foreground))] group-hover:bg-[hsl(var(--primary))]/10 group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                                        {child.icon && <child.icon className="w-5 h-5" />}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2">
                                          <span className="font-medium text-base text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                            {child.labelParts ? (
                              <>
                                {child.labelParts.prefix}<span className="font-bold">{child.labelParts.suffix}</span>
                              </>
                            ) : child.label}
                                          </span>
                                        </div>
                                        {child.description && (
                                          <p className="text-sm lg:text-base text-[hsl(var(--muted-foreground))] mt-1 group-hover:text-[hsl(var(--foreground))]/80 transition-colors">
                                            {child.description}
                                          </p>
                                        )}
                                      </div>
                                      <ChevronRight className="w-5 h-5 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-200" />
                          </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>

            <Button asChild className="ml-1 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] border-0 shadow-md hover:shadow-lg font-semibold text-base px-4 py-2.5 rounded-lg">
              <Link href="/demo">
                <span>Book a Demo</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              className="p-2 transition-colors duration-200 drop-shadow-md rounded-lg text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:hidden rounded-xl mt-4 shadow-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] overflow-hidden"
            >
              {/* Mobile Header */}
              <div className="px-5 py-4 border-b border-[hsl(var(--border))]">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[hsl(var(--muted))]/20 rounded-md flex items-center justify-center">
                    <Target className="w-4 h-4 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[hsl(var(--foreground))]">Navigation</h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Explore IntelliSpec</p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {item.children ? (
                      <div className="space-y-2">
                        <motion.button
                          className="w-full flex items-center justify-between px-4 py-3 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-all duration-300 rounded-xl hover:bg-[hsl(var(--primary))]/5 group"
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon && (
                              <div className="w-8 h-8 bg-[hsl(var(--muted))]/50 rounded-lg flex items-center justify-center group-hover:bg-[hsl(var(--primary))]/10 transition-colors">
                                <item.icon className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))]" />
                              </div>
                            )}
                            <span className="font-semibold text-lg">{item.label}</span>
                          </div>
                          <motion.div
                            animate={{ rotate: activeDropdown === item.label ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-5 h-5 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))]" />
                          </motion.div>
                        </motion.button>

                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, y: -10 }}
                              animate={{ opacity: 1, height: 'auto', y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -10 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="bg-[hsl(var(--muted))]/30 rounded-xl ml-4 overflow-hidden"
                            >
                              {item.children.map((column, colIndex) => (
                                <div key={column.label} className="border-b border-[hsl(var(--border))]/50 last:border-b-0">
                                  <div className="px-4 py-2">
                                    <h4 className="text-base font-bold text-[hsl(var(--primary))] uppercase tracking-wider">
                                      {column.label}
                                    </h4>
                                  </div>
                                  {column.children?.map((child, childIndex) => (
                                    <motion.div
                                      key={child.label}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.2, delay: childIndex * 0.03 }}
                                    >
                                <Link
                                  href={child.href || '#'}
                                        className="flex items-center space-x-3 px-6 py-3 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary))]/5 transition-all duration-200 group"
                                  onClick={closeMenus}
                                >
                                        {child.icon && (
                                          <div className="w-6 h-6 bg-[hsl(var(--muted))]/50 rounded-lg flex items-center justify-center group-hover:bg-[hsl(var(--primary))]/10 transition-colors">
                                            <child.icon className="w-3 h-3" />
                                          </div>
                                        )}
                                        <div>
                                          <span className="text-base font-semibold">
                                            {child.labelParts ? (
                                              <>
                                                {child.labelParts.prefix}<span className="font-bold">{child.labelParts.suffix}</span>
                                              </>
                                            ) : child.label}
                                          </span>
                                          {child.description && (
                                            <p className="text-sm text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))]/70">
                                              {child.description}
                                            </p>
                                          )}
                                        </div>
                                </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.div whileTap={{ scale: 0.98 }}>
                      <Link
                        href={item.href || '#'}
                          className="flex items-center space-x-3 px-4 py-3 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-all duration-300 rounded-xl hover:bg-[hsl(var(--primary))]/5 group"
                        onClick={closeMenus}
                      >
                          {item.icon && (
                            <div className="w-8 h-8 bg-[hsl(var(--muted))]/50 rounded-lg flex items-center justify-center group-hover:bg-[hsl(var(--primary))]/10 transition-colors">
                              <item.icon className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))]" />
                            </div>
                          )}
                          <span className="font-medium">{item.label}</span>
                      </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  className="pt-6 border-t border-[hsl(var(--border))]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Button asChild className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] border-0 font-semibold text-base py-3 rounded-lg shadow-md">
                    <Link href="/demo" onClick={() => setIsOpen(false)}>
                      <span>Book a Demo</span>
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 