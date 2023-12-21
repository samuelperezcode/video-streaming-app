import { Suspense } from 'react'
import { Container } from './_components/container/container'
import { Navbar } from './_components/navbar/navbar'
import { Sidebar, SidebarSkeleton } from './_components/sidebar/sidebar'

export default function BrowseLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex pt-20 h-full">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>
          {children}
        </Container>
      </main>
    </>
  )
}
