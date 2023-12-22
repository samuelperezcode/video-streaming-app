'use client'

import { cn } from '@/lib/utils'
import { useSidebar } from '@/store/use-sidebar'
import { useEffect, useState } from 'react'
import { ToggleSkeleton } from './toggle'
import { RecomendedSkeleton } from './recomended'

interface WrapperProps {
  children: React.ReactNode
}

export function Wrapper ({ children }: WrapperProps) {
  const [isClient, setIsClient] = useState(false)
  const { collapsed } = useSidebar((state) => state)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <aside className='fixed left-0 flex flex-col h-full w-[70px] lg:w-60 bg-background border-r border-[#2d2e35] z-50'>
        <ToggleSkeleton />
        <RecomendedSkeleton />
      </aside>
    )
  }

  return (
    <aside
      className={cn(
        'fixed left-0 flex flex-col h-full w-[70px] lg:w-60 bg-background border-r border-[#2d2e35] z-50',
        collapsed && 'lg:w-[70px]'
      )}
    >
      {children}
    </aside>
  )
}
