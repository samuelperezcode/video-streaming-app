'use client'

import { cn } from '@/lib/utils'
import { useSidebar } from '@/store/use-sidebar'
import { ToggleSkeleton } from './toggle'
import { RecomendedSkeleton } from './recomended'
import { useIsClient } from 'usehooks-ts'
import { FollowingSkeleton } from './following'

interface WrapperProps {
  children: React.ReactNode
}

export function Wrapper ({ children }: WrapperProps) {
  const isClient = useIsClient()
  const { collapsed } = useSidebar((state) => state)

  if (!isClient) {
    return (
      <aside className='fixed left-0 flex flex-col h-full w-[70px] lg:w-60 bg-background border-r border-[#2d2e35] z-50'>
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecomendedSkeleton />
      </aside>
    )
  }

  return (
    <aside
      className={cn(
        'fixed left-0 flex flex-col h-full w-60 bg-background border-r border-[#2d2e35] z-50',
        collapsed && 'w-[70px]'
      )}
    >
      {children}
    </aside>
  )
}
