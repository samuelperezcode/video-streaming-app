import { Navbar } from './_components/navbar/navbar'
import { Sidebar } from './_components/sidebar/sidebar'

export default function BrowseLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex pt-20 h-full">
        <Sidebar />
        {children}
      </main>
    </>
  )
}
