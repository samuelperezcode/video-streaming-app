import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'

export default function Home () {
  return (
    <main className='h-screen grid place-content-center'>
      <UserButton
        afterSignOutUrl='/'
      />
      <h1>Only authenticated users can see this</h1>
      <Button>Click me</Button>
    </main>
  )
}
