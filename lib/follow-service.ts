import { db } from '@/lib/db'
import { getSelf } from '@/lib/auth-service'

export const isFollowingUser = async (userId: string) => {
  try {
    const self = await getSelf()

    const otherUser = await db.user.findUnique({
      where: {
        id: userId
      }
    })

    if (!otherUser) {
      throw new Error('User not found')
    }

    if (otherUser.id === self.id) {
      return true
    }

    const existFollow = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: otherUser.id
      }
    })

    return !!existFollow
  } catch (error) {
    return false
  }
}
