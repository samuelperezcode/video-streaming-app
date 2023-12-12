export default function AuthLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full grid place-content-center">
      {children}
    </main>
  )
}
