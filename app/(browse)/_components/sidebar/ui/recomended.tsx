'use client'

import { useSidebar } from '@/store/use-sidebar'
import { type User } from '@prisma/client'
import { UserItem, UserItemSkeleton } from './user-item'

interface RecomendedProps {
  data: User[]
}

export function Recomended ({ data }: RecomendedProps) {
  const { collapsed } = useSidebar()
  const showLabel = !collapsed && data.length > 0

  return (
    <div>
      {
        showLabel && (
          <div className='pl-6 mb-4'>
            <h5 className='text-sm text-muted-foreground'>Recomended</h5>
          </div>
        )
      }
      <ul className='space-y-2 px-2'>
        {
          data.map(user => (
            <UserItem
              key={user.id}
              username={user.username}
              imageUrl = {user.imageURl}
              isLive={true}
            />
          ))
        }
      </ul>
    </div>
  )
}

export function RecomendedSkeleton () {
  return (
    <ul className='px-2'>
      {
        [...Array(3)].map((_, index) => (
          <UserItemSkeleton key={index} />
        ))
      }
    </ul>
  )
}
