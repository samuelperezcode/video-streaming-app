import { getSelf } from './auth-service'
import { db } from './db'
import { getUserById } from './user-service'

export const isBlockedByUser = async ({ id }: { id: string }) => {
  try {
    const self = await getSelf()

    const otherUser = await db.user.findUnique({
      where: { id }
    })

    if (!otherUser) {
      throw new Error('User not found')
    }

    if (self.id === otherUser.id) return false

    const existingBlock = await db.block.findUnique({
      where: {
        blockedId_blockerId: {
          blockerId: otherUser.id,
          blockedId: self.id
        }
      }
    })

    return !!existingBlock
  } catch (error) {
    return false
  }
}

export const blockUser = async ({ id }: { id: string }) => {
  const self = await getSelf()

  if (self.id === id) {
    throw new Error('Cannot block yourself')
  }

  const otherUser = await getUserById({ id })

  if (!otherUser) {
    throw new Error('User not found')
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockedId_blockerId: {
        blockerId: self.id,
        blockedId: otherUser.id
      }
    }
  })

  if (existingBlock) {
    throw new Error('Already blocked')
  }

  const block = await db.block.create({
    data: {
      blockerId: self.id,
      blockedId: otherUser.id
    },
    include: {
      blocked: true
    }
  })

  return block
}

export const unblockUser = async ({ id }: { id: string }) => {
  const self = await getSelf()

  if (self.id === id) {
    throw new Error('Cannot block yourself')
  }

  const otherUser = await getUserById({ id })

  if (!otherUser) {
    throw new Error('User not found')
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockedId_blockerId: {
        blockerId: self.id,
        blockedId: otherUser.id
      }
    }
  })

  if (!existingBlock) {
    throw new Error('User is not blocked')
  }

  const unblock = await db.block.delete({
    where: {
      blockedId_blockerId: {
        blockerId: self.id,
        blockedId: otherUser.id
      }
    },
    include: {
      blocked: true
    }
  })

  return unblock
}
