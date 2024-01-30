'use client'

import { onFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
import { toast } from 'sonner'

interface ActionsProps {
  isFollowing: boolean
  userId: string
}

export function Actions ({ isFollowing, userId }: ActionsProps) {
  const [isPending, startTransition] = useTransition()

  const label = isFollowing ? 'Unfollow' : 'Follow'

  const handleFollow = () => {
    startTransition(() => {
      void onFollow({ id: userId })
        .then((data) => toast.success(`You are now following ${data.following.username}`))
        .catch(() => toast.error('Something went wrong'))
    })
  }

  return (
    <Button
      onClick={handleFollow}
      variant={'primary'}
      disabled={isFollowing || isPending}
    >
      {label}
    </Button>
  )
}
