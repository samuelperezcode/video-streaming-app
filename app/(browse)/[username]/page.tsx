import { isFollowingUser } from '@/lib/follow-service'
import { getUserByUsername } from '@/lib/user-service'
import { notFound } from 'next/navigation'
import { Actions } from './_components/actions'

interface UserPageProps {
  params: {
    username: string
  }
}

export default async function UserPage ({ params: { username } }: UserPageProps) {
  const user = await getUserByUsername(username)
  if (!user) {
    notFound()
  }
  const isFollowing = await isFollowingUser(user.id)

  return (
    <section className='flex flex-col gap-y-4'>
      <h1 className="text-2xl font-bold">{user?.username}</h1>
      <p>id: {user.id}</p>
      <article>
        <Actions
          isFollowing={isFollowing}
          userId={user.id}
        />
      </article>
    </section>
  )
}
