import { Auth0Provider } from '@auth0/auth0-react'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri='http://localhost:3000'
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
