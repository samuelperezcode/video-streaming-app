'use client'

import { type User, type Follow } from '@prisma/client'
import { useSidebar } from '@/store/use-sidebar'
import { UserItem, UserItemSkeleton } from './user-item'

interface FollowingProps {
  data: Array<Follow & { following: User }>
}

export function Following ({ data }: FollowingProps) {
  const { collapsed } = useSidebar()
  const showLabel = !collapsed && data.length > 0

  if (!data.length) return null

  return (
    <div>
      {
        showLabel && (
          <div className='pl-6 mb-4'>
            <h5 className='text-sm text-muted-foreground'>Following</h5>
          </div>
        )
      }
      <ul className='space-y-2 px-2'>
        {
          data.map(follow => (
            <UserItem
              key={follow.following.id}
              username={follow.following.username}
              imageUrl = {follow.following.imageURl}
              isLive={true}
            />
          ))
        }
      </ul>
    </div>
  )
}

export const FollowingSkeleton = () => {
  return (
    <ul className='pt-2 lg:pt-0 px-2'>
      {
        [...Array(3)].map((_, index) => (
          <UserItemSkeleton key={index} />
        ))
      }
    </ul>
  )
}
