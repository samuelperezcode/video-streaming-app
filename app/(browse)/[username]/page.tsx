interface UserPageProps {
  params: {
    username: string
  }
}

export default function UserPage ({ params: { username } }: UserPageProps) {
  return (
    <section>
      <h1 className="text-2xl font-bold">{username}</h1>
    </section>
  )
}
