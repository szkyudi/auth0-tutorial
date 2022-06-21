import { useAuth0 } from '@auth0/auth0-react'
import Image from 'next/image';

export default function Home() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>loading</div>
  }

  return (
    <div>
      <button onClick={loginWithRedirect}>ログイン</button>
      <button onClick={logout}>ログアウト</button>
      {isAuthenticated && (
        <div>
          <Image width={100} height={100} src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  )
}
