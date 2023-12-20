import { UserButton } from '@clerk/nextjs'
import { Logo } from '../logo/logo'
import { SearchBar } from './ui/search-bar'

export function Navbar () {
  return (
    <header className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex items-center shadow-sm">
      <nav className="w-full flex items-center justify-between">
        <Logo />
        <SearchBar />
        <UserButton
          afterSignOutUrl='/'
        />
      </nav>
    </header>
  )
}
