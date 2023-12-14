import { Navbar } from './_components/navbar/navbar'

export default function BrowseLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex pt-20 h-full">
        {children}
      </main>
    </>
  )
}
