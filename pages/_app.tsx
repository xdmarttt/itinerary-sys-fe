import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from "../components/navbar";
import { NextPageContext } from "next";
import { IUserContext, UserContext } from "../context/user-context";

export interface CustomAppProps extends AppProps {
  userContext: IUserContext
}

function MyApp({ Component, pageProps, userContext }: CustomAppProps) {
  return <UserContext.Provider value={userContext}>
    <Navbar />
    <Component {...pageProps} />
  </UserContext.Provider>
}

MyApp.getInitialProps = async ({ ctx }: { ctx: NextPageContext}): Promise<InitialProps> => {
  const isExecutingInServer = typeof window === "undefined"
  let userContext: IUserContext = undefined

  if (isExecutingInServer && ctx.req !== undefined && ctx.req.headers.cookie !== undefined) {
    const baseURL = "http://localhost:3000"
    const request = await fetch(`${baseURL}/user-context`, {
      headers:  {
        'cookie': ctx.req.headers.cookie
      }
    })

    if (request.status === 200) {
      userContext = await request.json()
    }
  }

  return {userContext}
}

interface InitialProps {
  userContext: IUserContext
}

export default MyApp
