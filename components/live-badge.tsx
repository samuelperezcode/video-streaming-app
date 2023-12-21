import { cn } from '@/lib/utils'

interface LiveBadgeProps {
  className?: string
}

export function LiveBadge ({ className }: LiveBadgeProps) {
  return (
    <span className={cn(
      'bg-rose-500 text-center py-0.5 px-1.5 rounded-md uppercase border border-background text-[10px] tracking-wide font-semibold',
      className
    )}>
      Live
    </span>
  )
}
