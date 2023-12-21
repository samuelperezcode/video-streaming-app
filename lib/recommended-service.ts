import { db } from './db'
/* import { getSelf } from './auth-service' */

export const getRecommended = async () => {
  // ? Test Skeletons
  await new Promise((resolve) => setTimeout(resolve, 5000))

  const users = await db.user.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return users
}
