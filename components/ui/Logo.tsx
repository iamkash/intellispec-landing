'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  isScrolled?: boolean
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ isScrolled = false, showTagline = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: {
      height: 32,
      width: 140
    },
    md: {
      height: 40,
      width: 180
    },
    lg: {
      height: 48,
      width: 220
    }
  }

  const currentSize = sizeClasses[size]

  return (
    <Link href="/" className="flex items-center group transition-all duration-300">
      <div className="relative">
        <Image
          src="/images/logos/light-logo.png"
          alt="IntelliSpec - Where Data Meets Ingenuity"
          width={currentSize.width}
          height={currentSize.height}
          className="transition-all duration-300 group-hover:scale-105"
          priority
        />
      </div>
    </Link>
  )
} 