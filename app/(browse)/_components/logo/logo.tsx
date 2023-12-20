import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <div className='hidden lg:flex items-center hover:opacity-50 transition'>
        <Image
        src="/ic_120x24_general_nav_home_logo.svg"
        alt="Logo"
        width={120}
        height={24}
        className="mx-auto"
        />
      </div>
      <div className='mr-2 p-1 shrink-0 flex items-center lg:hidden hover:opacity-70 transition'>
        <Image
          src="/ic_22x28_general_nav_logo.svg"
          alt="Logo"
          width={28}
          height={28}
        />
      </div>
    </Link>
  )
}
