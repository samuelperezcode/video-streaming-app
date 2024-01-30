import { getRecommended } from '@/lib/recommended-service'
import { Recomended, RecomendedSkeleton } from './ui/recomended'
import { Toggle, ToggleSkeleton } from './ui/toggle'
import { Wrapper } from './ui/wrapper'
import { getFollowedUsers } from '@/lib/follow-service'
import { Following, FollowingSkeleton } from './ui/following'

export async function Sidebar () {
  const recomended = await getRecommended()
  const followed = await getFollowedUsers()
  return (
    <Wrapper>
      <Toggle />
      <div className='space-y-4 pt-4 lg:pt-0'>
        <Following data={followed} />
        <Recomended data={recomended} />
      </div>
    </Wrapper>
  )
}

export function SidebarSkeleton () {
  return (
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50'>
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecomendedSkeleton />
    </aside>
  )
}
