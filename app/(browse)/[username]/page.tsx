import { Button } from '@/components/ui/button'
import { isFollowingUser } from '@/lib/follow-service'
import { getUserByUsername } from '@/lib/user-service'
import { notFound } from 'next/navigation'

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
  const label = isFollowing ? 'Unfollow' : 'Follow'
  return (
    <section className='flex flex-col gap-y-4'>
      <h1 className="text-2xl font-bold">{user?.username}</h1>
      <p>id: {user.id}</p>
      <article>
        <Button>{label}</Button>
      </article>
    </section>
  )
}
