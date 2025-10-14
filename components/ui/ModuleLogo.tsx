import React from 'react'

interface ModuleLogoProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  isScrolled?: boolean
}

const sizeClasses = {
  sm: {
    container: 'flex items-center gap-2',
    icon: 'w-6 h-6',
    text: 'text-sm',
    prefix: 'font-light',
    suffix: 'font-extrabold'
  },
  md: {
    container: 'flex items-center gap-3',
    icon: 'w-8 h-8',
    text: 'text-base',
    prefix: 'font-light',
    suffix: 'font-extrabold'
  },
  lg: {
    container: 'flex items-center gap-3',
    icon: 'w-10 h-10',
    text: 'text-lg',
    prefix: 'font-light',
    suffix: 'font-extrabold'
  }
}

export default function ModuleLogo({ name, size = 'md', isScrolled = false }: ModuleLogoProps) {
  const currentSize = sizeClasses[size]
  
  // Extract prefix (intelli) and suffix (INSPECT, NDT, etc.)
  const prefix = 'intelli'
  const suffix = name.replace(/^intelli/i, '')
  
  // Define appropriate colors for each module based on their function
  const getModuleColor = (moduleName: string) => {
    switch (moduleName) {
      case 'intelliINSPECT':
        return 'text-blue-600' // Blue for inspection/quality
      case 'intelliNDT':
        return 'text-emerald-600' // Green for NDT/testing
      case 'intelliINTEGRITY':
        return 'text-orange-600' // Orange for integrity/maintenance
      case 'intelliTURN':
        return 'text-red-600' // Red for turnarounds/shutdowns
      case 'intelliWORK':
        return 'text-purple-600' // Purple for workforce management
      case 'intelliTRACK':
        return 'text-indigo-600' // Indigo for tracking/location
      case 'intelliCOMPLY':
        return 'text-amber-600' // Amber for compliance/safety
      case 'intelliSAFETY':
        return 'text-rose-600' // Rose for safety/command
      case 'intelliSCAFF':
        return 'text-slate-600' // Slate for scaffolding/security
      case 'intelliVISION':
        return 'text-cyan-600' // Cyan for vision/visualization
      default:
        return 'text-orange-600' // Default orange
    }
  }
  
  return (
    <div className={`${currentSize.container} group transition-all duration-300`}>
      {/* Module Icon - Industrial Next-Gen Style */}
      <div
        className={`${currentSize.icon} bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 border border-slate-600`}
      >
        <div className="font-black text-white tracking-tight text-xs">
          {suffix.slice(0, 2).toUpperCase()}
        </div>
      </div>
      
      {/* Module Name */}
      <div className={`${currentSize.text} font-medium text-slate-900`}>
        <span className={currentSize.prefix}>{prefix}</span>
        <span className={`${currentSize.suffix} ${getModuleColor(name)} font-bold`}>{suffix}</span>
      </div>
    </div>
  )
} 