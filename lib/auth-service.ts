import { currentUser } from '@clerk/nextjs'
import { db } from './db'

export const getSelf = async () => {
  const self = await currentUser()

  if (!self?.username) {
    throw new Error('Unauthorized')
  }

  const user = await db.user.findUnique({
    where: {
      externalUserId: self.id
    }
  })

  if (!user) {
    throw new Error('Not Found')
  }

  return user
}
export const getSelfByUsername = async ({ username }: { username: string }) => {
  const self = await currentUser()

  if (!self?.username) {
    throw new Error('Unauthorized')
  }

  const user = await db.user.findUnique({
    where: {
      username
    }
  })

  if (!user) {
    throw new Error('Not Found')
  }

  if (self.username !== user.username) {
    throw new Error('Unauthorized')
  }
  return user
}
