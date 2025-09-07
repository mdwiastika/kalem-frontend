import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl',
        hover &&
          'hover:bg-white/20 hover:border-white/30 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500',
        className,
      )}
    >
      {children}
    </div>
  )
}
