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
    </Link>
  )
}
