import { getRecommended } from '@/lib/recommended-service'
import { Recomended, RecomendedSkeleton } from './ui/recomended'
import { Toggle } from './ui/toggle'
import { Wrapper } from './ui/wrapper'

export async function Sidebar () {
  const recomended = await getRecommended()
  return (
    <Wrapper>
      <Toggle />
      <div className='space-y-4 pt-4 lg:pt-0'>
        <Recomended data={recomended} />
      </div>
    </Wrapper>
  )
}

export function SidebarSkeleton () {
  return (
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50'>
      <RecomendedSkeleton />
    </aside>
  )
}
