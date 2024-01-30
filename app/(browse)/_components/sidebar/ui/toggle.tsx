'use client'

import { Hint } from '@/components/hint'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useSidebar } from '@/store/use-sidebar'
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from 'lucide-react'

export function Toggle () {
  const {
    collapsed,
    onCollapse,
    onExpand
  } = useSidebar((state) => state)

  const label = collapsed ? 'Expand' : 'Collapse'

  return (
    <>
      {
        collapsed && (
          <div className='hidden lg:flex w-full items-center justify-center pt-4 mb-4'>
            <Hint label={label} asChild side={'right'}>
              <Button variant={'ghost'} className='h-auto p-2' onClick={onExpand}>
                <ArrowRightFromLineIcon className='h-4 w-4' />
              </Button>
            </Hint>
          </div>
        )
      }
      { !collapsed && (
          <div className='p-3 pl-6 flex items-center w-full mb-2'>
            <p className='text-primary font-semibold'>For you</p>
            <Hint label={label} asChild side={'right'}>
              <Button variant={'ghost'} className='h-auto p-2 ml-auto' onClick={onCollapse}>
                <ArrowLeftFromLineIcon className='h-4 w-4' />
              </Button>
            </Hint>
          </div>
      )
      }
    </>
  )
}

export function ToggleSkeleton () {
  return (
    <div className='hidden lg:flex p3 pt-4 pl-6 mb-2 items-center justify-between w-full'>
      <Skeleton className='h-6 w-[100px]' />
      <Skeleton className='h-6 w-6 p-2' />
    </div>
  )
}
