import { useAuth0 } from '@auth0/auth0-react'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <button onClick={loginWithRedirect}>ログイン</button>
      <button onClick={logout}>ログアウト</button><br />
      <Link href='/user'>
        <a>プロフィール</a>
      </Link>
    </div>
  )
}
