interface CreatorLayoutProps {
  param: { username: string }
  children: React.ReactNode
}

export default function CreatorLayout ({ param: { username }, children }: CreatorLayoutProps) {
  return (
    <main>
      {children}
    </main>
  )
}
