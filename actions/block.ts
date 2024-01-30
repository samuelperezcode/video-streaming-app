'use server'

import { blockUser, unblockUser } from '@/lib/block-service'
import { revalidatePath } from 'next/cache'

export const onBlock = async ({ id }: { id: string }) => {
  // TODO: Adapt to disconnect from live stream
  // TODO: Allow ability to kick the guest
  const blockedUser = await blockUser({ id })

  revalidatePath('/')

  if (blockedUser) {
    revalidatePath(`/${blockedUser.blocked.username}`)
  }

  return blockedUser
}

export const onUnblock = async ({ id }: { id: string }) => {
  const unblockedUser = await unblockUser({ id })

  revalidatePath('/')

  if (unblockedUser) {
    revalidatePath(`/${unblockedUser.blocked.username}`)
  }

  return unblockedUser
}
