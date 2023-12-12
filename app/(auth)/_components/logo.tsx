import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
    src="/ic_120x24_general_nav_home_logo.svg"
    alt="Logo"
    width={120}
    height={24}
    className="mx-auto"
  />
  )
}
