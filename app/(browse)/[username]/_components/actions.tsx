'use client'

import { onBlock } from '@/actions/block'
import { onFollow, onUnfollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
import { toast } from 'sonner'

interface ActionsProps {
  isFollowing: boolean
  userId: string
}

export function Actions ({ isFollowing, userId }: ActionsProps) {
  const [isPending, startTransition] = useTransition()

  const labelFollow = isFollowing ? 'Unfollow' : 'Follow'
  const labelBlock = 'Block'

  const handleFollow = () => {
    startTransition(() => {
      void onFollow({ id: userId })
        .then((data) => toast.success(`You are now following ${data.following.username}`))
        .catch(() => toast.error('Something went wrong'))
    })
  }

  const handleUnfollow = () => {
    startTransition(() => {
      void onUnfollow({ id: userId })
        .then((data) => toast.success(`You are not following ${data.following.username}`))
        .catch(() => toast.error('Something went wrong'))
    })
  }

  const handleBlock = () => {
    startTransition(() => {
      void onBlock({ id: userId })
        .then((data) => toast.success(`Blocked the user ${data.blocked.username}`))
        .catch(() => toast.error('Something went wrong'))
    })
  }

  return (
    <>
      <Button
        onClick={isFollowing ? handleUnfollow : handleFollow}
        variant={'primary'}
        disabled={ isPending}
      >
        {labelFollow}
      </Button>
      <Button
       disabled={ isPending}
       onClick={handleBlock}
      >
        {labelBlock}
      </Button>
    </>
  )
}
