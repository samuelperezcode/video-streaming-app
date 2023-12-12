import { Logo } from './_components/logo'

export default function AuthLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full grid place-content-center gap-2">
      <Logo />
      {children}
    </main>
  )
}
